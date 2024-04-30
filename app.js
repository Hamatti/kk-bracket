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
const LEAGUE_ID = 15972;
const LEAGUE_DISPLAY_NAME = "Koodiklinikan";
/* END OF CONFIGURATION */

const ENTRIES_URL = `https://low6-nhl-bracket2024-prod.azurewebsites.net//leagues/${LEAGUE_ID}/leaderboard?offset=0&limit=50`;
const SERIES_URL = "https://low6-nhl-bracket2024-prod.azurewebsites.net/game";
const LOGO_BASE = "https://assets.nhle.com/logos/nhl/svg/";

let ENTRIES_DATA = null;
let SERIES_DATA = null;
let LEADER_DATA = null;

let title = document.querySelector("title");
title.textContent = `${LEAGUE_DISPLAY_NAME} ${title.textContent}`;

let h1 = document.querySelector("h1");
h1.textContent = `${LEAGUE_DISPLAY_NAME} ${h1.textContent}`;

/**
 * Checks if user's pick for a given series is correct
 * @param {object} entry User's entry
 * @param {object} game Game result
 * @returns user's pick matches the result of game
 */
function isCorrectPick(entry, game) {
  // User picks are strings, winner_id is number. Lovely.
  return parseInt(entry[`match_${game.id}_pick`]) === game.winner_id;
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
  const t1_wins = parseInt(game.team_1_wins);
  const t2_wins = parseInt(game.team_2_wins);
  const seriesLength = t1_wins + t2_wins;
  // Amount of wins is a string. Lovely.
  const howManyGames = parseInt(entry[`match_${game.id}_match_played`]);

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

/**
 * Adds dynamic table header cells for series matchups
 * in form of "[homeLogo] - [awayLogo]"
 *
 * @param {Array} games An array of currently displayed series
 * @param {Array} teams An array of teams in the playoffs
 */
function createHeaders(games, teams) {
  const tr = document.querySelector("thead > tr");
  games.forEach((game) => {
    const th = document.createElement("th");
    const div = document.createElement("div");
    div.classList.add("series");
    th.appendChild(div);
    th.classList.add("series");
    tr.appendChild(th);

    const homeLogo = document.createElement("img");
    const homeTeam = teams.find((team) => team.team_id == game.team_1_id);
    homeLogo.alt = homeTeam?.display_name || "?";
    homeLogo.src = homeTeam
      ? `${LOGO_BASE}${homeTeam.abbreviation}_light.svg`
      : null;

    const awayLogo = document.createElement("img");
    const awayTeam = teams.find((team) => team.team_id == game.team_2_id);
    awayLogo.alt = awayTeam?.display_name || "?";
    awayLogo.src = awayTeam
      ? `${LOGO_BASE}${awayTeam.abbreviation}_light.svg`
      : null;

    const separator = document.createElement("span");
    separator.textContent = " - ";
    div.appendChild(homeLogo);
    div.appendChild(separator);
    div.appendChild(awayLogo);
  });
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
  let rankTd = document.createElement("td");
  let nameTd = document.createElement("td");
  let pointsTd = document.createElement("td");
  let possiblePointsTd = document.createElement("td");
  let championTd = document.createElement("td");

  tr.appendChild(rankTd);
  tr.appendChild(nameTd);
  tr.appendChild(championTd);
  tr.appendChild(pointsTd);
  tr.appendChild(possiblePointsTd);

  let rankHTML = rank;
  if (parseInt(possible_points) < parseInt(LEADER_DATA.points)) {
    rankHTML = `<s title="eliminated">${rank}</s>`;
  }
  rankTd.innerHTML = rankHTML;
  rankTd.dataset.heading = "rank";

  // Bit of entry name cleaning up as the software default's to
  // format of "User name's bracket 1" and that's ugly
  const entryNameCleaned = entry_name.replace(/'s bracket \d+/, "")
  const nameTdText = document.createTextNode(entryNameCleaned);
  nameTd.appendChild(nameTdText);
  nameTd.classList.add("wide");
  nameTd.dataset.heading = "name";

  let championLogo = document.createElement("img");
  const championTeam = teams.find(
    (team) => team.team_id === parseInt(champion_id)
  );
  championLogo.src = `${LOGO_BASE}${championTeam.abbreviation}_light.svg`;
  championLogo.alt = championTeam.display_name;
  championTd.appendChild(championLogo);
  championTd.classList.add("narrow");
  championTd.classList.add("logo");
  championTd.dataset.heading = "champion";

  pointsTd.innerHTML = points;
  pointsTd.dataset.heading = "points";

  possiblePointsTd.innerHTML = possible_points;
  possiblePointsTd.dataset.heading = "max points";

  games.forEach((game) => {
    let gameTd = document.createElement("td");
    let inner = document.createElement("div");
    gameTd.appendChild(inner);
    inner.classList.add("inner");
    let selectedPick = document.createElement("img");
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
    if (userPick != game.team_1_id && userPick != game.team_2_id) {
      selectedPick.src = `dash.svg`;
      selectedPick.alt = "Pick no longer in play";
    } else {
      const pickedTeam = teams.find(
        (team) => team.team_id === parseInt(userPick)
      );
      selectedPick.src = `${LOGO_BASE}${pickedTeam.abbreviation}_light.svg`;
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
  });
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
  let [_, series] = await fetchData();
  let games = series.game.series_results;
  const firstRoundGames = games.filter((game) => game.round_sequence === 1);
  const secondRoundGames = games.filter((game) => game.round_sequence === 2);
  const conferenceFinals = games.filter((game) => game.round_sequence === 3);

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

  radio.onchange = handleRoundChange;
  radio.disabled = true;

  wrapper.appendChild(labelNode);
  wrapper.appendChild(radio);

  fieldset.appendChild(wrapper);
  return radio;
}

async function fetchData() {
  if (ENTRIES_DATA === null) {
    ENTRIES_DATA = (await fetch(ENTRIES_URL).then((res) => res.json())).entries;
    ENTRIES_DATA = uniqueBy(ENTRIES_DATA, "entry_id");
  }

  if (SERIES_DATA === null) {
    SERIES_DATA = await fetch(SERIES_URL).then((res) => res.json());
  }

  if (LEADER_DATA === null) {
    LEADER_DATA = ENTRIES_DATA.reduce(
      (prev, curr) =>
        parseInt(prev.points) < parseInt(curr.points) ? curr : prev,
      ENTRIES_DATA[0]
    );
  }

  return [ENTRIES_DATA, SERIES_DATA];
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

  entries.forEach((entry) => {
    let tr = document.createElement("tr");
    createRow(entry, tr, roundToDisplay, teams);
    tbody.appendChild(tr);
  });

  document.querySelector("table").style = "display: block";
  document.querySelector("#loading").style = "display: none";
  fieldset.style.display = "flex";
}

renderFields().then(() => renderTable());

function uniqueBy(array, key) {
  let uniques = [];
  for (let idx in array) {
    let obj = array[idx];
    console.log({ obj, uniques });
    if (uniques.find((ex) => ex[key] == obj[key]) == undefined) {
      uniques.push(obj);
    }
  }
  return uniques;
}
