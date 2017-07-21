class CompareTheTriplets {

  private inputCurrentLine: number = 0;
  private inputStdin: string = "";
  private inputStdinArr: string[];

  public constructor() {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    process.stdin.on("data", (data: {}) => {
      this.inputStdin += data;
    });

    process.stdin.on("end", () => {
      this.inputStdinArr = this.inputStdin.split("\n");
      this.doWork();
    });
  }

  private doWork: () => void = (): void => {
    const radix: number = 10;

    const aArr: string[] = this.readLine().split(" ");
    const a0: number = parseInt(aArr[0], radix);
    const a1: number = parseInt(aArr[1], radix);
    const a2: number = parseInt(aArr[2], radix);

    const bArr: string[] = this.readLine().split(" ");
    const b0: number = parseInt(bArr[0], radix);
    const b1: number = parseInt(bArr[1], radix);
    const b2: number = parseInt(bArr[2], radix);

    const res: number[] = this.solve(a0, a1, a2, b0, b1, b2);
    console.log(res.join(" "));
  }

  private readLine: () => string = (): string => this.inputStdinArr[this.inputCurrentLine++];

  private solve: (a0: number, a1: number, a2: number, b0: number, b1: number, b2: number) => number[] =
  (a0: number, a1: number, a2: number, b0: number, b1: number, b2: number): number[] => {
    let aScore = 0;
    let bScore = 0;
    if (a0 > b0) {
      aScore++;
    } else if (b0 > a0) {
      bScore++;
    }

    if (a1 > b1) {
      aScore++;
    } else if (b1 > a1) {
      bScore++;
    }

    if (a2 > b2) {
      aScore++;
    } else if (b2 > a2) {
      bScore++;
    }
    return [aScore, bScore];
  }
}
