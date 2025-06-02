export function ErrorValidsnum(num: string): boolean | string;
export function IsDivisibleBy2(num: string): boolean;
export function IsDivisibleBy3(num: string): boolean;
export function IsDivisibleBy4(num: string): boolean;
export function IsDivisibleBy5(num: string): boolean;
export function IsDivisibleBy7(num: string): boolean;
export function IsDivisibleBy10(num: string): boolean;

export default class IsDiv {
  constructor(num?: string | number);
  set(num: string | number): this;
  readonly by2: boolean;
  readonly by3: boolean;
  readonly by4: boolean;
  readonly by5: boolean;
  readonly by7: boolean;
  readonly by10: boolean;
}