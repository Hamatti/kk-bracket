/* A general note: this file uses a lot of == instead of === for a purpose.
 * The API is very inconsistent in how it stores information:
 * sometimes its numbers and sometimes numeric strings.
 *
 * Don't blindly refactor them to === or you'll make a mess.
 * A better approach would be to actually map what types are used and where.
 */

/* CONFIGURATION */
// If you want to configure this to your league, change the LEAGUE_ID to match
// your league id in NHL Bracket Challenge
// and LEAGUE_DISPLAY_NAME to your league's name for the heading
const LEAGUE_ID = 28756;
const LEAGUE_DISPLAY_NAME = "Koodiklinikan";
/* END OF CONFIGURATION */

// Theme switching functionality
function initTheme() {
  const themeToggle = document.getElementById("theme-toggle");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const storedTheme = localStorage.getItem("theme");

  // Set initial theme
  if (storedTheme) {
    document.documentElement.setAttribute("data-theme", storedTheme);
  } else if (prefersDark) {
    document.documentElement.setAttribute("data-theme", "dark");
  }

  // Handle theme toggle
  themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  });
}

// Initialize theme after DOM content is loaded
document.addEventListener("DOMContentLoaded", initTheme);

const ENTRIES_URL = `https://low6-nhl-brackets-prod.azurewebsites.net/leagues/${LEAGUE_ID}/leaderboard?offset=0&limit=100`;
const MEMBERS_URL = `https://low6-nhl-brackets-prod.azurewebsites.net/leagues/${LEAGUE_ID}/search-members?search=&offset=0&limit=50`;
const SERIES_URL = "https://low6-nhl-brackets-prod.azurewebsites.net/game";
const LOGO_BASE = "https://assets.nhle.com/logos/nhl/svg/";

let ENTRIES_DATA = null;
let MEMBERS_DATA = null;
let SERIES_DATA = null;
let LEADER_DATA = null;

const title = document.querySelector("title");
title.textContent = `${LEAGUE_DISPLAY_NAME} ${title.textContent}`;

const h1 = document.querySelector("h1");
h1.textContent = `${LEAGUE_DISPLAY_NAME} ${h1.textContent}`;

/**
 * Checks if user's pick for a given series is correct
 * @param {object} entry User's entry
 * @param {object} game Game result
 * @returns user's pick matches the result of game
 */
function isCorrectPick(entry, game) {
  // User picks are strings, winner_id is number. Lovely.
  return Number.parseInt(entry[`match_${game.id}_pick`]) === game.winner_id;
}

/**
 * Checks if user has guessed the right amount of games for a series
 *
 * @param {object} entry
 * @param {object} game
 * @returns
 */
