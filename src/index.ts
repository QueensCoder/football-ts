import { MatchResult } from './matchResult';
import { MatchData, MatchReader } from './MatchReader';

const reader = new MatchReader('football.csv');

reader.read();

let manUnitedWins = 0;

// for small set of closely related values for example choice a or choice b

reader.data.forEach((row: MatchData): void => {
  if (row[1] === 'Man United' && row[5] === MatchResult.HomeWin)
    manUnitedWins++;
  else if (row[2] === 'Man United' && row[5] === MatchResult.AwayWin)
    manUnitedWins++;
});

console.log(reader.data[0][0]);
console.log(manUnitedWins, '<><><>');
