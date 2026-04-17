/* CONFIGURATION */
// If you want to configure this to your league, change the LEAGUE_ID to match
// your league id in NHL Bracket Challenge
// and LEAGUE_DISPLAY_NAME to your league's name for the heading
const LEAGUE_ID = 19360;
const LEAGUE_DISPLAY_NAME = "Koodiklinikan";
/* END OF CONFIGURATION */

// Set theme synchronously before first render to avoid logo variant flash
const storedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
if (storedTheme) {
  document.documentElement.setAttribute("data-theme", storedTheme);
} else if (prefersDark) {
  document.documentElement.setAttribute("data-theme", "dark");
}

const USE_MOCK = new URLSearchParams(window.location.search).has("mock");
const ENTRIES_URL = USE_MOCK
  ? "http://localhost:3000/picks"
  : `https://low6-nhl-brackets-prod.azurewebsites.net/leagues/${LEAGUE_ID}/leaderboard?offset=0&limit=100`;
const SERIES_URL = USE_MOCK
  ? "http://localhost:3000/results"
  : "https://low6-nhl-brackets-prod.azurewebsites.net/game";
const LOGO_BASE = "https://assets.nhle.com/logos/nhl/svg/";

let ENTRIES_DATA = null;
let SERIES_DATA = null;
let LEADER_DATA = null;

const title = document.querySelector("title");
title.textContent = `${LEAGUE_DISPLAY_NAME} ${title.textContent}`;

const h1 = document.querySelector("h1");
h1.textContent = `${LEAGUE_DISPLAY_NAME} ${h1.textContent}`;

// Normalize API fields to numbers at the fetch boundary so the rest of the
// code can use === throughout.
function normalizeGame(game) {
  return {
    ...game,
    id: Number(game.id),
    team_1_id: Number(game.team_1_id),
    team_2_id: Number(game.team_2_id),
    winner_id: game.winner_id != null ? Number(game.winner_id) : null,
    team_1_wins: Number(game.team_1_wins),
    team_2_wins: Number(game.team_2_wins),
    round_sequence: Number(game.round_sequence),
  };
}

function normalizeTeam(team) {
  return { ...team, team_id: Number(team.team_id) };
}

function normalizeEntry(entry, gameIds) {
  const norm = {
    ...entry,
    rank: Number(entry.rank),
    points: Number(entry.points),
    possible_points: Number(entry.possible_points),
    champion_id: Number(entry.champion_id),
  };
  for (const id of gameIds) {
    if (`match_${id}_pick` in norm)
      norm[`match_${id}_pick`] = Number(norm[`match_${id}_pick`]);
    if (`match_${id}_match_played` in norm)
      norm[`match_${id}_match_played`] = Number(norm[`match_${id}_match_played`]);
  }
  return norm;
}

/**
 * Checks if user's pick for a given series is correct
 * @param {object} entry User's entry
 * @param {object} game Game result
 * @returns user's pick matches the result of game
 */
function isCorrectPick(entry, game) {
  return entry[`match_${game.id}_pick`] === game.winner_id;
}

/**
 * Checks if user has guessed the right amount of games for a series
 *
 * @param {object} entry
 * @param {object} game
 * @returns
 */
function isCorrectAmountGames(entry, game) {
  if (!game.is_scored) {
    return false;
  }
  const seriesLength = game.team_1_wins + game.team_2_wins;
  return seriesLength === entry[`match_${game.id}_match_played`];
}

/**
 * Given a list of series, checks if they have all finished
 * @param {Array} series
 * @returns all series have finished
 */
function hasFinished(series) {
  return series.every((serie) => serie.is_scored);
}

function getLogoUrl(abbreviation) {
  const theme = document.documentElement.getAttribute("data-theme");
  const variant = theme === "dark" ? "dark" : "light";
  return `${LOGO_BASE}${abbreviation}_${variant}.svg`;
}

// Swap logo src attributes in place instead of triggering a full table re-render
function updateLogoTheme(theme) {
  const newVariant = theme === "dark" ? "dark" : "light";
  const oldVariant = newVariant === "dark" ? "light" : "dark";
  for (const img of document.querySelectorAll(`img[src*="${LOGO_BASE}"]`)) {
    img.src = img.src.replace(`_${oldVariant}.svg`, `_${newVariant}.svg`);
  }
}