function isCorrectAmountGames(entry, game) {
  // If series isn't finished yet, early return false
  if (!game.is_scored) {
    return false;
  }

  // Amount of wins are strings. Lovely.
  const t1_wins = Number.parseInt(game.team_1_wins);
  const t2_wins = Number.parseInt(game.team_2_wins);
  const seriesLength = t1_wins + t2_wins;
  // Amount of wins is a string. Lovely.
  const howManyGames = Number.parseInt(entry[`match_${game.id}_match_played`]);

  return seriesLength === howManyGames;
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
    const div = document.createElement("div");
    div.classList.add("series");
    th.appendChild(div);
    th.classList.add("series");
    tr.appendChild(th);

    const homeLogo = document.createElement("img");
    const homeTeam = teams.find((team) => team.team_id == game.team_1_id);
    homeLogo.alt = homeTeam?.display_name || "?";
    homeLogo.src = homeTeam ? getLogoUrl(homeTeam.abbreviation) : null;

    const awayLogo = document.createElement("img");
    const awayTeam = teams.find((team) => team.team_id == game.team_2_id);
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

  let rankHTML = rank;
  if (Number.parseInt(possible_points) < Number.parseInt(LEADER_DATA.points)) {
    rankHTML = `<s title="eliminated">${rank}</s>`;
  }
  rankTd.innerHTML = rankHTML;
  rankTd.dataset.heading = "rank";

  // Bit of entry name cleaning up as the software default's to
  // format of "User name's bracket 1" and that's ugly
  const entryNameCleaned = entry_name.replace(/'s bracket \d+/, "");
  const nameTdText = document.createTextNode(entryNameCleaned);
  nameTd.appendChild(nameTdText);
  nameTd.classList.add("wide");
  nameTd.dataset.heading = "name";

  const championLogo = document.createElement("img");
  const championTeam = teams.find(
    (team) => team.team_id === Number.parseInt(champion_id),
  );
  championLogo.src = getLogoUrl(championTeam.abbreviation);
  championLogo.alt = championTeam.display_name;
  championTd.appendChild(championLogo);
  championTd.classList.add("narrow");
  championTd.classList.add("logo");
  championTd.dataset.heading = "champion";

  pointsTd.innerHTML = points;
  pointsTd.dataset.heading = "points";

  possiblePointsTd.innerHTML = possible_points;
  possiblePointsTd.dataset.heading = "max points";

  for (const game of games) {
    const gameTd = document.createElement("td");
    const inner = document.createElement("div");
    gameTd.appendChild(inner);
    inner.classList.add("inner");
    const selectedPick = document.createElement("img");
    inner.appendChild(selectedPick);

    gameTd.classList.add("narrow");
    gameTd.classList.add("logo");

    const homeTeam = teams.find((team) => team.team_id == game.team_1_id);
    const awayTeam = teams.find((team) => team.team_id == game.team_2_id);
    gameTd.dataset.heading = `${homeTeam?.abbreviation || "?"} - ${
      awayTeam?.abbreviation || "?"
    }`;

    const gameId = game.id;
    const pickKey = `match_${gameId}_pick`;
    const userPick = entry[pickKey];

    // If user's pick is not in the running anymore
    if (userPick !== game.team_1_id && userPick !== game.team_2_id) {
      selectedPick.src = "dash.svg";
      selectedPick.alt = "Pick no longer in play";
      selectedPick.classList.add("dash-icon");
    } else {
      const pickedTeam = teams.find(
        (team) => team.team_id === Number.parseInt(userPick),
      );
      selectedPick.src = getLogoUrl(pickedTeam.abbreviation);
      selectedPick.alt = pickedTeam.display_name;
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
          <th>Sij.</th>
          <th>Nimi</th>
          <th>Mestari</th>
          <th>Pist.</th>
          <th>Max.</th>
        </tr>`;
}

async function renderFields() {
  const [_, members, series] = await fetchData();
  const games = series.game.series_results;
  const firstRoundGames = games.filter((game) => game.round_sequence === 1);
  const secondRoundGames = games.filter((game) => game.round_sequence === 2);
  const conferenceFinals = games.filter((game) => game.round_sequence === 3);

  // Remove old event listeners before clearing fieldset
  const oldRadios = fieldset.querySelectorAll('input[type="radio"]');
  for (const radio of oldRadios) {
    radio.removeEventListener("change", handleRoundChange);
  }

  fieldset.innerHTML = "<legend>Valitse kierros</legend>";
  const r1 = createRoundSelector("1. kierros", "first", fieldset);
  const r2 = createRoundSelector("2. kierros", "second", fieldset);
  const r3 = createRoundSelector("Konferenssifinaalit", "third", fieldset);
  const r4 = createRoundSelector("Stanley Cup", "fourth", fieldset);
  if (!hasFinished(firstRoundGames)) {
    r1.disabled = false;
    r1.checked = true;
    r1.parentNode.classList.remove("disabled");
  } else if (!hasFinished(secondRoundGames)) {
    r1.disabled = false;
    r2.disabled = false;
    r2.checked = true;
    r1.parentNode.classList.remove("disabled");
    r2.parentNode.classList.remove("disabled");
  } else if (!hasFinished(conferenceFinals)) {
    r1.disabled = false;
    r2.disabled = false;
    r3.disabled = false;
    r3.checked = true;
    r1.parentNode.classList.remove("disabled");
    r2.parentNode.classList.remove("disabled");
    r3.parentNode.classList.remove("disabled");
  } else {
    r1.disabled = false;
    r2.disabled = false;
    r3.disabled = false;
    r4.disabled = false;
    r4.checked = true;
    r1.parentNode.classList.remove("disabled");
    r2.parentNode.classList.remove("disabled");
    r3.parentNode.classList.remove("disabled");
    r4.parentNode.classList.remove("disabled");
  }
}

function handleRoundChange(ev) {
  const round = ev.target.value;
  renderTable(round);
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
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    if (error.name === "AbortError") {
      throw new Error("Request timed out");
    }
    throw error;
  }
}

async function fetchData() {
  try {
    if (ENTRIES_DATA === null) {
      const entriesResponse = await fetchWithTimeout(ENTRIES_URL);
      if (!entriesResponse?.entries) {
        throw new Error("Invalid entries data received from server");
      }
      ENTRIES_DATA = entriesResponse.entries;
    }

    if (MEMBERS_DATA === null) {
      const membersResponse = await fetchWithTimeout(MEMBERS_URL);
      if (!membersResponse?.members) {
        throw new Error("Invalid members data received from server");
      }
      MEMBERS_DATA = membersResponse.members;
    }

    if (SERIES_DATA === null) {
      SERIES_DATA = await fetchWithTimeout(SERIES_URL);
      if (!SERIES_DATA?.game?.series_results) {
        throw new Error("Invalid series data received from server");
      }
    }

    if (LEADER_DATA === null && ENTRIES_DATA) {
      LEADER_DATA = ENTRIES_DATA.reduce(
        (prev, curr) =>
          Number.parseInt(prev.points) < Number.parseInt(curr.points)
            ? curr
            : prev,
        ENTRIES_DATA[0],
      );
    }

    return [ENTRIES_DATA, MEMBERS_DATA, SERIES_DATA];
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
    } else {
      errorMessage += "Please try again later.";
    }

    showError(errorMessage);
    throw error;
  }
}

async function renderTable(toDisplay) {
  clearTable();
  const [entries, members, series] = await fetchData();

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

  document.querySelector("table").style = "display: block";
  document.querySelector("#loading").style = "display: none";
  fieldset.style.display = "flex";
}

renderFields().then(() => renderTable());

function uniqueBy(array, key) {
  const uniques = [];
  for (const idx in array) {
    const obj = array[idx];
    if (uniques.find((ex) => ex[key] == obj[key]) == undefined) {
      uniques.push(obj);
    }
  }
  return uniques;
}

// Add theme change listener to update logos
document.addEventListener("DOMContentLoaded", () => {
  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.attributeName === "data-theme") {
        renderTable();
      }
    }
  });

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
});
