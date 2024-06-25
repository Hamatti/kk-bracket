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

const ENTRIES = {
  entries: [
    {
      entry_id: "182827",
      user_id: "76326",
      points: "109",
      possible_points: "109",
      entry_name: "KIPPOKAPPO",
      champion_id: "3",
      tiebreaker: "35",
      match_101_pick: "21",
      match_102_pick: "25",
      match_103_pick: "54",
      match_104_pick: "22",
      match_105_pick: "6",
      match_106_pick: "10",
      match_107_pick: "12",
      match_108_pick: "3",
      match_201_pick: "25",
      match_202_pick: "54",
      match_203_pick: "6",
      match_204_pick: "3",
      match_301_pick: "25",
      match_302_pick: "3",
      match_401_pick: "3",
      match_101_match_played: "5",
      match_102_match_played: "6",
      match_103_match_played: "5",
      match_104_match_played: "5",
      match_105_match_played: "6",
      match_106_match_played: "5",
      match_107_match_played: "5",
      match_108_match_played: "7",
      updated_at: "2023-04-16T00:45:00.000Z",
      rank: 1,
    },
    {
      entry_id: "359540",
      user_id: "75318",
      points: "94",
      possible_points: "94",
      entry_name: "mkainula",
      champion_id: "6",
      tiebreaker: "24",
      match_101_pick: "21",
      match_102_pick: "25",
      match_103_pick: "54",
      match_104_pick: "22",
      match_105_pick: "6",
      match_106_pick: "10",
      match_107_pick: "12",
      match_108_pick: "1",
      match_201_pick: "21",
      match_202_pick: "22",
      match_203_pick: "6",
      match_204_pick: "12",
      match_301_pick: "22",
      match_302_pick: "6",
      match_401_pick: "6",
      match_101_match_played: "5",
      match_102_match_played: "6",
      match_103_match_played: "6",
      match_104_match_played: "6",
      match_105_match_played: "4",
      match_106_match_played: "7",
      match_107_match_played: "6",
      match_108_match_played: "6",
      updated_at: "2023-04-17T06:12:00.000Z",
      rank: 2,
    },
    {
      entry_id: "26907",
      user_id: "75296",
      points: "91",
      possible_points: "91",
      entry_name: "Juhis",
      champion_id: "21",
      tiebreaker: "32",
      match_101_pick: "21",
      match_102_pick: "25",
      match_103_pick: "54",
      match_104_pick: "22",
      match_105_pick: "13",
      match_106_pick: "10",
      match_107_pick: "12",
      match_108_pick: "21",
      match_201_pick: "21",
      match_202_pick: "22",
      match_203_pick: "10",
      match_204_pick: "12",
      match_301_pick: "21",
      match_302_pick: "12",
      match_401_pick: "21",
      match_101_match_played: "6",
      match_102_match_played: "5",
      match_103_match_played: "7",
      match_104_match_played: "6",
      match_105_match_played: "6",
      match_106_match_played: "6",
      match_107_match_played: "5",
      match_108_match_played: "6",
      updated_at: "2023-04-19T13:31:00.000Z",
      rank: 3,
    },
    {
      entry_id: "365520",
      user_id: "75381",
      points: "91",
      possible_points: "91",
      entry_name: "einomies",
      champion_id: "21",
      tiebreaker: "245",
      match_101_pick: "21",
      match_102_pick: "25",
      match_103_pick: "54",
      match_104_pick: "26",
      match_105_pick: "13",
      match_106_pick: "10",
      match_107_pick: "12",
      match_108_pick: "1",
      match_201_pick: "21",
      match_202_pick: "26",
      match_203_pick: "10",
      match_204_pick: "12",
      match_301_pick: "21",
      match_302_pick: "12",
      match_401_pick: "21",
      match_101_match_played: "5",
      match_102_match_played: "6",
      match_103_match_played: "7",
      match_104_match_played: "4",
      match_105_match_played: "7",
      match_106_match_played: "7",
      match_107_match_played: "5",
      match_108_match_played: "6",
      updated_at: "2023-04-17T11:06:00.000Z",
      rank: 3,
    },
    {
      entry_id: "477098",
      user_id: "518407",
      points: "87",
      possible_points: "87",
      entry_name: "MAMBA'S Bracket",
      champion_id: "6",
      tiebreaker: "35",
      match_101_pick: "21",
      match_102_pick: "25",
      match_103_pick: "54",
      match_104_pick: "22",
      match_105_pick: "6",
      match_106_pick: "10",
      match_107_pick: "12",
      match_108_pick: "3",
      match_201_pick: "21",
      match_202_pick: "22",
      match_203_pick: "6",
      match_204_pick: "12",
      match_301_pick: "21",
      match_302_pick: "6",
      match_401_pick: "6",
      match_101_match_played: "6",
      match_102_match_played: "7",
      match_103_match_played: "6",
      match_104_match_played: "6",
      match_105_match_played: "4",
      match_106_match_played: "6",
      match_107_match_played: "6",
      match_108_match_played: "7",
      updated_at: "2023-04-17T20:06:00.000Z",
      rank: 5,
    },
    {
      entry_id: "50005",
      user_id: "75581",
      points: "77",
      possible_points: "77",
      entry_name: "Lervas",
      champion_id: "22",
      tiebreaker: "15",
      match_101_pick: "21",
      match_102_pick: "25",
      match_103_pick: "54",
      match_104_pick: "22",
      match_105_pick: "6",
      match_106_pick: "10",
      match_107_pick: "2",
      match_108_pick: "3",
      match_201_pick: "25",
      match_202_pick: "22",
      match_203_pick: "6",
      match_204_pick: "3",
      match_301_pick: "22",
      match_302_pick: "6",
      match_401_pick: "22",
      match_101_match_played: "5",
      match_102_match_played: "7",
      match_103_match_played: "5",
      match_104_match_played: "6",
      match_105_match_played: "5",
      match_106_match_played: "5",
      match_107_match_played: "6",
      match_108_match_played: "7",
      updated_at: "2023-04-17T17:21:00.000Z",
      rank: 6,
    },
    {
      entry_id: "368958",
      user_id: "75329",
      points: "74",
      possible_points: "74",
      entry_name: "alex-666",
      champion_id: "6",
      tiebreaker: "37",
      match_101_pick: "21",
      match_102_pick: "25",
      match_103_pick: "54",
      match_104_pick: "22",
      match_105_pick: "6",
      match_106_pick: "14",
      match_107_pick: "12",
      match_108_pick: "3",
      match_201_pick: "21",
      match_202_pick: "54",
      match_203_pick: "6",
      match_204_pick: "3",
      match_301_pick: "21",
      match_302_pick: "6",
      match_401_pick: "6",
      match_101_match_played: "5",
      match_102_match_played: "6",
      match_103_match_played: "6",
      match_104_match_played: "6",
      match_105_match_played: "6",
      match_106_match_played: "6",
      match_107_match_played: "5",
      match_108_match_played: "5",
      updated_at: "2023-04-19T06:28:00.000Z",
      rank: 7,
    },
    {
      entry_id: "641463",
      user_id: "648559",
      points: "71",
      possible_points: "71",
      entry_name: "Daamn",
      champion_id: "12",
      tiebreaker: "35",
      match_101_pick: "21",
      match_102_pick: "25",
      match_103_pick: "54",
      match_104_pick: "26",
      match_105_pick: "6",
      match_106_pick: "10",
      match_107_pick: "12",
      match_108_pick: "3",
      match_201_pick: "21",
      match_202_pick: "26",
      match_203_pick: "6",
      match_204_pick: "12",
      match_301_pick: "21",
      match_302_pick: "12",
      match_401_pick: "12",
      match_101_match_played: "7",
      match_102_match_played: "7",
      match_103_match_played: "6",
      match_104_match_played: "6",
      match_105_match_played: "6",
      match_106_match_played: "7",
      match_107_match_played: "5",
      match_108_match_played: "6",
      updated_at: "2023-04-19T08:33:00.000Z",
      rank: 8,
    },
    {
      entry_id: "24055",
      user_id: "75479",
      points: "68",
      possible_points: "68",
      entry_name: "lehtu",
      champion_id: "12",
      tiebreaker: "29",
      match_101_pick: "21",
      match_102_pick: "30",
      match_103_pick: "54",
      match_104_pick: "22",
      match_105_pick: "6",
      match_106_pick: "10",
      match_107_pick: "12",
      match_108_pick: "3",
      match_201_pick: "30",
      match_202_pick: "22",
      match_203_pick: "6",
      match_204_pick: "12",
      match_301_pick: "22",
      match_302_pick: "12",
      match_401_pick: "12",
      match_101_match_played: "7",
      match_102_match_played: "7",
      match_103_match_played: "4",
      match_104_match_played: "5",
      match_105_match_played: "5",
      match_106_match_played: "7",
      match_107_match_played: "7",
      match_108_match_played: "6",
      updated_at: "2023-04-15T06:49:00.000Z",
      rank: 9,
    },
    {
      entry_id: "360843",
      user_id: "75399",
      points: "68",
      possible_points: "68",
      entry_name: "Bruins jyrää",
      champion_id: "6",
      tiebreaker: "32",
      match_101_pick: "21",
      match_102_pick: "25",
      match_103_pick: "54",
      match_104_pick: "26",
      match_105_pick: "6",
      match_106_pick: "14",
      match_107_pick: "12",
      match_108_pick: "1",
      match_201_pick: "21",
      match_202_pick: "54",
      match_203_pick: "6",
      match_204_pick: "1",
      match_301_pick: "21",
      match_302_pick: "6",
      match_401_pick: "6",
      match_101_match_played: "5",
      match_102_match_played: "5",
      match_103_match_played: "4",
      match_104_match_played: "7",
      match_105_match_played: "6",
      match_106_match_played: "7",
      match_107_match_played: "6",
      match_108_match_played: "5",
      updated_at: "2023-04-17T06:51:00.000Z",
      rank: 9,
    },
    {
      entry_id: "24523",
      user_id: "153511",
      points: "62",
      possible_points: "62",
      entry_name: "eski",
      champion_id: "6",
      tiebreaker: "32",
      match_101_pick: "21",
      match_102_pick: "25",
      match_103_pick: "54",
      match_104_pick: "22",
      match_105_pick: "6",
      match_106_pick: "10",
      match_107_pick: "12",
      match_108_pick: "3",
      match_201_pick: "21",
      match_202_pick: "22",
      match_203_pick: "6",
      match_204_pick: "3",
      match_301_pick: "22",
      match_302_pick: "6",
      match_401_pick: "6",
      match_101_match_played: "6",
      match_102_match_played: "6",
      match_103_match_played: "5",
      match_104_match_played: "5",
      match_105_match_played: "4",
      match_106_match_played: "6",
      match_107_match_played: "6",
      match_108_match_played: "5",
      updated_at: "2023-04-15T07:36:00.000Z",
      rank: 11,
    },
    {
      entry_id: "483031",
      user_id: "529159",
      points: "59",
      possible_points: "59",
      entry_name: "Subban-On-Marchand",
      champion_id: "6",
      tiebreaker: "31",
      match_101_pick: "55",
      match_102_pick: "30",
      match_103_pick: "54",
      match_104_pick: "22",
      match_105_pick: "6",
      match_106_pick: "14",
      match_107_pick: "12",
      match_108_pick: "1",
      match_201_pick: "30",
      match_202_pick: "22",
      match_203_pick: "6",
      match_204_pick: "1",
      match_301_pick: "22",
      match_302_pick: "6",
      match_401_pick: "6",
      match_101_match_played: "7",
      match_102_match_played: "7",
      match_103_match_played: "6",
      match_104_match_played: "5",
      match_105_match_played: "6",
      match_106_match_played: "6",
      match_107_match_played: "7",
      match_108_match_played: "7",
      updated_at: "2023-04-17T20:28:00.000Z",
      rank: 12,
    },
    {
      entry_id: "640916",
      user_id: "430187",
      points: "51",
      possible_points: "51",
      entry_name: "hetenho",
      champion_id: "6",
      tiebreaker: "27",
      match_101_pick: "21",
      match_102_pick: "25",
      match_103_pick: "52",
      match_104_pick: "26",
      match_105_pick: "6",
      match_106_pick: "14",
      match_107_pick: "12",
      match_108_pick: "3",
      match_201_pick: "21",
      match_202_pick: "26",
      match_203_pick: "6",
      match_204_pick: "12",
      match_301_pick: "21",
      match_302_pick: "6",
      match_401_pick: "6",
      match_101_match_played: "7",
      match_102_match_played: "7",
      match_103_match_played: "6",
      match_104_match_played: "7",
      match_105_match_played: "5",
      match_106_match_played: "5",
      match_107_match_played: "6",
      match_108_match_played: "6",
      updated_at: "2023-04-19T06:49:00.000Z",
      rank: 13,
    },
    {
      entry_id: "132109",
      user_id: "75490",
      points: "49",
      possible_points: "49",
      entry_name: "valimaggi",
      champion_id: "22",
      tiebreaker: "24",
      match_101_pick: "21",
      match_102_pick: "25",
      match_103_pick: "54",
      match_104_pick: "22",
      match_105_pick: "6",
      match_106_pick: "10",
      match_107_pick: "2",
      match_108_pick: "3",
      match_201_pick: "21",
      match_202_pick: "22",
      match_203_pick: "6",
      match_204_pick: "3",
      match_301_pick: "22",
      match_302_pick: "6",
      match_401_pick: "22",
      match_101_match_played: "5",
      match_102_match_played: "7",
      match_103_match_played: "6",
      match_104_match_played: "6",
      match_105_match_played: "6",
      match_106_match_played: "6",
      match_107_match_played: "7",
      match_108_match_played: "7",
      updated_at: "2023-04-17T21:10:00.000Z",
      rank: 14,
    },
    {
      entry_id: "640842",
      user_id: "75523",
      points: "33",
      possible_points: "33",
      entry_name: "Juho's bracket",
      champion_id: "6",
      tiebreaker: "21",
      match_101_pick: "21",
      match_102_pick: "25",
      match_103_pick: "54",
      match_104_pick: "26",
      match_105_pick: "6",
      match_106_pick: "14",
      match_107_pick: "12",
      match_108_pick: "3",
      match_201_pick: "21",
      match_202_pick: "26",
      match_203_pick: "6",
      match_204_pick: "3",
      match_301_pick: "26",
      match_302_pick: "6",
      match_401_pick: "6",
      match_101_match_played: "5",
      match_102_match_played: "5",
      match_103_match_played: "6",
      match_104_match_played: "5",
      match_105_match_played: "5",
      match_106_match_played: "5",
      match_107_match_played: "6",
      match_108_match_played: "6",
      updated_at: "2023-04-19T06:38:00.000Z",
      rank: 15,
    },
    {
      entry_id: "16779",
      user_id: "102146",
      points: "23",
      possible_points: "23",
      entry_name: "Saapunki",
      champion_id: "3",
      tiebreaker: "31",
      match_101_pick: "21",
      match_102_pick: "25",
      match_103_pick: "52",
      match_104_pick: "26",
      match_105_pick: "6",
      match_106_pick: "14",
      match_107_pick: "12",
      match_108_pick: "3",
      match_201_pick: "21",
      match_202_pick: "26",
      match_203_pick: "6",
      match_204_pick: "3",
      match_301_pick: "21",
      match_302_pick: "3",
      match_401_pick: "3",
      match_101_match_played: "5",
      match_102_match_played: "6",
      match_103_match_played: "7",
      match_104_match_played: "5",
      match_105_match_played: "6",
      match_106_match_played: "5",
      match_107_match_played: "7",
      match_108_match_played: "5",
      updated_at: "2023-04-19T04:34:00.000Z",
      rank: 16,
    },
  ],
};