/**
 * Adds dynamic table header cells for series matchups
 * in form of "[homeLogo] - [awayLogo]"
 *
 * @param {Array} games An array of currently displayed series
 * @param {Array} teams An array of teams in the playoffs
 */
function createHeaders(games, teams) {
  const tr = document.querySelector("thead > tr");
  for (const game of games) {
    const th = document.createElement("th");
    th.scope = "col";
    const div = document.createElement("div");
    div.classList.add("series");
    th.appendChild(div);
    th.classList.add("series");
    tr.appendChild(th);

    const homeLogo = document.createElement("img");
    const homeTeam = teams.find((team) => team.team_id === game.team_1_id);
    homeLogo.alt = homeTeam?.display_name || "?";
    homeLogo.src = homeTeam ? getLogoUrl(homeTeam.abbreviation) : null;

    const awayLogo = document.createElement("img");
    const awayTeam = teams.find((team) => team.team_id === game.team_2_id);
    awayLogo.alt = awayTeam?.display_name || "?";
    awayLogo.src = awayTeam ? getLogoUrl(awayTeam.abbreviation) : null;

    const separator = document.createElement("span");
    separator.textContent = " - ";
    div.appendChild(homeLogo);
    div.appendChild(separator);
    div.appendChild(awayLogo);
  }
}

/**
 * Creates a row based on user's information:
 * their rank, name, champion pick, points, possible max points
 * and each pick.
 *
 * If a series has already finished, also show if the pick was correct/incorrect
 * and how many games user had guessed
 *
 * @param {object} entry
 * @param {HTMLTableRowElement} tr
 * @param {Array} games
 * @param {Array} teams
 */
