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

// Special case for Koodiklinikka 2025 bracket

async function addMHopiaEntry(entries) {
  const MHOPIA_URL =
    "https://low6-nhl-brackets-prod.azurewebsites.net/entry/57939";
  const mhopiaEntries = await fetchWithTimeout(MHOPIA_URL);
  const allEntries = [...entries, { ...mhopiaEntries.entry, rank: "?" }];

  allEntries.sort(
    (a, b) => Number.parseInt(b.points) - Number.parseInt(a.points)
  );
  return allEntries;
}
const ENTRIES_URL = `https://low6-nhl-brackets-prod.azurewebsites.net/leagues/${LEAGUE_ID}/leaderboard?offset=0&limit=100`;
const MEMBERS_URL = `https://low6-nhl-brackets-prod.azurewebsites.net/leagues/${LEAGUE_ID}/search-members?search=&offset=0&limit=50`;
const SERIES_URL = "https://low6-nhl-brackets-prod.azurewebsites.net/game";
const LOGO_BASE = "https://assets.nhle.com/logos/nhl/svg/";

let ENTRIES_DATA = [
  {
    entry_id: "108674",
    user_id: "146381",
    points: "214",
    possible_points: "214",
    entry_name: "neriksso's bracket 1",
    champion_id: "25",
    tiebreaker: "30",
    match_101_pick: "52",
    match_102_pick: "25",
    match_103_pick: "54",
    match_104_pick: "22",
    match_105_pick: "10",
    match_106_pick: "13",
    match_107_pick: "15",
    match_108_pick: "12",
    match_201_pick: "25",
    match_202_pick: "22",
    match_203_pick: "13",
    match_204_pick: "15",
    match_301_pick: "25",
    match_302_pick: "13",
    match_401_pick: "25",
    match_101_match_played: "5",
    match_102_match_played: "7",
    match_103_match_played: "5",
    match_104_match_played: "7",
    match_105_match_played: "6",
    match_106_match_played: "6",
    match_107_match_played: "5",
    match_108_match_played: "6",
    match_201_match_played: "NaN",
    match_202_match_played: "NaN",
    match_203_match_played: "NaN",
    match_204_match_played: "NaN",
    is_second_chance: "false",
    updated_at: "2025-04-17T15:18:00.000Z",
    rank: 1,
  },
  {
    entry_id: "56549",
    user_id: "144980",
    points: "195",
    possible_points: "195",
    entry_name: "lehtu's bracket 2",
    champion_id: "25",
    tiebreaker: "26",
    match_101_pick: "52",
    match_102_pick: "25",
    match_103_pick: "54",
    match_104_pick: "22",
    match_105_pick: "10",
    match_106_pick: "13",
    match_107_pick: "8",
    match_108_pick: "12",
    match_201_pick: "25",
    match_202_pick: "22",
    match_203_pick: "13",
    match_204_pick: "8",
    match_301_pick: "25",
    match_302_pick: "13",
    match_401_pick: "25",
    match_101_match_played: "6",
    match_102_match_played: "5",
    match_103_match_played: "4",
    match_104_match_played: "4",
    match_105_match_played: "4",
    match_106_match_played: "6",
    match_107_match_played: "5",
    match_108_match_played: "6",
    match_201_match_played: "NaN",
    match_202_match_played: "NaN",
    match_203_match_played: "NaN",
    match_204_match_played: "NaN",
    is_second_chance: "false",
    updated_at: "2025-04-21T20:43:00.000Z",
    rank: 2,
  },
  {
    entry_id: "789221",
    user_id: "144909",
    points: "176",
    possible_points: "176",
    entry_name: "Juhis_koodiklinikka's bracket 1",
    champion_id: "21",
    tiebreaker: "28",
    match_101_pick: "52",
    match_102_pick: "21",
    match_103_pick: "54",
    match_104_pick: "22",
    match_105_pick: "10",
    match_106_pick: "13",
    match_107_pick: "15",
    match_108_pick: "12",
    match_201_pick: "21",
    match_202_pick: "22",
    match_203_pick: "13",
    match_204_pick: "15",
    match_301_pick: "21",
    match_302_pick: "13",
    match_401_pick: "21",
    match_101_match_played: "6",
    match_102_match_played: "6",
    match_103_match_played: "5",
    match_104_match_played: "7",
    match_105_match_played: "6",
    match_106_match_played: "7",
    match_107_match_played: "6",
    match_108_match_played: "5",
    match_201_match_played: "NaN",
    match_202_match_played: "NaN",
    match_203_match_played: "NaN",
    match_204_match_played: "NaN",
    is_second_chance: "false",
    updated_at: "2025-04-21T17:35:00.000Z",
    rank: 3,
  },
  {
    entry_id: "821062",
    user_id: "152489",
    points: "175",
    possible_points: "175",
    entry_name: "Nevalainen's bracket 1",
    champion_id: "25",
    tiebreaker: "38",
    match_101_pick: "19",
    match_102_pick: "25",
    match_103_pick: "54",
    match_104_pick: "22",
    match_105_pick: "9",
    match_106_pick: "13",
    match_107_pick: "15",
    match_108_pick: "12",
    match_201_pick: "25",
    match_202_pick: "54",
    match_203_pick: "13",
    match_204_pick: "15",
    match_301_pick: "25",
    match_302_pick: "13",
    match_401_pick: "25",
    match_101_match_played: "7",
    match_102_match_played: "7",
    match_103_match_played: "6",
    match_104_match_played: "6",
    match_105_match_played: "5",
    match_106_match_played: "7",
    match_107_match_played: "5",
    match_108_match_played: "5",
    match_201_match_played: "NaN",
    match_202_match_played: "NaN",
    match_203_match_played: "NaN",
    match_204_match_played: "NaN",
    is_second_chance: "false",
    updated_at: "2025-04-20T19:00:00.000Z",
    rank: 4,
  },
  {
    entry_id: "57939",
    user_id: "145837",
    points: "173",
    possible_points: "173",
    entry_name: "TikiTikiBoom's bracket 1",
    champion_id: "25",
    tiebreaker: "24",
    match_101_pick: "52",
    match_102_pick: "25",
    match_103_pick: "54",
    match_104_pick: "22",
    match_105_pick: "10",
    match_106_pick: "13",
    match_107_pick: "8",
    match_108_pick: "12",
    match_201_pick: "25",
    match_202_pick: "54",
    match_203_pick: "13",
    match_204_pick: "8",
    match_301_pick: "25",
    match_302_pick: "13",
    match_401_pick: "25",
    match_101_match_played: "5",
    match_102_match_played: "6",
    match_103_match_played: "5",
    match_104_match_played: "6",
    match_105_match_played: "5",
    match_106_match_played: "7",
    match_107_match_played: "7",
    match_108_match_played: "6",
    match_201_match_played: "NaN",
    match_202_match_played: "NaN",
    match_203_match_played: "NaN",
    match_204_match_played: "NaN",
    is_second_chance: "false",
    updated_at: "2025-04-17T06:51:00.000Z",
    rank: 5,
  },
  {
    entry_id: "880537",
    user_id: "710650",
    points: "172",
    possible_points: "172",
    entry_name: "valimaggi's bracket 1",
    champion_id: "21",
    tiebreaker: "37",
    match_101_pick: "52",
    match_102_pick: "21",
    match_103_pick: "54",
    match_104_pick: "26",
    match_105_pick: "10",
    match_106_pick: "13",
    match_107_pick: "15",
    match_108_pick: "12",
    match_201_pick: "21",
    match_202_pick: "54",
    match_203_pick: "13",
    match_204_pick: "12",
    match_301_pick: "21",
    match_302_pick: "13",
    match_401_pick: "21",
    match_101_match_played: "7",
    match_102_match_played: "6",
    match_103_match_played: "6",
    match_104_match_played: "6",
    match_105_match_played: "5",
    match_106_match_played: "7",
    match_107_match_played: "5",
    match_108_match_played: "5",
    match_201_match_played: "NaN",
    match_202_match_played: "NaN",
    match_203_match_played: "NaN",
    match_204_match_played: "NaN",
    is_second_chance: "false",
    updated_at: "2025-04-21T07:56:00.000Z",
    rank: 6,
  },
  {
    entry_id: "56874",
    user_id: "145132",
    points: "151",
    possible_points: "151",
    entry_name: "Upeat veikkaukset",
    champion_id: "22",
    tiebreaker: "47",
    match_101_pick: "52",
    match_102_pick: "25",
    match_103_pick: "54",
    match_104_pick: "22",
    match_105_pick: "10",
    match_106_pick: "13",
    match_107_pick: "8",
    match_108_pick: "12",
    match_201_pick: "52",
    match_202_pick: "22",
    match_203_pick: "10",
    match_204_pick: "8",
    match_301_pick: "22",
    match_302_pick: "8",
    match_401_pick: "22",
    match_101_match_played: "6",
    match_102_match_played: "7",
    match_103_match_played: "6",
    match_104_match_played: "5",
    match_105_match_played: "7",
    match_106_match_played: "6",
    match_107_match_played: "6",
    match_108_match_played: "6",
    match_201_match_played: "NaN",
    match_202_match_played: "NaN",
    match_203_match_played: "NaN",
    match_204_match_played: "NaN",
    is_second_chance: "false",
    updated_at: "2025-04-17T06:31:00.000Z",
    rank: 7,
  },
  {
    entry_id: "969601",
    user_id: "764598",
    points: "122",
    possible_points: "122",
    entry_name: "mcsorleyn lapa",
    champion_id: "26",
    tiebreaker: "41",
    match_101_pick: "52",
    match_102_pick: "25",
    match_103_pick: "54",
    match_104_pick: "26",
    match_105_pick: "10",
    match_106_pick: "14",
    match_107_pick: "15",
    match_108_pick: "12",
    match_201_pick: "25",
    match_202_pick: "26",
    match_203_pick: "14",
    match_204_pick: "12",
    match_301_pick: "26",
    match_302_pick: "14",
    match_401_pick: "26",
    match_101_match_played: "6",
    match_102_match_played: "7",
    match_103_match_played: "4",
    match_104_match_played: "7",
    match_105_match_played: "6",
    match_106_match_played: "7",
    match_107_match_played: "5",
    match_108_match_played: "5",
    match_201_match_played: "NaN",
    match_202_match_played: "NaN",
    match_203_match_played: "NaN",
    match_204_match_played: "NaN",
    is_second_chance: "false",
    updated_at: "2025-04-22T16:10:00.000Z",
    rank: 8,
  },
  {
    entry_id: "816063",
    user_id: "669152",
    points: "91",
    possible_points: "91",
    entry_name: "-Mamba-'s bracket 1",
    champion_id: "15",
    tiebreaker: "34",
    match_101_pick: "52",
    match_102_pick: "21",
    match_103_pick: "54",
    match_104_pick: "22",
    match_105_pick: "10",
    match_106_pick: "14",
    match_107_pick: "15",
    match_108_pick: "12",
    match_201_pick: "21",
    match_202_pick: "22",
    match_203_pick: "14",
    match_204_pick: "15",
    match_301_pick: "21",
    match_302_pick: "15",
    match_401_pick: "15",
    match_101_match_played: "6",
    match_102_match_played: "6",
    match_103_match_played: "5",
    match_104_match_played: "6",
    match_105_match_played: "6",
    match_106_match_played: "6",
    match_107_match_played: "6",
    match_108_match_played: "7",
    match_201_match_played: "NaN",
    match_202_match_played: "NaN",
    match_203_match_played: "NaN",
    match_204_match_played: "NaN",
    is_second_chance: "false",
    updated_at: "2025-04-20T18:03:00.000Z",
    rank: 9,
  },
  {
    entry_id: "530425",
    user_id: "474775",
    points: "90",
    possible_points: "90",
    entry_name: "eski's bracket 1",
    champion_id: "54",
    tiebreaker: "14",
    match_101_pick: "52",
    match_102_pick: "21",
    match_103_pick: "54",
    match_104_pick: "26",
    match_105_pick: "10",
    match_106_pick: "14",
    match_107_pick: "15",
    match_108_pick: "12",
    match_201_pick: "52",
    match_202_pick: "54",
    match_203_pick: "14",
    match_204_pick: "12",
    match_301_pick: "54",
    match_302_pick: "12",
    match_401_pick: "54",
    match_101_match_played: "7",
    match_102_match_played: "5",
    match_103_match_played: "6",
    match_104_match_played: "7",
    match_105_match_played: "6",
    match_106_match_played: "7",
    match_107_match_played: "5",
    match_108_match_played: "5",
    match_201_match_played: "NaN",
    match_202_match_played: "NaN",
    match_203_match_played: "NaN",
    match_204_match_played: "NaN",
    is_second_chance: "false",
    updated_at: "2025-04-20T20:20:00.000Z",
    rank: 10,
  },
  {
    entry_id: "57330",
    user_id: "145347",
    points: "85",
    possible_points: "85",
    entry_name: "Saapunki's bracket 2",
    champion_id: "52",
    tiebreaker: "34",
    match_101_pick: "52",
    match_102_pick: "21",
    match_103_pick: "54",
    match_104_pick: "26",
    match_105_pick: "10",
    match_106_pick: "13",
    match_107_pick: "15",
    match_108_pick: "12",
    match_201_pick: "52",
    match_202_pick: "26",
    match_203_pick: "13",
    match_204_pick: "15",
    match_301_pick: "52",
    match_302_pick: "15",
    match_401_pick: "52",
    match_101_match_played: "5",
    match_102_match_played: "7",
    match_103_match_played: "5",
    match_104_match_played: "6",
    match_105_match_played: "5",
    match_106_match_played: "6",
    match_107_match_played: "6",
    match_108_match_played: "7",
    match_201_match_played: "NaN",
    match_202_match_played: "NaN",
    match_203_match_played: "NaN",
    match_204_match_played: "NaN",
    is_second_chance: "false",
    updated_at: "2025-04-21T04:36:00.000Z",
    rank: 11,
  },
  {
    entry_id: "667981",
    user_id: "570675",
    points: "78",
    possible_points: "78",
    entry_name: "Juho's bracket 1",
    champion_id: "21",
    tiebreaker: "23",
    match_101_pick: "52",
    match_102_pick: "21",
    match_103_pick: "54",
    match_104_pick: "22",
    match_105_pick: "10",
    match_106_pick: "14",
    match_107_pick: "15",
    match_108_pick: "1",
    match_201_pick: "21",
    match_202_pick: "22",
    match_203_pick: "14",
    match_204_pick: "15",
    match_301_pick: "21",
    match_302_pick: "14",
    match_401_pick: "21",
    match_101_match_played: "5",
    match_102_match_played: "6",
    match_103_match_played: "4",
    match_104_match_played: "5",
    match_105_match_played: "6",
    match_106_match_played: "5",
    match_107_match_played: "4",
    match_108_match_played: "5",
    match_201_match_played: "NaN",
    match_202_match_played: "NaN",
    match_203_match_played: "NaN",
    match_204_match_played: "NaN",
    is_second_chance: "false",
    updated_at: "2025-04-19T20:00:00.000Z",
    rank: 12,
  },
  {
    entry_id: "964544",
    user_id: "762015",
    points: "76",
    possible_points: "76",
    entry_name: "rekmaster69's bracket 1",
    champion_id: "52",
    tiebreaker: "28",
    match_101_pick: "52",
    match_102_pick: "25",
    match_103_pick: "54",
    match_104_pick: "22",
    match_105_pick: "10",
    match_106_pick: "13",
    match_107_pick: "8",
    match_108_pick: "12",
    match_201_pick: "52",
    match_202_pick: "54",
    match_203_pick: "10",
    match_204_pick: "8",
    match_301_pick: "52",
    match_302_pick: "10",
    match_401_pick: "52",
    match_101_match_played: "5",
    match_102_match_played: "7",
    match_103_match_played: "6",
    match_104_match_played: "7",
    match_105_match_played: "7",
    match_106_match_played: "6",
    match_107_match_played: "7",
    match_108_match_played: "6",
    match_201_match_played: "NaN",
    match_202_match_played: "NaN",
    match_203_match_played: "NaN",
    match_204_match_played: "NaN",
    is_second_chance: "false",
    updated_at: "2025-04-22T14:16:00.000Z",
    rank: 13,
  },
  {
    entry_id: "896593",
    user_id: "720247",
    points: "56",
    possible_points: "56",
    entry_name: "Lexa666's bracket 1",
    champion_id: "54",
    tiebreaker: "39",
    match_101_pick: "52",
    match_102_pick: "21",
    match_103_pick: "54",
    match_104_pick: "26",
    match_105_pick: "10",
    match_106_pick: "14",
    match_107_pick: "15",
    match_108_pick: "12",
    match_201_pick: "21",
    match_202_pick: "54",
    match_203_pick: "14",
    match_204_pick: "15",
    match_301_pick: "54",
    match_302_pick: "14",
    match_401_pick: "54",
    match_101_match_played: "5",
    match_102_match_played: "5",
    match_103_match_played: "4",
    match_104_match_played: "7",
    match_105_match_played: "6",
    match_106_match_played: "6",
    match_107_match_played: "5",
    match_108_match_played: "4",
    match_201_match_played: "NaN",
    match_202_match_played: "NaN",
    match_203_match_played: "NaN",
    match_204_match_played: "NaN",
    is_second_chance: "false",
    updated_at: "2025-04-21T17:03:00.000Z",
    rank: 14,
  },
  {
    entry_id: "58698",
    user_id: "146104",
    points: "53",
    possible_points: "53",
    entry_name: "SubbanHitOnMarchand's bracket 1",
    champion_id: "54",
    tiebreaker: "36",
    match_101_pick: "52",
    match_102_pick: "21",
    match_103_pick: "54",
    match_104_pick: "26",
    match_105_pick: "10",
    match_106_pick: "14",
    match_107_pick: "15",
    match_108_pick: "12",
    match_201_pick: "21",
    match_202_pick: "54",
    match_203_pick: "14",
    match_204_pick: "15",
    match_301_pick: "54",
    match_302_pick: "14",
    match_401_pick: "54",
    match_101_match_played: "6",
    match_102_match_played: "7",
    match_103_match_played: "6",
    match_104_match_played: "7",
    match_105_match_played: "7",
    match_106_match_played: "7",
    match_107_match_played: "6",
    match_108_match_played: "7",
    match_201_match_played: "NaN",
    match_202_match_played: "NaN",
    match_203_match_played: "NaN",
    match_204_match_played: "NaN",
    is_second_chance: "false",
    updated_at: "2025-04-22T12:38:00.000Z",
    rank: 15,
  },
  {
    entry_id: "634850",
    user_id: "146460",
    points: "49",
    possible_points: "49",
    entry_name: "mkainula's bracket 2",
    champion_id: "21",
    tiebreaker: "29",
    match_101_pick: "52",
    match_102_pick: "21",
    match_103_pick: "54",
    match_104_pick: "26",
    match_105_pick: "9",
    match_106_pick: "14",
    match_107_pick: "15",
    match_108_pick: "12",
    match_201_pick: "21",
    match_202_pick: "54",
    match_203_pick: "14",
    match_204_pick: "15",
    match_301_pick: "21",
    match_302_pick: "15",
    match_401_pick: "21",
    match_101_match_played: "6",
    match_102_match_played: "5",
    match_103_match_played: "6",
    match_104_match_played: "6",
    match_105_match_played: "6",
    match_106_match_played: "7",
    match_107_match_played: "5",
    match_108_match_played: "5",
    match_201_match_played: "NaN",
    match_202_match_played: "NaN",
    match_203_match_played: "NaN",
    match_204_match_played: "NaN",
    is_second_chance: "false",
    updated_at: "2025-04-19T18:15:00.000Z",
    rank: 16,
  },
  {
    entry_id: "56571",
    user_id: "144922",
    points: "33",
    possible_points: "33",
    entry_name: "einomies's bracket 1",
    champion_id: "8",
    tiebreaker: "35",
    match_101_pick: "19",
    match_102_pick: "21",
    match_103_pick: "54",
    match_104_pick: "26",
    match_105_pick: "10",
    match_106_pick: "14",
    match_107_pick: "8",
    match_108_pick: "12",
    match_201_pick: "19",
    match_202_pick: "26",
    match_203_pick: "10",
    match_204_pick: "8",
    match_301_pick: "26",
    match_302_pick: "8",
    match_401_pick: "8",
    match_101_match_played: "7",
    match_102_match_played: "5",
    match_103_match_played: "6",
    match_104_match_played: "5",
    match_105_match_played: "5",
    match_106_match_played: "4",
    match_107_match_played: "4",
    match_108_match_played: "6",
    match_201_match_played: "NaN",
    match_202_match_played: "NaN",
    match_203_match_played: "NaN",
    match_204_match_played: "NaN",
    is_second_chance: "false",
    updated_at: "2025-04-17T06:26:00.000Z",
    rank: 17,
  },
];
let MEMBERS_DATA = null;
let SERIES_DATA = {
  game: {
    teams: [
      {
        team_id: 52,
        nickname: "Jets",
        city: "Winnipeg",
        display_name: "Winnipeg Jets",
        abbreviation: "WPG",
        twitter_handle: "x",
        hex_code: "55565A",
        display_seed: "C1",
        team_logo:
          "https://allstarvotefilesde.blob.core.windows.net/nhl-team-logos/52.svg",
        secondary_hex_code: "041E42",
        leading_scorer: "Kyle Connor",
        leading_scorer_avatar:
          "https://low6nhlbracketsprod.blob.core.windows.net/assets/K. Connor.png",
        leading_scorer_points: "97 Points",
        wins: 56,
        points: 116,
        goals_per_game: 3.3537,
        goals_against_per_game: 2.317073,
        power_play_pct: 28.9,
        penalty_kill_pct: 79.4,
      },
      {
        team_id: 25,
        nickname: "Stars",
        city: "Dallas",
        display_name: "Dallas Stars",
        abbreviation: "DAL",
        twitter_handle: "x",
        hex_code: "00843D",
        display_seed: "C2",
        team_logo:
          "https://allstarvotefilesde.blob.core.windows.net/nhl-team-logos/25.svg",
        secondary_hex_code: "111111",
        wins: 50,
        points: 106,
        goals_per_game: 3.3537,
        goals_against_per_game: 2.707317,
        power_play_pct: 22,
        penalty_kill_pct: 82.02,
        leading_scorer: "Mikko Rantanen",
        leading_scorer_avatar:
          "https://low6nhlbracketsprod.blob.core.windows.net/assets/8478420.png",
        leading_scorer_points: "88 Points",
      },
      {
        team_id: 21,
        nickname: "Avalanche",
        city: "Colorado",
        display_name: "Colorado Avalanche",
        abbreviation: "COL",
        twitter_handle: "x",
        hex_code: "6F263D",
        display_seed: "C3",
        team_logo:
          "https://allstarvotefilesde.blob.core.windows.net/nhl-team-logos/21.svg",
        secondary_hex_code: "236192",
        wins: 49,
        points: 102,
        goals_per_game: 3.3293,
        goals_against_per_game: 2.817073,
        power_play_pct: 24.79,
        penalty_kill_pct: 79.81,
        leading_scorer: "Nathan MacKinnon",
        leading_scorer_avatar:
          "https://low6nhlbracketsprod.blob.core.windows.net/assets/8477492.png",
        leading_scorer_points: "116 Points",
      },
      {
        team_id: 54,
        nickname: "Golden Knights",
        city: "Vegas",
        display_name: "Vegas Golden Knights",
        abbreviation: "VGK",
        twitter_handle: "x",
        hex_code: "333f42",
        display_seed: "P1",
        team_logo:
          "https://allstarvotefilesde.blob.core.windows.net/nhl-team-logos/54.svg",
        secondary_hex_code: "B4975A",
        wins: 50,
        points: 110,
        goals_per_game: 3.3415,
        goals_against_per_game: 2.609756,
        power_play_pct: 28.34,
        penalty_kill_pct: 75.74,
        leading_scorer: "Jack Eichel",
        leading_scorer_points: "94 Points",
        leading_scorer_avatar:
          "https://low6nhlbracketsprod.blob.core.windows.net/assets/8478403.png",
      },
      {
        team_id: 26,
        nickname: "Kings",
        city: "Los Angeles",
        display_name: "Los Angeles Kings",
        abbreviation: "LAK",
        twitter_handle: "x",
        hex_code: "111111",
        display_seed: "P2",
        team_logo:
          "https://allstarvotefilesde.blob.core.windows.net/nhl-team-logos/26.svg",
        secondary_hex_code: "A2AAAD",
        wins: 48,
        points: 105,
        goals_per_game: 3.0366,
        goals_against_per_game: 2.47561,
        power_play_pct: 17.87,
        penalty_kill_pct: 81.43,
        leading_scorer: "Adrian Kempe",
        leading_scorer_avatar:
          "https://low6nhlbracketsprod.blob.core.windows.net/assets/8477960.png",
        leading_scorer_points: "73 Points",
      },
      {
        team_id: 22,
        nickname: "Oilers",
        city: "Edmonton",
        display_name: "Edmonton Oilers",
        abbreviation: "EDM",
        twitter_handle: "x",
        hex_code: "00205B",
        display_seed: "P3",
        team_logo:
          "https://allstarvotefilesde.blob.core.windows.net/nhl-team-logos/22.svg",
        secondary_hex_code: "FF4C00",
        wins: 48,
        points: 101,
        goals_per_game: 3.1585,
        goals_against_per_game: 2.865854,
        power_play_pct: 23.72,
        penalty_kill_pct: 78.16,
        leading_scorer: "Leon Draisaitl",
        leading_scorer_avatar:
          "https://low6nhlbracketsprod.blob.core.windows.net/assets/8477934.png",
        leading_scorer_points: "106 Points",
      },
      {
        team_id: 19,
        nickname: "Blues",
        city: "St. Louis",
        display_name: "St. Louis Blues",
        abbreviation: "STL",
        twitter_handle: "x",
        hex_code: "002B88",
        display_seed: "WC2",
        team_logo:
          "https://allstarvotefilesde.blob.core.windows.net/nhl-team-logos/19.svg",
        secondary_hex_code: "FCB60C",
        wins: 44,
        points: 96,
        goals_per_game: 3.0488,
        goals_against_per_game: 2.817073,
        power_play_pct: 22.05,
        penalty_kill_pct: 74.21,
        leading_scorer: "Robert Thomas",
        leading_scorer_avatar:
          "https://low6nhlbracketsprod.blob.core.windows.net/assets/8480023.png",
        leading_scorer_points: "81 Points",
      },
      {
        team_id: 30,
        nickname: "Wild",
        city: "Minnesota",
        display_name: "Minnesota Wild",
        abbreviation: "MIN",
        twitter_handle: "x",
        hex_code: "A6192E",
        display_seed: "WC1",
        team_logo:
          "https://allstarvotefilesde.blob.core.windows.net/nhl-team-logos/30.svg",
        secondary_hex_code: "154734",
        wins: 45,
        points: 97,
        goals_per_game: 2.7439,
        goals_against_per_game: 2.878049,
        power_play_pct: 20.87,
        penalty_kill_pct: 72.41,
        leading_scorer: "Matt Boldy",
        leading_scorer_avatar:
          "https://low6nhlbracketsprod.blob.core.windows.net/assets/8481557.png",
        leading_scorer_points: "73 Points",
      },
      {
        team_id: 10,
        nickname: "Maple Leafs",
        city: "Toronto",
        display_name: "Toronto Maple Leafs",
        abbreviation: "TOR",
        twitter_handle: "x",
        hex_code: "00205B",
        display_seed: "A1",
        team_logo:
          "https://allstarvotefilesde.blob.core.windows.net/nhl-team-logos/10.svg",
        secondary_hex_code: "FFFFFF",
        wins: 52,
        points: 108,
        goals_per_game: 3.2561,
        goals_against_per_game: 2.792683,
        power_play_pct: 24.77,
        penalty_kill_pct: 77.87,
        leading_scorer: "Mitch Marner",
        leading_scorer_avatar:
          "https://low6nhlbracketsprod.blob.core.windows.net/assets/8478483.png",
        leading_scorer_points: "102 Points",
      },
      {
        team_id: 14,
        nickname: "Lightning",
        city: "Tampa Bay",
        display_name: "Tampa Bay Lightning",
        abbreviation: "TBL",
        twitter_handle: "x",
        hex_code: "002868",
        display_seed: "A2",
        team_logo:
          "https://allstarvotefilesde.blob.core.windows.net/nhl-team-logos/14.svg",
        secondary_hex_code: "FFFFFF",
        wins: 47,
        points: 102,
        goals_per_game: 3.561,
        goals_against_per_game: 2.634146,
        power_play_pct: 25.86,
        penalty_kill_pct: 81.55,
        leading_scorer: "Nikita Kucherov",
        leading_scorer_avatar:
          "https://low6nhlbracketsprod.blob.core.windows.net/assets/8476453.png",
        leading_scorer_points: "121 Points",
      },
      {
        team_id: 13,
        nickname: "Panthers",
        city: "Florida",
        display_name: "Florida Panthers",
        abbreviation: "FLA",
        twitter_handle: "x",
        hex_code: "C8102E",
        display_seed: "A3",
        team_logo:
          "https://allstarvotefilesde.blob.core.windows.net/nhl-team-logos/13.svg",
        secondary_hex_code: "041E42",
        wins: 47,
        points: 98,
        goals_per_game: 3,
        goals_against_per_game: 2.719512,
        power_play_pct: 23.53,
        penalty_kill_pct: 80.74,
        leading_scorer: "Sam Reinhart",
        leading_scorer_avatar:
          "https://low6nhlbracketsprod.blob.core.windows.net/assets/8477933.png",
        leading_scorer_points: "81 Points",
      },
      {
        team_id: 15,
        nickname: "Capitals",
        city: "Washington",
        display_name: "Washington Capitals",
        abbreviation: "WSH",
        twitter_handle: "x",
        hex_code: "041E42",
        display_seed: "M1",
        team_logo:
          "https://allstarvotefilesde.blob.core.windows.net/nhl-team-logos/15.svg",
        secondary_hex_code: "C8102E",
        leading_scorer: "Dylan Strome",
        leading_scorer_avatar:
          "https://low6nhlbracketsprod.blob.core.windows.net/assets/D. Strome.png",
        leading_scorer_points: "82 Points",
        wins: 51,
        points: 111,
        goals_per_game: 3.4878,
        goals_against_per_game: 2.792683,
        power_play_pct: 23.53,
        penalty_kill_pct: 82.01,
      },
      {
        team_id: 12,
        nickname: "Hurricanes",
        city: "Carolina",
        display_name: "Carolina Hurricanes",
        abbreviation: "CAR",
        twitter_handle: "x",
        hex_code: "CE1126",
        display_seed: "M2",
        team_logo:
          "https://allstarvotefilesde.blob.core.windows.net/nhl-team-logos/12.svg",
        secondary_hex_code: "FFFFFF",
        season_standings: "",
        wins: 47,
        points: 99,
        goals_per_game: 3.2439,
        goals_against_per_game: 2.804878,
        power_play_pct: 18.7,
        penalty_kill_pct: 83.61,
        leading_scorer: "Sebastian Aho",
        leading_scorer_avatar:
          "https://low6nhlbracketsprod.blob.core.windows.net/assets/8478427.png",
        leading_scorer_points: "74 Points",
      },
      {
        team_id: 1,
        nickname: "Devils",
        city: "New Jersey",
        display_name: "New Jersey Devils",
        abbreviation: "NJD",
        twitter_handle: "x",
        hex_code: "000000",
        display_seed: "M3",
        team_logo:
          "https://allstarvotefilesde.blob.core.windows.net/nhl-team-logos/1.svg",
        secondary_hex_code: "CE1126",
        wins: 42,
        points: 91,
        goals_per_game: 2.9268,
        goals_against_per_game: 2.682927,
        power_play_pct: 28.24,
        penalty_kill_pct: 82.67,
        leading_scorer: "Jesper Bratt",
        leading_scorer_avatar:
          "https://low6nhlbracketsprod.blob.core.windows.net/assets/8479407.png",
        leading_scorer_points: "88 Points",
      },
      {
        team_id: 9,
        nickname: "Senators",
        city: "Ottawa",
        display_name: "Ottawa Senators",
        abbreviation: "OTT",
        twitter_handle: "x",
        hex_code: "B79257",
        display_seed: "WC1",
        team_logo:
          "https://allstarvotefilesde.blob.core.windows.net/nhl-team-logos/9.svg",
        secondary_hex_code: "000000",
        wins: 45,
        points: 97,
        goals_per_game: 2.9512,
        goals_against_per_game: 2.829268,
        power_play_pct: 23.79,
        penalty_kill_pct: 77.73,
        leading_scorer: "Tim Stutzle",
        leading_scorer_avatar:
          "https://low6nhlbracketsprod.blob.core.windows.net/assets/8482116.png",
        leading_scorer_points: "79 Points",
      },
      {
        team_id: 8,
        nickname: "Canadiens",
        city: "Montreal",
        display_name: "Montreal Canadiens",
        abbreviation: "MTL",
        twitter_handle: "x",
        hex_code: "AF1E2D",
        display_seed: "WC2",
        team_logo:
          "https://allstarvotefilesde.blob.core.windows.net/nhl-team-logos/8.svg",
        secondary_hex_code: "192168",
        wins: 40,
        points: 91,
        goals_per_game: 2.9634,
        goals_against_per_game: 3.182927,
        power_play_pct: 20.09,
        penalty_kill_pct: 80.93,
        leading_scorer: "Nick Suzuki",
        leading_scorer_avatar:
          "https://low6nhlbracketsprod.blob.core.windows.net/assets/8480018.png",
        leading_scorer_points: "89 Points",
      },
    ],
    series_results: [
      {
        id: 101,
        round_sequence: 1,
        is_scored: true,
        winner_id: 52,
        team_1_id: 52,
        team_2_id: 19,
        team_1_wins: "4",
        team_2_wins: "3",
      },
      {
        id: 102,
        round_sequence: 1,
        is_scored: true,
        winner_id: 25,
        team_1_id: 25,
        team_2_id: 21,
        team_1_wins: "4",
        team_2_wins: "3",
      },
      {
        id: 103,
        round_sequence: 1,
        is_scored: true,
        winner_id: 54,
        team_1_id: 54,
        team_2_id: 30,
        team_1_wins: "4",
        team_2_wins: "2",
      },
      {
        id: 104,
        round_sequence: 1,
        is_scored: true,
        winner_id: 22,
        team_1_id: 26,
        team_2_id: 22,
        team_1_wins: "2",
        team_2_wins: "4",
      },
      {
        id: 105,
        round_sequence: 1,
        is_scored: true,
        winner_id: 10,
        team_1_id: 10,
        team_2_id: 9,
        team_1_wins: "4",
        team_2_wins: "2",
      },
      {
        id: 106,
        round_sequence: 1,
        is_scored: true,
        winner_id: 13,
        team_1_id: 14,
        team_2_id: 13,
        team_1_wins: "1",
        team_2_wins: "4",
      },
      {
        id: 107,
        round_sequence: 1,
        is_scored: true,
        winner_id: 15,
        team_1_id: 15,
        team_2_id: 8,
        team_1_wins: "4",
        team_2_wins: "1",
      },
      {
        id: 108,
        round_sequence: 1,
        is_scored: true,
        winner_id: 12,
        team_1_id: 12,
        team_2_id: 1,
        team_1_wins: "4",
        team_2_wins: "1",
      },
      {
        id: 201,
        round_sequence: 2,
        is_scored: true,
        winner_id: 25,
        team_1_id: 52,
        team_2_id: 25,
        team_1_wins: "2",
        team_2_wins: "4",
      },
      {
        id: 202,
        round_sequence: 2,
        is_scored: true,
        winner_id: 22,
        team_1_id: 54,
        team_2_id: 22,
        team_1_wins: "1",
        team_2_wins: "4",
      },
      {
        id: 203,
        round_sequence: 2,
        is_scored: true,
        winner_id: 13,
        team_1_id: 10,
        team_2_id: 13,
        team_1_wins: "3",
        team_2_wins: "4",
      },
      {
        id: 204,
        round_sequence: 2,
        is_scored: true,
        winner_id: 12,
        team_1_id: 15,
        team_2_id: 12,
        team_1_wins: "1",
        team_2_wins: "4",
      },
      {
        id: 301,
        round_sequence: 3,
        is_scored: true,
        winner_id: 22,
        team_1_id: 25,
        team_2_id: 22,
        team_1_wins: "1",
        team_2_wins: "4",
      },
      {
        id: 302,
        round_sequence: 3,
        is_scored: true,
        winner_id: 13,
        team_1_id: 13,
        team_2_id: 12,
        team_1_wins: "4",
        team_2_wins: "1",
      },
      {
        id: 401,
        round_sequence: 4,
        is_scored: true,
        winner_id: 13,
        team_1_id: 22,
        team_2_id: 13,
        team_1_wins: "2",
        team_2_wins: "4",
      },
    ],
    tiebreaker: 45,
    allow_picks_from: "2025-04-15T22:05:00.000Z",
    allow_picks_until: "2025-04-22T22:00:00.000Z",
    allow_second_chance_picks_from: "2025-05-05T03:10:00.000Z",
    allow_second_chance_picks_until: "2025-05-07T22:59:00.000Z",
    user: null,
  },
};
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
    (team) => team.team_id === Number.parseInt(champion_id)
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
    if (userPick != game.team_1_id && userPick != game.team_2_id) {
      selectedPick.src = "dash.svg";
      selectedPick.alt = "Pick no longer in play";
      selectedPick.classList.add("dash-icon");
    } else {
      const pickedTeam = teams.find(
        (team) => team.team_id === Number.parseInt(userPick)
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
    if (LEADER_DATA === null && ENTRIES_DATA) {
      LEADER_DATA = ENTRIES_DATA.reduce(
        (prev, curr) =>
          Number.parseInt(prev.points) < Number.parseInt(curr.points)
            ? curr
            : prev,
        ENTRIES_DATA[0]
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
