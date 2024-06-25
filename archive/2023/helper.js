/** Used to recalculate scores and ranks as the entries JSON I had from
 * 2023 was after the first few games.
 *
 * This is not used or imported anywhere on the site.
 */

let round_1 = [
  "match_101_pick",
  "match_102_pick",
  "match_103_pick",
  "match_104_pick",
  "match_105_pick",
  "match_106_pick",
  "match_107_pick",
  "match_108_pick",
];

let round_2 = [
  "match_201_pick",
  "match_202_pick",
  "match_203_pick",
  "match_204_pick",
];

let round_3 = ["match_301_pick", "match_302_pick"];

let round_4 = ["match_401_pick"];

function score(predictions, series) {
  final_score = 0;

  round_1.forEach((round) => {
    let prediction = parseInt(predictions[round]);

    let id = parseInt(round.replace("match_", "").replace("_pick", ""));
    let serie = series.find((serie) => serie.id === id);
    let result = serie.winner_id;
    let series_games =
      parseInt(serie.team_1_wins) + parseInt(serie.team_2_wins);

    if (result === prediction) {
      final_score += 10;
    }

    let games_prediction = parseInt(predictions[`match_${id}_match_played`]);
    if (series_games === games_prediction) {
      final_score += 3;
    }
  });

  round_2.forEach((round) => {
    let prediction = parseInt(predictions[round]);

    let id = parseInt(round.replace("match_", "").replace("_pick", ""));
    let serie = series.find((serie) => serie.id === id);
    let result = serie.winner_id;

    if (result === prediction) {
      final_score += 25;
    }
  });

  round_3.forEach((round) => {
    let prediction = parseInt(predictions[round]);

    let id = parseInt(round.replace("match_", "").replace("_pick", ""));
    let serie = series.find((serie) => serie.id === id);
    let result = serie.winner_id;

    if (result === prediction) {
      final_score += 50;
    }
  });

  round_4.forEach((round) => {
    let prediction = parseInt(predictions[round]);

    let id = parseInt(round.replace("match_", "").replace("_pick", ""));
    let serie = series.find((serie) => serie.id === id);
    let result = serie.winner_id;

    if (result === prediction) {
      final_score += 100;
    }
  });

  return final_score;
}

rankings = ENTRIES.entries.map((prediction) => {
  const { entry_id, entry_name } = prediction;
  const final_score = score(prediction, SERIES.game.series_results);

  return {
    entry_id,
    entry_name,
    final_score,
  };
});

rankings.sort((a, b) => b.final_score - a.final_score);

console.log(rankings);
