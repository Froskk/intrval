// https://2ality.com/2018/04/type-notation-typescript.html
// https://github.com/typescript-cheatsheets/react-typescript-cheatsheet#reacttypescript-cheatsheets
// http://www.typescriptlang.org/docs/handbook/basic-types.html

export interface ITimer {
  on: boolean;
  startEpoch: number;
  timeElapsed: number;
  timerLength: number;
}
