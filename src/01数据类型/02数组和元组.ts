//1.数组类型
let numbers: number[] = [1, 2, 3];
let strings: string[] = ["a", "b", "c"];
let booleans: Array<boolean> = [true, false, true];
let mixed = [1, 2, 3]; // 推断为 (number)[]
// ❌ 类型错误
// numbers.push("four"); // 错误： 类型为 'string' 不能赋给类型为 'number'

//2.只读数组
let readonlyNumbers: readonly number[] = [1, 2, 3];
let readonlyStrings: ReadonlyArray<string> = ["a", "b"];
// ❌ 不能修改
// readonlyNumbers.push(4); // 错误： 属性 'push' 不存在于类型 'readonly number[]' 上

// 3.数组中的联合类型
let mixed1: (string | number)[] = [1, "two", 3, "four"];
let mixed2: Array<string | number> = [1, "two", 3];



//2.元组类型
// 定义一个包含 string 和 number 的元组
let tuple: [string, number] = ["OK", 200];

// 访问元素
let str: string = tuple[0];
let num: number = tuple[1];

// 修改元素
tuple[1] = 400;

// ❌ 类型错误
// let tuple2: [string, number] = [42, "hello"]; // 错误： 类型 'number' 不能赋给类型 'string'

// ❌ 长度错误
// let tuple3: [string, number] = ["hello"]; // 错误： 类型 '[string]' 不能赋给类型 '[string, number]'

// 可选元素
let tuple4: [string, number, boolean?] = ["hello", 42];
let tuple5: [string, number, boolean?] = ["hello", 42, true];
// 多个可选元素
let tuple3: [string, number?, boolean?] = ["hello"];

// 剩余元素必须是数组类型（...number[]：0-N个number类型元素）
let tuple9: [string, ...number[]] = ["hello", 1, 2, 3];

// 为元组元素添加标签，提高代码可读性（仅能）
let response: [status: number, message: string] = [200, "OK"];
// 访问时仍然必须使用索引
console.log(response[0]); // 200
console.log(response[1]); // "OK"