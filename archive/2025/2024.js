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
      entry_id: "18320",
      user_id: "78599",
      points: "336",
      possible_points: "336",
      entry_name: "Juhis",
      champion_id: "13",
      tiebreaker: "34",
      match_101_pick: "25",
      match_102_pick: "21",
      match_103_pick: "23",
      match_104_pick: "22",
      match_105_pick: "13",
      match_106_pick: "6",
      match_107_pick: "3",
      match_108_pick: "12",
      match_201_pick: "25",
      match_202_pick: "22",
      match_203_pick: "13",
      match_204_pick: "3",
      match_301_pick: "25",
      match_302_pick: "13",
      match_401_pick: "13",
      match_101_match_played: "6",
      match_102_match_played: "7",
      match_103_match_played: "5",
      match_104_match_played: "5",
      match_105_match_played: "6",
      match_106_match_played: "6",
      match_107_match_played: "7",
      match_108_match_played: "5",
      match_201_match_played: "0",
      match_202_match_played: "0",
      match_203_match_played: "0",
      match_204_match_played: "0",
      is_second_chance: "false",
      updated_at: "2024-04-19T07:18:00.000Z",
      rank: 1,
    },
    {
      entry_id: "20039",
      user_id: "193155",
      points: "317",
      possible_points: "317",
      entry_name: "mkainula's bracket 1",
      champion_id: "13",
      tiebreaker: "21",
      match_101_pick: "25",
      match_102_pick: "21",
      match_103_pick: "23",
      match_104_pick: "22",
      match_105_pick: "13",
      match_106_pick: "6",
      match_107_pick: "3",
      match_108_pick: "12",
      match_201_pick: "25",
      match_202_pick: "22",
      match_203_pick: "13",
      match_204_pick: "12",
      match_301_pick: "25",
      match_302_pick: "13",
      match_401_pick: "13",
      match_101_match_played: "7",
      match_102_match_played: "6",
      match_103_match_played: "5",
      match_104_match_played: "5",
      match_105_match_played: "5",
      match_106_match_played: "6",
      match_107_match_played: "5",
      match_108_match_played: "5",
      match_201_match_played: "0",
      match_202_match_played: "0",
      match_203_match_played: "0",
      match_204_match_played: "0",
      is_second_chance: "false",
      updated_at: "2024-04-19T07:44:00.000Z",
      rank: 2,
    },
    {
      entry_id: "11250",
      user_id: "128394",
      points: "310",
      possible_points: "310",
      entry_name: "eski's bracket 1",
      champion_id: "13",
      tiebreaker: "22",
      match_101_pick: "25",
      match_102_pick: "52",
      match_103_pick: "18",
      match_104_pick: "22",
      match_105_pick: "13",
      match_106_pick: "6",
      match_107_pick: "3",
      match_108_pick: "12",
      match_201_pick: "25",
      match_202_pick: "22",
      match_203_pick: "13",
      match_204_pick: "3",
      match_301_pick: "25",
      match_302_pick: "13",
      match_401_pick: "13",
      match_101_match_played: "5",
      match_102_match_played: "5",
      match_103_match_played: "6",
      match_104_match_played: "7",
      match_105_match_played: "7",
      match_106_match_played: "6",
      match_107_match_played: "5",
      match_108_match_played: "4",
      match_201_match_played: "0",
      match_202_match_played: "0",
      match_203_match_played: "0",
      match_204_match_played: "0",
      is_second_chance: "false",
      updated_at: "2024-04-22T10:11:00.000Z",
      rank: 3,
    },
    {
      entry_id: "226986",
      user_id: "380922",
      points: "307",
      possible_points: "307",
      entry_name: "valimaggi's bracket 1",
      champion_id: "13",
      tiebreaker: "31",
      match_101_pick: "25",
      match_102_pick: "21",
      match_103_pick: "18",
      match_104_pick: "22",
      match_105_pick: "13",
      match_106_pick: "6",
      match_107_pick: "3",
      match_108_pick: "12",
      match_201_pick: "25",
      match_202_pick: "22",
      match_203_pick: "13",
      match_204_pick: "12",
      match_301_pick: "25",
      match_302_pick: "13",
      match_401_pick: "13",
      match_101_match_played: "7",
      match_102_match_played: "6",
      match_103_match_played: "7",
      match_104_match_played: "6",
      match_105_match_played: "5",
      match_106_match_played: "6",
      match_107_match_played: "4",
      match_108_match_played: "5",
      match_201_match_played: "0",
      match_202_match_played: "0",
      match_203_match_played: "0",
      match_204_match_played: "0",
      is_second_chance: "false",
      updated_at: "2024-04-19T19:41:00.000Z",
      rank: 4,
    },
    {
      entry_id: "703818",
      user_id: "934082",
      points: "304",
      possible_points: "304",
      entry_name: "-Mamba-'s bracket",
      champion_id: "13",
      tiebreaker: "37",
      match_101_pick: "25",
      match_102_pick: "52",
      match_103_pick: "23",
      match_104_pick: "22",
      match_105_pick: "13",
      match_106_pick: "6",
      match_107_pick: "3",
      match_108_pick: "12",
      match_201_pick: "25",
      match_202_pick: "22",
      match_203_pick: "13",
      match_204_pick: "12",
      match_301_pick: "25",
      match_302_pick: "13",
      match_401_pick: "13",
      match_101_match_played: "7",
      match_102_match_played: "5",
      match_103_match_played: "6",
      match_104_match_played: "6",
      match_105_match_played: "5",
      match_106_match_played: "4",
      match_107_match_played: "6",
      match_108_match_played: "6",
      match_201_match_played: "0",
      match_202_match_played: "0",
      match_203_match_played: "0",
      match_204_match_played: "0",
      is_second_chance: "false",
      updated_at: "2024-04-22T09:25:00.000Z",
      rank: 5,
    },
    {
      entry_id: "415213",
      user_id: "599058",
      points: "285",
      possible_points: "285",
      entry_name: "hetenho's bracket 1",
      champion_id: "13",
      tiebreaker: "27",
      match_101_pick: "25",
      match_102_pick: "21",
      match_103_pick: "23",
      match_104_pick: "22",
      match_105_pick: "13",
      match_106_pick: "10",
      match_107_pick: "15",
      match_108_pick: "12",
      match_201_pick: "25",
      match_202_pick: "22",
      match_203_pick: "13",
      match_204_pick: "12",
      match_301_pick: "25",
      match_302_pick: "13",
      match_401_pick: "13",
      match_101_match_played: "6",
      match_102_match_played: "7",
      match_103_match_played: "5",
      match_104_match_played: "6",
      match_105_match_played: "7",
      match_106_match_played: "7",
      match_107_match_played: "7",
      match_108_match_played: "7",
      match_201_match_played: "0",
      match_202_match_played: "0",
      match_203_match_played: "0",
      match_204_match_played: "0",
      is_second_chance: "false",
      updated_at: "2024-04-20T07:29:00.000Z",
      rank: 6,
    },
    {
      entry_id: "110060",
      user_id: "268753",
      points: "240",
      possible_points: "240",
      entry_name: "lerva's bracket 1",
      champion_id: "13",
      tiebreaker: "23",
      match_101_pick: "25",
      match_102_pick: "52",
      match_103_pick: "18",
      match_104_pick: "26",
      match_105_pick: "13",
      match_106_pick: "10",
      match_107_pick: "3",
      match_108_pick: "12",
      match_201_pick: "25",
      match_202_pick: "18",
      match_203_pick: "13",
      match_204_pick: "12",
      match_301_pick: "25",
      match_302_pick: "13",
      match_401_pick: "13",
      match_101_match_played: "6",
      match_102_match_played: "6",
      match_103_match_played: "6",
      match_104_match_played: "6",
      match_105_match_played: "6",
      match_106_match_played: "6",
      match_107_match_played: "6",
      match_108_match_played: "6",
      match_201_match_played: "0",
      match_202_match_played: "0",
      match_203_match_played: "0",
      match_204_match_played: "0",
      is_second_chance: "false",
      updated_at: "2024-04-19T15:13:00.000Z",
      rank: 7,
    },
    {
      entry_id: "21112",
      user_id: "194021",
      points: "238",
      possible_points: "238",
      entry_name: "RIku's bracket 1",
      champion_id: "13",
      tiebreaker: "37",
      match_101_pick: "25",
      match_102_pick: "21",
      match_103_pick: "23",
      match_104_pick: "26",
      match_105_pick: "13",
      match_106_pick: "10",
      match_107_pick: "3",
      match_108_pick: "12",
      match_201_pick: "21",
      match_202_pick: "23",
      match_203_pick: "13",
      match_204_pick: "12",
      match_301_pick: "21",
      match_302_pick: "13",
      match_401_pick: "13",
      match_101_match_played: "6",
      match_102_match_played: "5",
      match_103_match_played: "4",
      match_104_match_played: "7",
      match_105_match_played: "6",
      match_106_match_played: "7",
      match_107_match_played: "5",
      match_108_match_played: "4",
      match_201_match_played: "0",
      match_202_match_played: "0",
      match_203_match_played: "0",
      match_204_match_played: "0",
      is_second_chance: "false",
      updated_at: "2024-04-19T08:05:00.000Z",
      rank: 8,
    },
    {
      entry_id: "23350",
      user_id: "195697",
      points: "186",
      possible_points: "186",
      entry_name: "neriksso",
      champion_id: "6",
      tiebreaker: "24",
      match_101_pick: "25",
      match_102_pick: "21",
      match_103_pick: "23",
      match_104_pick: "22",
      match_105_pick: "13",
      match_106_pick: "6",
      match_107_pick: "3",
      match_108_pick: "12",
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
      match_105_match_played: "5",
      match_106_match_played: "6",
      match_107_match_played: "5",
      match_108_match_played: "6",
      match_201_match_played: "0",
      match_202_match_played: "0",
      match_203_match_played: "0",
      match_204_match_played: "0",
      is_second_chance: "false",
      updated_at: "2024-04-19T08:50:00.000Z",
      rank: 9,
    },
    {
      entry_id: "26127",
      user_id: "148255",
      points: "185",
      possible_points: "185",
      entry_name: "rekmaster69's bracket 1",
      champion_id: "3",
      tiebreaker: "28",
      match_101_pick: "54",
      match_102_pick: "21",
      match_103_pick: "18",
      match_104_pick: "22",
      match_105_pick: "13",
      match_106_pick: "6",
      match_107_pick: "3",
      match_108_pick: "12",
      match_201_pick: "54",
      match_202_pick: "22",
      match_203_pick: "13",
      match_204_pick: "3",
      match_301_pick: "22",
      match_302_pick: "3",
      match_401_pick: "3",
      match_101_match_played: "5",
      match_102_match_played: "7",
      match_103_match_played: "6",
      match_104_match_played: "6",
      match_105_match_played: "6",
      match_106_match_played: "6",
      match_107_match_played: "5",
      match_108_match_played: "6",
      match_201_match_played: "0",
      match_202_match_played: "0",
      match_203_match_played: "0",
      match_204_match_played: "0",
      is_second_chance: "false",
      updated_at: "2024-04-19T09:51:00.000Z",
      rank: 10,
    },
    {
      entry_id: "16752",
      user_id: "65641",
      points: "151",
      possible_points: "151",
      entry_name: "lehtu's bracket 1",
      champion_id: "12",
      tiebreaker: "23",
      match_101_pick: "25",
      match_102_pick: "21",
      match_103_pick: "23",
      match_104_pick: "22",
      match_105_pick: "13",
      match_106_pick: "10",
      match_107_pick: "3",
      match_108_pick: "12",
      match_201_pick: "21",
      match_202_pick: "22",
      match_203_pick: "10",
      match_204_pick: "12",
      match_301_pick: "22",
      match_302_pick: "12",
      match_401_pick: "12",
      match_101_match_played: "7",
      match_102_match_played: "6",
      match_103_match_played: "7",
      match_104_match_played: "5",
      match_105_match_played: "4",
      match_106_match_played: "7",
      match_107_match_played: "6",
      match_108_match_played: "7",
      match_201_match_played: "0",
      match_202_match_played: "0",
      match_203_match_played: "0",
      match_204_match_played: "0",
      is_second_chance: "false",
      updated_at: "2024-04-20T14:58:00.000Z",
      rank: 11,
    },
    {
      entry_id: "16312",
      user_id: "189815",
      points: "123",
      possible_points: "123",
      entry_name: "Jasun raketti",
      champion_id: "6",
      tiebreaker: "38",
      match_101_pick: "25",
      match_102_pick: "52",
      match_103_pick: "23",
      match_104_pick: "22",
      match_105_pick: "13",
      match_106_pick: "6",
      match_107_pick: "3",
      match_108_pick: "12",
      match_201_pick: "25",
      match_202_pick: "22",
      match_203_pick: "6",
      match_204_pick: "12",
      match_301_pick: "25",
      match_302_pick: "6",
      match_401_pick: "6",
      match_101_match_played: "7",
      match_102_match_played: "7",
      match_103_match_played: "7",
      match_104_match_played: "6",
      match_105_match_played: "7",
      match_106_match_played: "5",
      match_107_match_played: "6",
      match_108_match_played: "7",
      match_201_match_played: "0",
      match_202_match_played: "0",
      match_203_match_played: "0",
      match_204_match_played: "0",
      is_second_chance: "false",
      updated_at: "2024-04-22T20:58:00.000Z",
      rank: 12,
    },
    {
      entry_id: "11416",
      user_id: "66235",
      points: "123",
      possible_points: "123",
      entry_name: "Juho's bracket 1",
      champion_id: "12",
      tiebreaker: "21",
      match_101_pick: "25",
      match_102_pick: "21",
      match_103_pick: "23",
      match_104_pick: "22",
      match_105_pick: "13",
      match_106_pick: "10",
      match_107_pick: "3",
      match_108_pick: "12",
      match_201_pick: "25",
      match_202_pick: "22",
      match_203_pick: "10",
      match_204_pick: "12",
      match_301_pick: "25",
      match_302_pick: "12",
      match_401_pick: "12",
      match_101_match_played: "6",
      match_102_match_played: "6",
      match_103_match_played: "6",
      match_104_match_played: "6",
      match_105_match_played: "6",
      match_106_match_played: "5",
      match_107_match_played: "5",
      match_108_match_played: "6",
      match_201_match_played: "0",
      match_202_match_played: "0",
      match_203_match_played: "0",
      match_204_match_played: "0",
      is_second_chance: "false",
      updated_at: "2024-04-19T06:09:00.000Z",
      rank: 12,
    },
    {
      entry_id: "13164",
      user_id: "187512",
      points: "119",
      possible_points: "119",
      entry_name: "arantala's bracket 1",
      champion_id: "12",
      tiebreaker: "36",
      match_101_pick: "25",
      match_102_pick: "52",
      match_103_pick: "23",
      match_104_pick: "22",
      match_105_pick: "13",
      match_106_pick: "10",
      match_107_pick: "3",
      match_108_pick: "12",
      match_201_pick: "25",
      match_202_pick: "23",
      match_203_pick: "13",
      match_204_pick: "12",
      match_301_pick: "25",
      match_302_pick: "12",
      match_401_pick: "12",
      match_101_match_played: "5",
      match_102_match_played: "5",
      match_103_match_played: "6",
      match_104_match_played: "5",
      match_105_match_played: "6",
      match_106_match_played: "6",
      match_107_match_played: "5",
      match_108_match_played: "5",
      match_201_match_played: "0",
      match_202_match_played: "0",
      match_203_match_played: "0",
      match_204_match_played: "0",
      is_second_chance: "false",
      updated_at: "2024-04-19T06:21:00.000Z",
      rank: 14,
    },
    {
      entry_id: "10359",
      user_id: "73984",
      points: "119",
      possible_points: "119",
      entry_name: "Saapunki's bracket 1",
      champion_id: "25",
      tiebreaker: "21",
      match_101_pick: "25",
      match_102_pick: "52",
      match_103_pick: "23",
      match_104_pick: "26",
      match_105_pick: "13",
      match_106_pick: "6",
      match_107_pick: "3",
      match_108_pick: "12",
      match_201_pick: "25",
      match_202_pick: "23",
      match_203_pick: "6",
      match_204_pick: "3",
      match_301_pick: "25",
      match_302_pick: "6",
      match_401_pick: "25",
      match_101_match_played: "7",
      match_102_match_played: "6",
      match_103_match_played: "5",
      match_104_match_played: "6",
      match_105_match_played: "6",
      match_106_match_played: "7",
      match_107_match_played: "6",
      match_108_match_played: "5",
      match_201_match_played: "0",
      match_202_match_played: "0",
      match_203_match_played: "0",
      match_204_match_played: "0",
      is_second_chance: "false",
      updated_at: "2024-04-19T08:05:00.000Z",
      rank: 14,
    },
    {
      entry_id: "51678",
      user_id: "218176",
      points: "116",
      possible_points: "116",
      entry_name: "rahnarsson's bracket 1",
      champion_id: "12",
      tiebreaker: "37",
      match_101_pick: "25",
      match_102_pick: "52",
      match_103_pick: "18",
      match_104_pick: "22",
      match_105_pick: "13",
      match_106_pick: "6",
      match_107_pick: "3",
      match_108_pick: "12",
      match_201_pick: "25",
      match_202_pick: "22",
      match_203_pick: "6",
      match_204_pick: "12",
      match_301_pick: "25",
      match_302_pick: "12",
      match_401_pick: "12",
      match_101_match_played: "6",
      match_102_match_played: "6",
      match_103_match_played: "7",
      match_104_match_played: "5",
      match_105_match_played: "6",
      match_106_match_played: "5",
      match_107_match_played: "4",
      match_108_match_played: "7",
      match_201_match_played: "0",
      match_202_match_played: "0",
      match_203_match_played: "0",
      match_204_match_played: "0",
      is_second_chance: "false",
      updated_at: "2024-04-19T12:35:00.000Z",
      rank: 16,
    },
    {
      entry_id: "16735",
      user_id: "189756",
      points: "116",
      possible_points: "116",
      entry_name: "Nevalainen's bracket 1",
      champion_id: "25",
      tiebreaker: "20",
      match_101_pick: "25",
      match_102_pick: "52",
      match_103_pick: "18",
      match_104_pick: "22",
      match_105_pick: "13",
      match_106_pick: "6",
      match_107_pick: "3",
      match_108_pick: "12",
      match_201_pick: "25",
      match_202_pick: "18",
      match_203_pick: "13",
      match_204_pick: "12",
      match_301_pick: "25",
      match_302_pick: "12",
      match_401_pick: "25",
      match_101_match_played: "6",
      match_102_match_played: "7",
      match_103_match_played: "7",
      match_104_match_played: "6",
      match_105_match_played: "5",
      match_106_match_played: "7",
      match_107_match_played: "6",
      match_108_match_played: "6",
      match_201_match_played: "0",
      match_202_match_played: "0",
      match_203_match_played: "0",
      match_204_match_played: "0",
      is_second_chance: "false",
      updated_at: "2024-04-19T06:57:00.000Z",
      rank: 16,
    },
    {
      entry_id: "14772",
      user_id: "66183",
      points: "116",
      possible_points: "116",
      entry_name: "Aksu's bracket 1",
      champion_id: "23",
      tiebreaker: "26",
      match_101_pick: "25",
      match_102_pick: "52",
      match_103_pick: "23",
      match_104_pick: "22",
      match_105_pick: "13",
      match_106_pick: "10",
      match_107_pick: "3",
      match_108_pick: "12",
      match_201_pick: "25",
      match_202_pick: "23",
      match_203_pick: "10",
      match_204_pick: "3",
      match_301_pick: "23",
      match_302_pick: "3",
      match_401_pick: "23",
      match_101_match_played: "6",
      match_102_match_played: "5",
      match_103_match_played: "6",
      match_104_match_played: "7",
      match_105_match_played: "6",
      match_106_match_played: "5",
      match_107_match_played: "4",
      match_108_match_played: "6",
      match_201_match_played: "0",
      match_202_match_played: "0",
      match_203_match_played: "0",
      match_204_match_played: "0",
      is_second_chance: "false",
      updated_at: "2024-04-19T06:37:00.000Z",
      rank: 16,
    },
    {
      entry_id: "15063",
      user_id: "189241",
      points: "115",
      possible_points: "115",
      entry_name: "einomies's bracket 1",
      champion_id: "12",
      tiebreaker: "31",
      match_101_pick: "54",
      match_102_pick: "52",
      match_103_pick: "18",
      match_104_pick: "22",
      match_105_pick: "14",
      match_106_pick: "6",
      match_107_pick: "3",
      match_108_pick: "12",
      match_201_pick: "54",
      match_202_pick: "22",
      match_203_pick: "14",
      match_204_pick: "12",
      match_301_pick: "22",
      match_302_pick: "12",
      match_401_pick: "12",
      match_101_match_played: "6",
      match_102_match_played: "5",
      match_103_match_played: "7",
      match_104_match_played: "6",
      match_105_match_played: "7",
      match_106_match_played: "6",
      match_107_match_played: "5",
      match_108_match_played: "4",
      match_201_match_played: "0",
      match_202_match_played: "0",
      match_203_match_played: "0",
      match_204_match_played: "0",
      is_second_chance: "false",
      updated_at: "2024-04-19T06:40:00.000Z",
      rank: 19,
    },
    {
      entry_id: "14496",
      user_id: "188779",
      points: "113",
      possible_points: "113",
      entry_name: "lolwut's bracket 1",
      champion_id: "54",
      tiebreaker: "43",
      match_101_pick: "54",
      match_102_pick: "21",
      match_103_pick: "23",
      match_104_pick: "22",
      match_105_pick: "13",
      match_106_pick: "6",
      match_107_pick: "15",
      match_108_pick: "12",
      match_201_pick: "54",
      match_202_pick: "22",
      match_203_pick: "13",
      match_204_pick: "12",
      match_301_pick: "54",
      match_302_pick: "12",
      match_401_pick: "54",
      match_101_match_played: "7",
      match_102_match_played: "6",
      match_103_match_played: "5",
      match_104_match_played: "6",
      match_105_match_played: "7",
      match_106_match_played: "7",
      match_107_match_played: "4",
      match_108_match_played: "4",
      match_201_match_played: "0",
      match_202_match_played: "0",
      match_203_match_played: "0",
      match_204_match_played: "0",
      is_second_chance: "false",
      updated_at: "2024-04-19T06:34:00.000Z",
      rank: 20,
    },
    {
      entry_id: "678880",
      user_id: "904942",
      points: "98",
      possible_points: "98",
      entry_name: "iamkisu's bracket 1",
      champion_id: "12",
      tiebreaker: "28",
      match_101_pick: "25",
      match_102_pick: "52",
      match_103_pick: "23",
      match_104_pick: "22",
      match_105_pick: "13",
      match_106_pick: "6",
      match_107_pick: "3",
      match_108_pick: "12",
      match_201_pick: "25",
      match_202_pick: "23",
      match_203_pick: "6",
      match_204_pick: "12",
      match_301_pick: "25",
      match_302_pick: "12",
      match_401_pick: "12",
      match_101_match_played: "5",
      match_102_match_played: "6",
      match_103_match_played: "5",
      match_104_match_played: "6",
      match_105_match_played: "6",
      match_106_match_played: "5",
      match_107_match_played: "5",
      match_108_match_played: "5",
      match_201_match_played: "0",
      match_202_match_played: "0",
      match_203_match_played: "0",
      match_204_match_played: "0",
      is_second_chance: "false",
      updated_at: "2024-04-21T11:22:00.000Z",
      rank: 21,
    },
    {
      entry_id: "486616",
      user_id: "683552",
      points: "93",
      possible_points: "93",
      entry_name: "alegc's bracket 1",
      champion_id: "12",
      tiebreaker: "41",
      match_101_pick: "54",
      match_102_pick: "52",
      match_103_pick: "23",
      match_104_pick: "22",
      match_105_pick: "13",
      match_106_pick: "10",
      match_107_pick: "15",
      match_108_pick: "12",
      match_201_pick: "54",
      match_202_pick: "22",
      match_203_pick: "13",
      match_204_pick: "12",
      match_301_pick: "54",
      match_302_pick: "12",
      match_401_pick: "12",
      match_101_match_played: "6",
      match_102_match_played: "5",
      match_103_match_played: "6",
      match_104_match_played: "6",
      match_105_match_played: "6",
      match_106_match_played: "5",
      match_107_match_played: "7",
      match_108_match_played: "6",
      match_201_match_played: "0",
      match_202_match_played: "0",
      match_203_match_played: "0",
      match_204_match_played: "0",
      is_second_chance: "false",
      updated_at: "2024-04-20T15:51:00.000Z",
      rank: 22,
    },
    {
      entry_id: "51340",
      user_id: "117574",
      points: "81",
      possible_points: "81",
      entry_name: "JanneKG's bracket 4",
      champion_id: "6",
      tiebreaker: "32",
      match_101_pick: "54",
      match_102_pick: "52",
      match_103_pick: "23",
      match_104_pick: "26",
      match_105_pick: "13",
      match_106_pick: "6",
      match_107_pick: "3",
      match_108_pick: "12",
      match_201_pick: "52",
      match_202_pick: "23",
      match_203_pick: "6",
      match_204_pick: "3",
      match_301_pick: "52",
      match_302_pick: "6",
      match_401_pick: "6",
      match_101_match_played: "6",
      match_102_match_played: "6",
      match_103_match_played: "6",
      match_104_match_played: "7",
      match_105_match_played: "7",
      match_106_match_played: "7",
      match_107_match_played: "6",
      match_108_match_played: "6",
      match_201_match_played: "0",
      match_202_match_played: "0",
      match_203_match_played: "0",
      match_204_match_played: "0",
      is_second_chance: "false",
      updated_at: "2024-04-19T12:33:00.000Z",
      rank: 23,
    },
    {
      entry_id: "517061",
      user_id: "719843",
      points: "75",
      possible_points: "75",
      entry_name: "Lexa666",
      champion_id: "23",
      tiebreaker: "35",
      match_101_pick: "54",
      match_102_pick: "52",
      match_103_pick: "23",
      match_104_pick: "22",
      match_105_pick: "14",
      match_106_pick: "6",
      match_107_pick: "3",
      match_108_pick: "12",
      match_201_pick: "52",
      match_202_pick: "23",
      match_203_pick: "14",
      match_204_pick: "3",
      match_301_pick: "23",
      match_302_pick: "3",
      match_401_pick: "23",
      match_101_match_played: "7",
      match_102_match_played: "6",
      match_103_match_played: "5",
      match_104_match_played: "6",
      match_105_match_played: "7",
      match_106_match_played: "5",
      match_107_match_played: "6",
      match_108_match_played: "6",
      match_201_match_played: "0",
      match_202_match_played: "0",
      match_203_match_played: "0",
      match_204_match_played: "0",
      is_second_chance: "false",
      updated_at: "2024-04-22T16:33:00.000Z",
      rank: 24,
    },
  ],
};
const SERIES = {
  game: {
    teams: [
      {
        team_id: 3,
        nickname: "Rangers",
        city: "New York",
        display_name: "New York Rangers",
        abbreviation: "NYR",
        twitter_handle: "x",
        hex_code: "0038A8",
        display_seed: "M1",
        team_logo:
          "https://allstarvotefilesde.blob.core.windows.net/nhl-team-logos/3.svg",
        wins: 55,
        points: 114,
        goals_per_game: 3.3902,
        goals_against_per_game: 2.756098,
        power_play_pct: 26.42,
        penalty_kill_pct: 84.48,
        secondary_hex_code: "CE1126",
        season_standings: "55-23-4",
        leading_scorer: "Artemi Panarin",
        leading_scorer_avatar:
          "https://low6nhlbracketsprod.blob.core.windows.net/assets/Panarin.png",
        leading_scorer_points: "120pts",
      },
      {
        team_id: 23,
        nickname: "Canucks",
        city: "Vancouver",
        display_name: "Vancouver Canucks",
        abbreviation: "VAN",
        twitter_handle: "X",
        hex_code: "00843D",
        display_seed: "P1",
        team_logo:
          "https://allstarvotefilesde.blob.core.windows.net/nhl-team-logos/23.svg",
        wins: 50,
        points: 109,
        goals_per_game: 3.4024,
        goals_against_per_game: 2.695122,
        power_play_pct: 22.66,
        penalty_kill_pct: 79.13,
        secondary_hex_code: "00205B",
        season_standings: "50-22-9",
        leading_scorer: "J.T. Miller",
        leading_scorer_avatar:
          "https://low6nhlbracketsprod.blob.core.windows.net/assets/Miller.png",
        leading_scorer_points: "103PTS",
      },
      {
        team_id: 6,
        nickname: "Bruins",
        city: "Boston",
        display_name: "Boston Bruins",
        abbreviation: "BOS",
        twitter_handle: "x",
        hex_code: "000000",
        display_seed: "A2",
        team_logo:
          "https://allstarvotefilesde.blob.core.windows.net/nhl-team-logos/6.svg",
        wins: 47,
        points: 109,
        goals_per_game: 3.2073,
        goals_against_per_game: 2.695122,
        power_play_pct: 22.22,
        penalty_kill_pct: 82.46,
        secondary_hex_code: "FFB81C",
        season_standings: "47-20-15",
        leading_scorer: "David Pastrnak",
        leading_scorer_avatar:
          "https://low6nhlbracketsprod.blob.core.windows.net/assets/Pastrnak.png",
        leading_scorer_points: "110pts",
      },
      {
        team_id: 25,
        nickname: "Stars",
        city: "Dallas",
        display_name: "Dallas Stars",
        abbreviation: "DAL",
        twitter_handle: "x",
        hex_code: "006847",
        display_seed: "C1",
        team_logo:
          "https://allstarvotefilesde.blob.core.windows.net/nhl-team-logos/25.svg",
        wins: 52,
        points: 113,
        goals_per_game: 3.5854,
        goals_against_per_game: 2.829268,
        power_play_pct: 24.17,
        penalty_kill_pct: 82.01,
        secondary_hex_code: "111111",
        season_standings: "52-21-9",
        leading_scorer: "Jason Robertson",
        leading_scorer_avatar:
          "https://low6nhlbracketsprod.blob.core.windows.net/assets/Robertson.png",
        leading_scorer_points: "80pts",
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
        wins: 50,
        points: 107,
        goals_per_game: 3.6829,
        goals_against_per_game: 3.073171,
        power_play_pct: 24.46,
        penalty_kill_pct: 79.92,
        secondary_hex_code: "236192",
        season_standings: "49-25-7",
        leading_scorer: "Nathan MacKinnon",
        leading_scorer_avatar:
          "https://low6nhlbracketsprod.blob.core.windows.net/assets/MacKinnon.png",
        leading_scorer_points: "138pts",
      },
      {
        team_id: 22,
        nickname: "Oilers",
        city: "Edmonton",
        display_name: "Edmonton Oilers",
        abbreviation: "EDM",
        twitter_handle: "x",
        hex_code: "FF4C00",
        display_seed: "P2",
        team_logo:
          "https://allstarvotefilesde.blob.core.windows.net/nhl-team-logos/22.svg",
        wins: 49,
        points: 104,
        goals_per_game: 3.561,
        goals_against_per_game: 2.878049,
        power_play_pct: 26.34,
        penalty_kill_pct: 79.46,
        secondary_hex_code: "041E42",
        season_standings: "49-26-6",
        leading_scorer: "Connor McDavid",
        leading_scorer_avatar:
          "https://low6nhlbracketsprod.blob.core.windows.net/assets/McDavid.png",
        leading_scorer_points: "132pts",
      },
      {
        team_id: 26,
        nickname: "Kings",
        city: "Los Angeles",
        display_name: "Los Angeles Kings",
        abbreviation: "LAK",
        twitter_handle: "x",
        hex_code: "111111",
        display_seed: "P3",
        team_logo:
          "https://allstarvotefilesde.blob.core.windows.net/nhl-team-logos/26.svg",
        wins: 44,
        points: 99,
        goals_per_game: 3.0976,
        goals_against_per_game: 2.560976,
        power_play_pct: 22.58,
        penalty_kill_pct: 84.59,
        secondary_hex_code: "A2AAAD",
        season_standings: "43-27-11",
        leading_scorer: "Kevin Fiala",
        leading_scorer_avatar:
          "https://low6nhlbracketsprod.blob.core.windows.net/assets/Fiala.png",
        leading_scorer_points: "72pts",
      },
      {
        team_id: 52,
        nickname: "Jets",
        city: "Winnipeg",
        display_name: "Winnipeg Jets",
        abbreviation: "WPG",
        twitter_handle: "x",
        hex_code: "55565A",
        display_seed: "C2",
        team_logo:
          "https://allstarvotefilesde.blob.core.windows.net/nhl-team-logos/52.svg",
        wins: 52,
        points: 110,
        goals_per_game: 3.1585,
        goals_against_per_game: 2.414634,
        power_play_pct: 18.75,
        penalty_kill_pct: 77.13,
        secondary_hex_code: "041E42",
        season_standings: "51-24-6",
        leading_scorer: "Mark Scheifele",
        leading_scorer_avatar:
          "https://low6nhlbracketsprod.blob.core.windows.net/assets/Mark Scheifele - WPG.png",
        leading_scorer_points: "72pts",
      },
      {
        team_id: 18,
        nickname: "Predators",
        city: "Nashville",
        display_name: "Nashville Predators",
        abbreviation: "NSH",
        twitter_handle: "x",
        hex_code: "FFB81C",
        display_seed: "WC1",
        team_logo:
          "https://allstarvotefilesde.blob.core.windows.net/nhl-team-logos/18.svg",
        wins: 47,
        points: 99,
        goals_per_game: 3.2439,
        goals_against_per_game: 3.02439,
        power_play_pct: 21.56,
        penalty_kill_pct: 76.92,
        secondary_hex_code: "041E42",
        season_standings: "47-30-5",
        leading_scorer: "Filip Forsberg",
        leading_scorer_avatar:
          "https://low6nhlbracketsprod.blob.core.windows.net/assets/Forsberg - NSH.png",
        leading_scorer_points: "94pts",
      },
      {
        team_id: 54,
        nickname: "Golden Knights",
        city: "Vegas",
        display_name: "Vegas Golden Knights",
        abbreviation: "VGK",
        twitter_handle: "x",
        hex_code: "B4975A",
        display_seed: "WC2",
        team_logo:
          "https://allstarvotefilesde.blob.core.windows.net/nhl-team-logos/54.svg",
        wins: 45,
        points: 98,
        goals_per_game: 3.2073,
        goals_against_per_game: 2.963415,
        power_play_pct: 20.24,
        penalty_kill_pct: 79.34,
        secondary_hex_code: "333F42",
        season_standings: "45-29-8",
        leading_scorer: "Jonathan Marchessault",
        leading_scorer_avatar:
          "https://low6nhlbracketsprod.blob.core.windows.net/assets/Marchessault.png",
        leading_scorer_points: "69pts",
      },
      {
        team_id: 13,
        nickname: "Panthers",
        city: "Florida",
        display_name: "Florida Panthers",
        abbreviation: "FLA",
        twitter_handle: "x",
        hex_code: "C8102E",
        display_seed: "A1",
        team_logo:
          "https://allstarvotefilesde.blob.core.windows.net/nhl-team-logos/13.svg",
        wins: 52,
        points: 110,
        goals_per_game: 3.2317,
        goals_against_per_game: 2.414634,
        power_play_pct: 23.51,
        penalty_kill_pct: 82.47,
        secondary_hex_code: "041E42",
        season_standings: "52-24-6",
        leading_scorer: "Sam Reinhart",
        leading_scorer_avatar:
          "https://low6nhlbracketsprod.blob.core.windows.net/assets/Reinhart.png",
        leading_scorer_points: "94pts",
      },
      {
        team_id: 10,
        nickname: "Maple Leafs",
        city: "Toronto",
        display_name: "Toronto Maple Leafs",
        abbreviation: "TOR",
        twitter_handle: "x",
        hex_code: "00205B",
        display_seed: "A3",
        team_logo:
          "https://allstarvotefilesde.blob.core.windows.net/nhl-team-logos/10.svg",
        wins: 46,
        points: 102,
        goals_per_game: 3.6341,
        goals_against_per_game: 3.182927,
        power_play_pct: 23.95,
        penalty_kill_pct: 76.89,
        secondary_hex_code: "FFFFFF",
        season_standings: "46-26-10",
        leading_scorer: "Auston Matthews",
        leading_scorer_avatar:
          "https://low6nhlbracketsprod.blob.core.windows.net/assets/Matthews.png",
        leading_scorer_points: "107pts",
      },
      {
        team_id: 12,
        nickname: "Hurricanes",
        city: "Carolina",
        display_name: "Carolina Hurricanes",
        abbreviation: "CAR",
        twitter_handle: "X",
        hex_code: "CE1126",
        display_seed: "M2",
        team_logo:
          "https://allstarvotefilesde.blob.core.windows.net/nhl-team-logos/12.svg",
        wins: 52,
        points: 111,
        goals_per_game: 3.378,
        goals_against_per_game: 2.573171,
        power_play_pct: 26.91,
        penalty_kill_pct: 86.43,
        secondary_hex_code: "FFFFFF",
        season_standings: "52-23-7",
        leading_scorer: "Sebastian Aho",
        leading_scorer_avatar:
          "https://low6nhlbracketsprod.blob.core.windows.net/assets/aho.png",
        leading_scorer_points: "89pts",
      },
      {
        team_id: 2,
        nickname: "Islanders",
        city: "New York",
        display_name: "New York Islanders",
        abbreviation: "NYI",
        twitter_handle: "x",
        hex_code: "F47D30",
        display_seed: "M3",
        team_logo:
          "https://allstarvotefilesde.blob.core.windows.net/nhl-team-logos/2.svg",
        wins: 39,
        points: 94,
        goals_per_game: 2.9878,
        goals_against_per_game: 3.146341,
        power_play_pct: 20.35,
        penalty_kill_pct: 71.49,
        secondary_hex_code: "00539B",
        season_standings: "39-27-16",
        leading_scorer: "Mathew Barzal",
        leading_scorer_avatar:
          "https://low6nhlbracketsprod.blob.core.windows.net/assets/Mathew Barzal - NYI.png",
        leading_scorer_points: "80pts",
      },
      {
        team_id: 14,
        nickname: "Lightning",
        city: "Tampa Bay",
        display_name: "Tampa Bay Lightning",
        abbreviation: "TBL",
        twitter_handle: "x",
        hex_code: "002469",
        display_seed: "WC1",
        team_logo:
          "https://allstarvotefilesde.blob.core.windows.net/nhl-team-logos/14.svg",
        wins: 45,
        points: 98,
        goals_per_game: 3.5122,
        goals_against_per_game: 3.256098,
        power_play_pct: 28.63,
        penalty_kill_pct: 83.33,
        secondary_hex_code: "FFFFFF",
        season_standings: "45-29-8",
        leading_scorer: "Nikita Kucherov",
        leading_scorer_avatar:
          "https://low6nhlbracketsprod.blob.core.windows.net/assets/Kucherov.png",
        leading_scorer_points: "144pts",
      },
      {
        team_id: 15,
        nickname: "Capitals",
        city: "Washington",
        display_name: "Washington Capitals",
        abbreviation: "WSH",
        twitter_handle: "x",
        hex_code: "C8102E",
        display_seed: "WC2",
        team_logo:
          "https://allstarvotefilesde.blob.core.windows.net/nhl-team-logos/15.svg",
        wins: 40,
        points: 91,
        goals_per_game: 2.6341,
        goals_against_per_game: 3.073171,
        power_play_pct: 20.61,
        penalty_kill_pct: 78.97,
        secondary_hex_code: "041E42",
        season_standings: "40-31-11",
        leading_scorer: "Dylan Strome",
        leading_scorer_avatar:
          "https://low6nhlbracketsprod.blob.core.windows.net/assets/Strome.png",
        leading_scorer_points: "67pts",
      },
    ],
    series_results: [
      {
        id: 101,
        round_sequence: 1,
        is_scored: true,
        winner_id: 25,
        team_1_id: 25,
        team_2_id: 54,
        team_1_wins: "4",
        team_2_wins: "3",
      },
      {
        id: 102,
        round_sequence: 1,
        is_scored: true,
        winner_id: 21,
        team_1_id: 52,
        team_2_id: 21,
        team_1_wins: "1",
        team_2_wins: "4",
      },
      {
        id: 103,
        round_sequence: 1,
        is_scored: true,
        winner_id: 23,
        team_1_id: 23,
        team_2_id: 18,
        team_1_wins: "4",
        team_2_wins: "2",
      },
      {
        id: 104,
        round_sequence: 1,
        is_scored: true,
        winner_id: 22,
        team_1_id: 22,
        team_2_id: 26,
        team_1_wins: "4",
        team_2_wins: "1",
      },
      {
        id: 105,
        round_sequence: 1,
        is_scored: true,
        winner_id: 13,
        team_1_id: 13,
        team_2_id: 14,
        team_1_wins: "4",
        team_2_wins: "1",
      },
      {
        id: 106,
        round_sequence: 1,
        is_scored: true,
        winner_id: 6,
        team_1_id: 6,
        team_2_id: 10,
        team_1_wins: "4",
        team_2_wins: "3",
      },
      {
        id: 107,
        round_sequence: 1,
        is_scored: true,
        winner_id: 3,
        team_1_id: 3,
        team_2_id: 15,
        team_1_wins: "4",
        team_2_wins: 0,
      },
      {
        id: 108,
        round_sequence: 1,
        is_scored: true,
        winner_id: 12,
        team_1_id: 12,
        team_2_id: 2,
        team_1_wins: "4",
        team_2_wins: "1",
      },
      {
        id: 201,
        round_sequence: 2,
        is_scored: true,
        winner_id: 25,
        team_1_id: 25,
        team_2_id: 21,
        team_1_wins: "4",
        team_2_wins: "2",
      },
      {
        id: 202,
        round_sequence: 2,
        is_scored: true,
        winner_id: 22,
        team_1_id: 23,
        team_2_id: 22,
        team_1_wins: "3",
        team_2_wins: "4",
      },
      {
        id: 203,
        round_sequence: 2,
        is_scored: true,
        winner_id: 13,
        team_1_id: 13,
        team_2_id: 6,
        team_1_wins: "4",
        team_2_wins: "2",
      },
      {
        id: 204,
        round_sequence: 2,
        is_scored: true,
        winner_id: 3,
        team_1_id: 3,
        team_2_id: 12,
        team_1_wins: "4",
        team_2_wins: "2",
      },
      {
        id: 301,
        round_sequence: 3,
        is_scored: true,
        winner_id: 22,
        team_1_id: 25,
        team_2_id: 22,
        team_1_wins: "2",
        team_2_wins: "4",
      },
      {
        id: 302,
        round_sequence: 3,
        is_scored: true,
        winner_id: 13,
        team_1_id: 13,
        team_2_id: 3,
        team_1_wins: "4",
        team_2_wins: "2",
      },
      {
        id: 401,
        round_sequence: 4,
        is_scored: true,
        winner_id: 13,
        team_1_id: 22,
        team_2_id: 13,
        team_1_wins: "3",
        team_2_wins: "4",
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
