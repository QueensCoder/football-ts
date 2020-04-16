import { MatchData } from '../matchData';
import { Analyzer } from '../Summary';
import { MatchResult } from '../matchResult';

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let wins = 0;
    matches.forEach((row: MatchData): void => {
      if (row[1] === this.team && row[5] === MatchResult.HomeWin) wins++;
      else if (row[2] === this.team && row[5] === MatchResult.AwayWin) wins++;
    });
    return `Team ${this.team} won ${wins} games!`;
  }
}
