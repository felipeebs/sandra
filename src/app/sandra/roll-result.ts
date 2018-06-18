export class RollResult {
  public dateTime: Date;

  constructor(
    public dSize: number,
    public dNum: number,
    public crit: number,
    public goal: number,
    public biff: number,
    public roll: number[]
  ) {
    this.dateTime = new Date();
  }

  isCOmplex() {
    return this.crit && this.biff && this.goal;
  }
}
