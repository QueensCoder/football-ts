import { CsvFileReader } from './CsvFileReader';

const reader = new CsvFileReader('football.csv');

reader.read();
let manUnitedWins = 0;

// for small set of closely related values for example choice a or choice b
enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

reader.data.forEach((row: string[]): void => {
  if (row[1] === 'Man United' && row[5] === MatchResult.HomeWin)
    manUnitedWins++;
  else if (row[2] === 'Man United' && row[5] === MatchResult.AwayWin)
    manUnitedWins++;
});

// console.log(reader.data);
console.log(manUnitedWins, '<><><>');
