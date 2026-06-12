// 约束必须包含 length 属性
interface HasLength { length: number }
function longer<T extends HasLength>(a: T, b: T): T {
  return a.length >= b.length ? a : b;
}
longer("abc", "de");              // ✅ string 有 length
longer([1, 2, 3], [4]);             // ✅ 数组有 length
// longer(123, 456);                // ❌ number 无 length

function pluck<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
  return keys.map(k => obj[k]);
}

type User = { id: number, name: string, active: boolean };
const user: User = { id: 1, name: "Alice", active: true };
const names = pluck(user, ["name"]); // string[]
const ids = pluck(user, ["id"]);     // number[]