// 1.定义枚举
enum Direction {
  Up = 0,
  Down = 1,
  Left = 2,
  Right = 3
}
// 使用枚举
let dir: Direction = Direction.Up;
// 如果不指定值，默认从 0 开始递增
enum Status {
  Pending,    // 0
  Active,     // 1
  Completed   // 2
}
// 指定值枚举
enum Code {
  Success = 200,
  BadRequest = 400,
  NotFound = 404,
  ServerError = 500
}
// 字符串枚举
enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE"
}


// 2.函数没有返回值
function log(message: string): void {
  console.log(message);
}


// 3.函数抛出异常
function throwError(message: string): never {
  throw new Error(message);
}
// 函数进入无限循环
function infiniteLoop(): never {
  while (true) {
    // ...
  }
}
// 不可能的类型（类型守卫）
function processValue(value: string | number) {
  if (typeof value === "string") {
    return value.length;
  } else if (typeof value === "number") {
    return value.toFixed(2);
  } else {
    // 穷举检查：假如新增了联合类型成员但是忘记处理，就会在这里提示忘记处理的类型
    const _exhaustiveCheck: never = value;
    return _exhaustiveCheck;
  }
}