function createRow(entry, tr, games, teams) {
  const { rank, entry_name, points, possible_points, champion_id } = entry;

  // Create columns
  const rankTd = document.createElement("td");
  const nameTd = document.createElement("td");
  const pointsTd = document.createElement("td");
  const possiblePointsTd = document.createElement("td");
  const championTd = document.createElement("td");

  tr.appendChild(rankTd);
  tr.appendChild(nameTd);
  tr.appendChild(championTd);
  tr.appendChild(pointsTd);
  tr.appendChild(possiblePointsTd);

  if (possible_points < LEADER_DATA.points) {
    const s = document.createElement("s");
    s.title = "eliminated";
    s.setAttribute("aria-label", `${rank}, eliminated`);
    s.textContent = rank;
    rankTd.appendChild(s);
  } else {
    rankTd.textContent = rank;
  }
  rankTd.dataset.heading = "rank";

  // Bit of entry name cleaning up as the software default's to
  // format of "User name's bracket 1" and that's ugly
  const entryNameCleaned = entry_name.replace(/'s bracket \d+/, "");
  nameTd.appendChild(document.createTextNode(entryNameCleaned));
  nameTd.classList.add("wide");
  nameTd.dataset.heading = "name";

  const championLogo = document.createElement("img");
  const championTeam = teams.find((team) => team.team_id === champion_id);
  championLogo.src = championTeam ? getLogoUrl(championTeam.abbreviation) : "invalid.svg";
  championLogo.alt = championTeam?.display_name || "?";
  championTd.appendChild(championLogo);
  championTd.classList.add("narrow", "logo");
  championTd.dataset.heading = "champion";

  pointsTd.textContent = points;
  pointsTd.dataset.heading = "points";

  possiblePointsTd.textContent = possible_points;
  possiblePointsTd.dataset.heading = "max points";

  for (const game of games) {
    const gameTd = document.createElement("td");
    const inner = document.createElement("div");
    gameTd.appendChild(inner);
    inner.classList.add("inner");
    const selectedPick = document.createElement("img");
    inner.appendChild(selectedPick);

    gameTd.classList.add("narrow", "logo");

    const homeTeam = teams.find((team) => team.team_id === game.team_1_id);
    const awayTeam = teams.find((team) => team.team_id === game.team_2_id);
    gameTd.dataset.heading = `${homeTeam?.abbreviation || "?"} - ${awayTeam?.abbreviation || "?"}`;

    const userPick = entry[`match_${game.id}_pick`];

    // If user's pick is not in the running anymore
    if (userPick !== game.team_1_id && userPick !== game.team_2_id) {
      selectedPick.src = "dash.svg";
      selectedPick.alt = "Pick no longer in play";
      selectedPick.classList.add("dash-icon");
    } else {
      const pickedTeam = teams.find((team) => team.team_id === userPick);
      selectedPick.src = pickedTeam ? getLogoUrl(pickedTeam.abbreviation) : "invalid.svg";
      selectedPick.alt = pickedTeam?.display_name || "?";
    }

    // If the series is finished, show which picks were right
    // and how many games participants guessed the series would take
    if (game.winner_id !== null) {
      const correctPick = isCorrectPick(entry, game);

      // Only first round has picks for how many games series takes.
      if (game.round_sequence === 1) {
        const span = document.createElement("span");
        span.textContent = `(in ${entry[`match_${game.id}_match_played`]})`;
        inner.appendChild(span);
        if (correctPick && isCorrectAmountGames(entry, game)) {
          span.classList.add("correct-games");
        }
      }

      if (correctPick) {
        gameTd.classList.add("correct");
      } else {
        gameTd.classList.add("incorrect");
      }
    }
    tr.appendChild(gameTd);
  }
}

const fieldset = document.querySelector("fieldset");

function clearTable() {
  clearHeaders();
  document.querySelector("tbody").innerHTML = "";
}

function clearHeaders() {
  const thead = document.querySelector("thead");
  thead.innerHTML = `
  <tr>
    <th scope="col">Sij.</th>
    <th scope="col">Nimi</th>
    <th scope="col">Mestari</th>
    <th scope="col">Pist.</th>
    <th scope="col">Max.</th>
  </tr>`;
}

async function renderFields() {
  const [, series] = await fetchData();
  const games = series.game.series_results;
  const roundGames = [
    games.filter((g) => g.round_sequence === 1),
    games.filter((g) => g.round_sequence === 2),
    games.filter((g) => g.round_sequence === 3),
  ];

  // Remove old event listeners before clearing fieldset
  const oldRadios = fieldset.querySelectorAll('input[type="radio"]');
  for (const radio of oldRadios) {
    radio.removeEventListener("change", handleRoundChange);
  }

  fieldset.innerHTML = "<legend>Valitse kierros</legend>";
  const radios = [
    createRoundSelector("1. kierros", "first", fieldset),
    createRoundSelector("2. kierros", "second", fieldset),
    createRoundSelector("Konferenssifinaalit", "third", fieldset),
    createRoundSelector("Stanley Cup", "fourth", fieldset),
  ];

  // Default to Stanley Cup (index 3) if all earlier rounds are finished
  let activeIndex = roundGames.findIndex((rg) => !hasFinished(rg));
  if (activeIndex === -1) activeIndex = roundGames.length;

  for (const radio of radios.slice(0, activeIndex + 1)) {
    radio.disabled = false;
    radio.parentNode.classList.remove("disabled");
  }
  radios[activeIndex].checked = true;
}

function handleRoundChange(ev) {
  const round = ev.target.value;
  // fetchData's catch already surfaced the error via showError
  renderTable(round).catch(() => {});
}

function createRoundSelector(label, name, fieldset) {
  const wrapper = document.createElement("div");
  wrapper.classList.add("disabled");
  const radio = document.createElement("input");
  radio.type = "radio";
  radio.value = name;
  radio.name = "round";
  radio.id = name;
  const labelNode = document.createElement("label");
  labelNode.textContent = label;
  labelNode.htmlFor = name;

  // Use addEventListener instead of onchange property
  radio.addEventListener("change", handleRoundChange);
  radio.disabled = true;

  wrapper.appendChild(labelNode);
  wrapper.appendChild(radio);

  fieldset.appendChild(wrapper);
  return radio;
}

function showError(message) {
  const loadingElement = document.querySelector("#loading");
  loadingElement.textContent = `Error: ${message}`;
  loadingElement.style.display = "block";
  loadingElement.classList.add("error");
  document.querySelector("table").style.display = "none";
  fieldset.style.display = "none";
}

async function fetchWithTimeout(url, timeout = 5000) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, { signal: controller.signal });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    if (error.name === "AbortError") {
      throw new Error("Request timed out");
    }
    throw error;
  } finally {
    clearTimeout(timeoutId);
  }
}