const SERIES = {
  game: {
    teams: [
      {
        team_id: 25,
        nickname: "Stars",
        city: "Dallas",
        display_name: "Dallas Stars",
        abbreviation: "DAL",
        twitter_handle: "DallasStars",
        hex_code: "009346",
        display_seed: "C2",
        team_logo:
          "https://www-league.nhlstatic.com/images/logos/teams-current-primary-dark/25.svg",
        wins: 40,
        points: 94,
        goals_per_game: 3.405,
        goals_against_per_game: 2.73,
        power_play_pct: 23.25,
        penalty_kill_pct: 83.56,
        secondary_hex_code: "231F20",
        leading_scorer: "Jason Robertson",
      },
      {
        team_id: 21,
        nickname: "Avalanche",
        city: "Colorado",
        display_name: "Colorado Avalanche",
        abbreviation: "COL",
        twitter_handle: "Avalanche",
        hex_code: "860038",
        display_seed: "C1",
        team_logo:
          "https://www-league.nhlstatic.com/images/logos/teams-current-primary-dark/21.svg",
        wins: 44,
        points: 94,
        goals_per_game: 3.257,
        goals_against_per_game: 2.73,
        power_play_pct: 25.21,
        penalty_kill_pct: 79.74,
        secondary_hex_code: "005695",
        leading_scorer: "Mikko Rantanen",
      },
      {
        team_id: 30,
        nickname: "Wild",
        city: "Minnesota",
        display_name: "Minnesota Wild",
        abbreviation: "MIN",
        twitter_handle: "mnwild",
        hex_code: "AE132A",
        display_seed: "C3",
        team_logo:
          "https://www-league.nhlstatic.com/images/logos/teams-current-primary-dark/30.svg",
        wins: 44,
        points: 97,
        goals_per_game: 2.947,
        goals_against_per_game: 2.613,
        power_play_pct: 21.65,
        penalty_kill_pct: 80.93,
        secondary_hex_code: "004023",
        leading_scorer: "Kirill Kaprizov",
      },
      {
        team_id: 26,
        nickname: "Kings",
        city: "Los Angeles",
        display_name: "Los Angeles Kings",
        abbreviation: "LAK",
        twitter_handle: "LAKings",
        hex_code: "B0B7BC",
        display_seed: "P3",
        team_logo:
          "https://www-league.nhlstatic.com/images/logos/teams-current-primary-dark/26.svg",
        wins: 43,
        points: 96,
        goals_per_game: 3.373,
        goals_against_per_game: 3.16,
        power_play_pct: 25.2,
        penalty_kill_pct: 75.5,
        secondary_hex_code: "231F20",
        leading_scorer: "Adrian Kempe",
      },
      {
        team_id: 22,
        nickname: "Oilers",
        city: "Edmonton",
        display_name: "Edmonton Oilers",
        abbreviation: "EDM",
        twitter_handle: "EdmontonOilers",
        hex_code: "091F40",
        display_seed: "P2",
        team_logo:
          "https://www-league.nhlstatic.com/images/logos/teams-current-primary-dark/22.svg",
        wins: 44,
        points: 97,
        goals_per_game: 3.947,
        goals_against_per_game: 3.289,
        power_play_pct: 32.43,
        penalty_kill_pct: 75.86,
        secondary_hex_code: "F05123",
        leading_scorer: "Connor McDavid",
      },
      {
        team_id: 6,
        nickname: "Bruins",
        city: "Boston",
        display_name: "Boston Bruins",
        abbreviation: "BOS",
        twitter_handle: "NHLBruins",
        hex_code: "FFB81C",
        display_seed: "A1",
        team_logo:
          "https://www-league.nhlstatic.com/images/logos/teams-current-primary-dark/6.svg",
        wins: 58,
        points: 121,
        goals_per_game: 3.667,
        goals_against_per_game: 2.093,
        power_play_pct: 21.54,
        penalty_kill_pct: 86.43,
        secondary_hex_code: "1D1D1B",
        leading_scorer: "David Pastrnak",
      },
      {
        team_id: 13,
        nickname: "Panthers",
        city: "Florida",
        display_name: "Florida Panthers",
        abbreviation: "FLA",
        twitter_handle: "FlaPanthers",
        hex_code: "E31937",
        display_seed: "WC2",
        team_logo:
          "https://www-league.nhlstatic.com/images/logos/teams-current-primary-dark/13.svg",
        wins: 38,
        points: 83,
        goals_per_game: 3.461,
        goals_against_per_game: 3.408,
        power_play_pct: 22.35,
        penalty_kill_pct: 74.25,
        secondary_hex_code: "002D62",
        leading_scorer: "Carter Verhaeghe",
      },
      {
        team_id: 12,
        nickname: "Hurricanes",
        city: "Carolina",
        display_name: "Carolina Hurricanes",
        abbreviation: "CAR",
        twitter_handle: "Canes",
        hex_code: "231F20",
        display_seed: "M1",
        team_logo:
          "https://www-league.nhlstatic.com/images/logos/teams-current-primary-dark/12.svg",
        wins: 47,
        points: 103,
        goals_per_game: 3.23,
        goals_against_per_game: 2.595,
        power_play_pct: 20.43,
        penalty_kill_pct: 83.62,
        secondary_hex_code: "E31937",
        leading_scorer: "Sebastian Aho",
      },
      {
        team_id: 3,
        nickname: "Rangers",
        city: "New York",
        display_name: "New York Rangers",
        abbreviation: "NYR",
        twitter_handle: "NYRangers",
        hex_code: "005DAA",
        display_seed: "M3",
        team_logo:
          "https://www-league.nhlstatic.com/images/logos/teams-current-primary-dark/3.svg",
        wins: 44,
        points: 98,
        goals_per_game: 3.333,
        goals_against_per_game: 2.667,
        power_play_pct: 22.91,
        penalty_kill_pct: 80.48,
        secondary_hex_code: "E31937",
        leading_scorer: "Mika Zibanejad",
      },
      {
        team_id: 55,
        nickname: "Kraken",
        city: "Seattle",
        display_name: "Seattle Kraken",
        abbreviation: "SEA",
        twitter_handle: "SeattleKraken",
        hex_code: "000D33",
        display_seed: "WC1",
        team_logo:
          "https://www-league.nhlstatic.com/images/logos/teams-current-primary-dark/55.svg",
        wins: 41,
        points: 90,
        goals_per_game: 3.486,
        goals_against_per_game: 3.149,
        power_play_pct: 19.25,
        penalty_kill_pct: 75.12,
        secondary_hex_code: "67ACCB",
        leading_scorer: "Jared McCann",
      },
      {
        team_id: 54,
        nickname: "Golden Knights",
        city: "Las Vegas",
        display_name: "Vegas Golden Knights",
        abbreviation: "VGK",
        twitter_handle: "GoldenKnights",
        hex_code: "B4975A",
        display_seed: "P1",
        team_logo:
          "https://www-league.nhlstatic.com/images/logos/teams-current-primary-dark/54.svg",
        wins: 46,
        points: 99,
        goals_per_game: 3.267,
        goals_against_per_game: 2.84,
        power_play_pct: 21.28,
        penalty_kill_pct: 77.53,
        secondary_hex_code: "344043",
        leading_scorer: "Jack Eichel",
      },
      {
        team_id: 52,
        nickname: "Jets",
        city: "Winnipeg",
        display_name: "Winnipeg Jets",
        abbreviation: "WPG",
        twitter_handle: "NHLJets",
        hex_code: "B3B5B7",
        display_seed: "WC2",
        team_logo:
          "https://www-league.nhlstatic.com/images/logos/teams-current-primary-dark/52.svg",
        wins: 41,
        points: 85,
        goals_per_game: 2.933,
        goals_against_per_game: 2.813,
        power_play_pct: 19.35,
        penalty_kill_pct: 82.87,
        secondary_hex_code: "002D62",
        leading_scorer: "Mark Scheifele",
      },
      {
        team_id: 10,
        nickname: "Maple Leafs",
        city: "Toronto",
        display_name: "Toronto Maple Leafs",
        abbreviation: "TOR",
        twitter_handle: "MapleLeafs",
        hex_code: "003A78",
        display_seed: "A2",
        team_logo:
          "https://www-league.nhlstatic.com/images/logos/teams-current-primary-dark/10.svg",
        wins: 44,
        points: 98,
        goals_per_game: 3.405,
        goals_against_per_game: 2.757,
        power_play_pct: 25.23,
        penalty_kill_pct: 80.27,
        secondary_hex_code: "FFFFFF",
        leading_scorer: "William Nylander",
      },
      {
        team_id: 14,
        nickname: "Lightning",
        city: "Tampa Bay",
        display_name: "Tampa Bay Lightning",
        abbreviation: "TBL",
        twitter_handle: "TBLightning",
        hex_code: "003E7E",
        display_seed: "A3",
        team_logo:
          "https://www-league.nhlstatic.com/images/logos/teams-current-primary-dark/14.svg",
        wins: 44,
        points: 94,
        goals_per_game: 3.408,
        goals_against_per_game: 3.013,
        power_play_pct: 25.1,
        penalty_kill_pct: 79.92,
        secondary_hex_code: "FFFFFF",
        leading_scorer: "Brayden Point",
      },
      {
        team_id: 2,
        nickname: "Islanders",
        city: "New York",
        display_name: "New York Islanders",
        abbreviation: "NYI",
        twitter_handle: "NYIslanders",
        hex_code: "00468B",
        display_seed: "WC1",
        team_logo:
          "https://www-league.nhlstatic.com/images/logos/teams-current-primary-dark/2.svg",
        wins: 39,
        points: 87,
        goals_per_game: 2.961,
        goals_against_per_game: 2.658,
        power_play_pct: 16.43,
        penalty_kill_pct: 81.99,
        secondary_hex_code: "F26924",
        leading_scorer: "Brock Nelson",
      },
      {
        team_id: 1,
        nickname: "Devils",
        city: "New Jersey",
        display_name: "New Jersey Devils",
        abbreviation: "NJD",
        twitter_handle: "NJDevils",
        hex_code: "E31937",
        display_seed: "M2",
        team_logo:
          "https://www-league.nhlstatic.com/images/logos/teams-current-primary-dark/1.svg",
        wins: 47,
        points: 102,
        goals_per_game: 3.427,
        goals_against_per_game: 2.707,
        power_play_pct: 21.36,
        penalty_kill_pct: 82.16,
        secondary_hex_code: "231F20",
        leading_scorer: "Jack Hughes",
      },
    ],
    series_results: [
      {
        id: 101,
        round_sequence: 1,
        is_scored: true,
        winner_id: 55,
        team_1_id: 21,
        team_2_id: 55,
        team_1_wins: "3",
        team_2_wins: "4",
      },
      {
        id: 102,
        round_sequence: 1,
        is_scored: true,
        winner_id: 25,
        team_1_id: 25,
        team_2_id: 30,
        team_1_wins: "4",
        team_2_wins: "2",
      },
      {
        id: 103,
        round_sequence: 1,
        is_scored: true,
        winner_id: 54,
        team_1_id: 54,
        team_2_id: 52,
        team_1_wins: "4",
        team_2_wins: "1",
      },
      {
        id: 104,
        round_sequence: 1,
        is_scored: true,
        winner_id: 22,
        team_1_id: 22,
        team_2_id: 26,
        team_1_wins: "4",
        team_2_wins: "2",
      },
      {
        id: 105,
        round_sequence: 1,
        is_scored: true,
        winner_id: 13,
        team_1_id: 6,
        team_2_id: 13,
        team_1_wins: "4",
        team_2_wins: "3",
      },
      {
        id: 106,
        round_sequence: 1,
        is_scored: true,
        winner_id: 10,
        team_1_id: 10,
        team_2_id: 14,
        team_1_wins: "4",
        team_2_wins: "2",
      },
      {
        id: 107,
        round_sequence: 1,
        is_scored: true,
        winner_id: 12,
        team_1_id: 12,
        team_2_id: 2,
        team_1_wins: "4",
        team_2_wins: "2",
      },
      {
        id: 108,
        round_sequence: 1,
        is_scored: true,
        winner_id: 1,
        team_1_id: 1,
        team_2_id: 3,
        team_1_wins: "4",
        team_2_wins: "3",
      },
      {
        id: 201,
        round_sequence: 2,
        is_scored: true,
        winner_id: 25,
        team_1_id: 55,
        team_2_id: 25,
        team_1_wins: "3",
        team_2_wins: "4",
      },
      {
        id: 202,
        round_sequence: 2,
        is_scored: true,
        winner_id: 54,
        team_1_id: 54,
        team_2_id: 22,
        team_1_wins: "4",
        team_2_wins: "2",
      },
      {
        id: 203,
        round_sequence: 2,
        is_scored: true,
        winner_id: 13,
        team_1_id: 13,
        team_2_id: 10,
        team_1_wins: "4",
        team_2_wins: "1",
      },
      {
        id: 204,
        round_sequence: 2,
        is_scored: true,
        winner_id: 12,
        team_1_id: 12,
        team_2_id: 1,
        team_1_wins: "4",
        team_2_wins: "1",
      },
      {
        id: 301,
        round_sequence: 3,
        is_scored: true,
        winner_id: 54,
        team_1_id: 54,
        team_2_id: 25,
        team_1_wins: "2",
        team_2_wins: "4",
      },
      {
        id: 302,
        round_sequence: 3,
        is_scored: true,
        winner_id: 13,
        team_1_id: 12,
        team_2_id: 13,
        team_1_wins: "0",
        team_2_wins: "4",
      },
      {
        id: 401,
        round_sequence: 4,
        is_scored: true,
        winner_id: 54,
        team_1_id: 54,
        team_2_id: 13,
        team_1_wins: "4",
        team_2_wins: "1",
      },
    ],
    tiebreaker: 41,
    allow_picks_from: "2024-04-19T05:00:00.000Z",
    allow_picks_until: "2024-04-22T23:00:00.000Z",
    allow_second_chance_picks_from: "2024-05-06T02:10:00.000Z",
    allow_second_chance_picks_until: "2024-05-08T22:59:00.000Z",
    user: null,
  },
};

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
  const entryNameCleaned = entry_name.replace(/'s bracket \d+/, "");
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
    ENTRIES_DATA = ENTRIES.entries;
  }

  if (SERIES_DATA === null) {
    SERIES_DATA = SERIES;
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
    if (uniques.find((ex) => ex[key] == obj[key]) == undefined) {
      uniques.push(obj);
    }
  }
  return uniques;
}
