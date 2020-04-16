import { MatchResult } from './matchResult';
import { MatchData } from './matchData';
import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';

const csvFileReader = new CsvFileReader('football.csv');

const matchReader = new MatchReader(csvFileReader);

matchReader.load();

let manUnitedWins = 0;
console.log(Array.isArray(matchReader), '<><><>');
// for small set of closely related values for example choice a or choice b

matchReader.matches.forEach((row: MatchData): void => {
  if (row[1] === 'Man United' && row[5] === MatchResult.HomeWin)
    manUnitedWins++;
  else if (row[2] === 'Man United' && row[5] === MatchResult.AwayWin)
    manUnitedWins++;
});

console.log(matchReader.matches[0][0]);
console.log(manUnitedWins, '<><><>');