async function fetchData() {
  try {
    // Work on locals so a failure mid-pipeline leaves globals untouched and a
    // retry re-fetches cleanly instead of caching partially-normalized state.
    let entries = ENTRIES_DATA;
    let series = SERIES_DATA;

    if (entries === null) {
      const entriesResponse = await fetchWithTimeout(ENTRIES_URL);
      if (!entriesResponse?.entries) {
        throw new Error("Invalid entries data received from server");
      }
      entries = entriesResponse.entries;
    }

    if (series === null) {
      const rawSeries = await fetchWithTimeout(SERIES_URL);
      if (!rawSeries?.game?.series_results) {
        throw new Error("Invalid series data received from server");
      }
      series = {
        ...rawSeries,
        game: {
          ...rawSeries.game,
          series_results: rawSeries.game.series_results.map(normalizeGame),
          teams: rawSeries.game.teams.map(normalizeTeam),
        },
      };
      const gameIds = series.game.series_results.map((g) => g.id);
      entries = entries.map((e) => normalizeEntry(e, gameIds));
    }

    if (entries.length === 0) {
      throw new Error("Invalid entries data: empty leaderboard");
    }

    ENTRIES_DATA = entries;
    SERIES_DATA = series;
    // Leaderboard endpoint returns entries sorted by points descending
    LEADER_DATA = entries[0];

    return [ENTRIES_DATA, SERIES_DATA];
  } catch (error) {
    console.error("Error fetching data:", error);
    let errorMessage = "Failed to load data. ";

    if (error.message === "Request timed out") {
      errorMessage +=
        "The server is taking too long to respond. Please try again later.";
    } else if (error.message.includes("Invalid")) {
      errorMessage += "The server returned unexpected data.";
    } else if (!navigator.onLine) {
      errorMessage += "Please check your internet connection.";
    } else if (USE_MOCK) {
      errorMessage +=
        "Mock server unreachable. Run `npx json-server tests/mock-api.json`.";
    } else {
      errorMessage += "Please try again later.";
    }

    showError(errorMessage);
    throw error;
  }
}

async function renderTable(toDisplay) {
  clearTable();
  const [entries, series] = await fetchData();

  const games = series.game.series_results;
  const teams = series.game.teams;

  const firstRoundGames = games.filter((game) => game.round_sequence === 1);
  const secondRoundGames = games.filter((game) => game.round_sequence === 2);
  const conferenceFinals = games.filter((game) => game.round_sequence === 3);
  const finals = games.filter((game) => game.round_sequence === 4);

  // Choose the round to display based on the earliest round that is not finished
  // If you want to tweak what is displayed, tinker with this.
  let roundToDisplay = [];
  if (!hasFinished(firstRoundGames) || toDisplay === "first") {
    roundToDisplay = firstRoundGames;
  } else if (!hasFinished(secondRoundGames) || toDisplay === "second") {
    roundToDisplay = secondRoundGames;
  } else if (!hasFinished(conferenceFinals) || toDisplay === "third") {
    roundToDisplay = conferenceFinals;
  } else {
    roundToDisplay = finals;
  }

  createHeaders(roundToDisplay, teams);

  const tbody = document.querySelector("tbody");

  for (const entry of entries) {
    const tr = document.createElement("tr");
    createRow(entry, tr, roundToDisplay, teams);
    tbody.appendChild(tr);
  }

  document.querySelector("table").style.display = "block";
  document.querySelector("#loading").style.display = "none";
  fieldset.style.display = "flex";
}

renderFields()
  .then(() => renderTable())
  // fetchData's catch already surfaced the error via showError
  .catch(() => {});

// Single DOMContentLoaded: theme toggle button + logo-swap observer
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("theme-toggle").addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });

  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.attributeName === "data-theme") {
        updateLogoTheme(document.documentElement.getAttribute("data-theme"));
      }
    }
  });

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
});
