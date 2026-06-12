//泛型接口
interface ApiResponse<T> {
  ok: boolean;
  data?: T;
  error?: string;
}
const rs1: ApiResponse<number> = { ok: true, data: 42 };

// 泛型类型别名
type Pair<T, U = T> = { first: T; second: U };
const p1: Pair<string> = { first: "a", second: "b" }; // U 默认 = T
const p2: Pair<string, number> = { first: "a", second: 1 };

// 泛型类
class Box<T> {
  private _value: T;
  constructor(v: T) { this._value = v; }
  get value(): T { return this._value; }
  set value(v: T) { this._value = v; }
}
const sb = new Box<string>("hi");
const nb = new Box(123); // 推断 T = number

// 多重泛型约束
interface HasId { id: string | number }
interface Timestamped { createdAt: Date }
function tag<T extends HasId & Timestamped>(entity: T) {
  return `${entity.id}@${entity.createdAt.toISOString()}`;
}
tag({id: 1, createdAt: new Date("2030-10-01")})

// 默认类型参数
interface Dictionary<T = string> {
  [key: string]: T;
}

const dict1: Dictionary = { a: "x" };        // T = string
const dict2: Dictionary<number> = { a: 1 };   // T = number
