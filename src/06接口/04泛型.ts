function identity<T>(value: T): T {
  return value;
}
const a = identity<string>("hello"); // 显式传参
const b = identity(123);             // 类型推断：T = number

function first<T>(list: T[]): T | undefined {
  return list[0];
}

function map<T, U>(list: T[], fn: (item: T, index: number) => U): U[] {
  const out: U[] = [];
  list.forEach((it, i) => out.push(fn(it, i)));
  return out;
}
const r = map<number, number>([1, 2, 3], (n, s) => n * 2); // number[]
console.log(r);