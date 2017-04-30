class SimpleArraySum {

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
    const n: number = parseInt(this.readLine(), radix);
    const arr: string[] = this.readLine().split(" ");
    let sum: number = 0;
    for (let i: number = 0; i < n; i++) {
      sum += parseInt(arr[i], radix);
    }
    console.log(sum);
  }

  private readLine: () => string = (): string => this.inputStdinArr[this.inputCurrentLine++];

  private simpleArraySum: (a: number, b: number) => number = (a: number, b: number): number => a + b;
}
