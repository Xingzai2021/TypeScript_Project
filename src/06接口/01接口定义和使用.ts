interface User {
  id: number;
  name: string;
  email?: string; // 可选属性
}

const u1: User = { id: 1, name: "Alice" };
const u2: User = { id: 2, name: "Bob", email: "b@example.com" };

interface Point {
  readonly x: number;
  readonly y: number;
}

const p: Point = { x: 1, y: 2 };
// p.x = 3; // ❌ 只读属性不可重新赋值

interface StringMap {
  [key: string]: string; // 任意字符串键，对应字符串值
}

const dict: StringMap = {
  hello: "world",
  foo: "bar"
};