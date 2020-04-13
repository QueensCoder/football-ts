import fs from 'fs';
import { dateStringToDate } from './utils';
import { MatchResult } from './matchResult';

// tuple that includes all the data for the array in the order that we need it in
export type MatchData = [
  Date,
  string,
  string,
  number,
  number,
  MatchResult,
  string
];

export class CsvFileReader {
  data: MatchData[] = [];

  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, { encoding: 'utf-8' })
      .split('\n')
      .map((row: string): string[] => row.split(','))
      .map(
        (row: string[]): MatchData => {
          return [
            dateStringToDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5] as MatchResult, //match assertion override ts behavior to tell this value is what we asserted
            row[6],
          ];
        }
      );
  }
}
