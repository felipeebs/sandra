export class RollResult {
  constructor(
    public dSize: number,
    public dNum: number,
    public crit: number,
    public goal: number,
    public biff: number,
    public roll: number[]
  ) {}

  isCOmplex() {
    return this.crit && this.biff && this.goal;
  }
}
