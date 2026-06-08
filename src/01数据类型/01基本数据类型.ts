// 字符串类型（string）
let username : string = "John Doe";
let bookname = "The Great Gatsby";

// 数字类型（number）
let age : number = 30;
let price : number = 19.99;
let binaryValue : number = 0b1010; // 二进制
let InfiniteValue : number = Infinity; //Infinity ：无穷大
let NotANumber : number = NaN; // 空值

// 布尔类型（boolean）
let isActive : boolean = true;
let isAdmin : boolean = false;

// null 和 undefined : 默认情况下，null 和 undefined 是所有类型的子类型
let u: undefined = undefined;
let n: null = null;
let value: string | null = null; // 在 strict: true 模式下，需要显式声明
let optional: string | undefined = undefined;
let nullable: string | null | undefined = null; // 可以同时为 null 和 undefined

// any 类型 ：可以赋值成任意类型
let key : any = "Hello";
key = 123; // 可以赋值为任何类型
key = true; // 也可以赋值为布尔类型
key.toUpperCase(); // 仍然可以调用字符串方法，但可能会在运行时出错
key.tofixed(2); // 也可以调用数字方法，但可能会在运行时出错

// unknown 类型 ：可以赋值成任意类型，但不能直接使用，必须进行类型检查
let temp : unknown = "Hello";
temp = 123; // 可以赋值为任何类型
temp = false; // 也可以赋值为布尔类型
// temp.toUpperCase(); // 错误：Object is of type 'unknown'
if (typeof temp === "string") {
    temp.toUpperCase(); // 现在可以安全地调用字符串方法
}

function processValue(value: unknown) {
  if (typeof value === "string") {
    return value.length;
  } else if (typeof value === "number") {
    return value.toFixed(2);
  } else if (typeof value === "boolean") {
    return value ? "true" : "false";
  }
  return "unknown";
}  // 类型守卫
