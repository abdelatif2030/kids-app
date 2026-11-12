// «أربعة ورا بعض» rules (pure): two players on one device take turns dropping discs into a 7x6 frame; four in a row
// (across, down or diagonal) wins; a full frame is a draw. No computer opponent, nothing recorded for the dashboard
// (strategy, no right or wrong answer — as in the old game). Finishing a game gives the learning star the first time.
export const COLS = 7;
export const ROWS = 6;

export class Four {
  constructor(cols = COLS, rows = ROWS) {
    this.cols = cols;
    this.rows = rows;
    this.cells = Array.from({ length: cols }, () => []); // per column, bottom up: 0 or 1
    this.turn = 0;
    this.winner = -1;
    this.line = null;
    this.draw = false;
  }

  get over() { return this.winner >= 0 || this.draw; }
  canDrop(c) { return !this.over && c >= 0 && c < this.cols && this.cells[c].length < this.rows; }
  at(c, r) { const col = this.cells[c]; return col && r < col.length ? col[r] : -1; }

  /** Drops the current player's disc in column [c]: {who, col, row, won, line, draw} or null. */
  drop(c) {
    if (!this.canDrop(c)) return null;
    const who = this.turn;
    this.cells[c].push(who);
    const row = this.cells[c].length - 1;
    const line = this._line(c, row, who);
    if (line) { this.winner = who; this.line = line; }
    else if (this.cells.every((col) => col.length >= this.rows)) this.draw = true;
    else this.turn = 1 - who;
    return { who, col: c, row, won: !!line, line, draw: this.draw };
  }

  _line(c, r, who) {
    for (const [dc, dr] of [[1, 0], [0, 1], [1, 1], [1, -1]]) {
      const cells = [[c, r]];
      for (const s of [1, -1]) {
        let x = c + dc * s, y = r + dr * s;
        while (this.at(x, y) === who) { cells.push([x, y]); x += dc * s; y += dr * s; }
      }
      if (cells.length >= 4) return cells.sort((a, b) => a[0] - b[0] || a[1] - b[1]).slice(0, 4);
    }
    return null;
  }
}
