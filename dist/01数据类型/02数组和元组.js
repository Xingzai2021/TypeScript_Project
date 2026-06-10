"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//1.数组类型
let numbers = [1, 2, 3];
let strings = ["a", "b", "c"];
let booleans = [true, false, true];
let mixed = [1, 2, 3]; // 推断为 (number)[]
// ❌ 类型错误
// numbers.push("four"); // 错误： 类型为 'string' 不能赋给类型为 'number'
//2.只读数组
let readonlyNumbers = [1, 2, 3];
let readonlyStrings = ["a", "b"];
// ❌ 不能修改
// readonlyNumbers.push(4); // 错误： 属性 'push' 不存在于类型 'readonly number[]' 上
// 3.数组中的联合类型
let mixed1 = [1, "two", 3, "four"];
let mixed2 = [1, "two", 3];
//2.元组类型
// 定义一个包含 string 和 number 的元组
let tuple = ["OK", 200];
// 访问元素
let str = tuple[0];
let num = tuple[1];
// 修改元素
tuple[1] = 400;
// ❌ 类型错误
// let tuple2: [string, number] = [42, "hello"]; // 错误： 类型 'number' 不能赋给类型 'string'
// ❌ 长度错误
// let tuple3: [string, number] = ["hello"]; // 错误： 类型 '[string]' 不能赋给类型 '[string, number]'
// 可选元素
let tuple4 = ["hello", 42];
let tuple5 = ["hello", 42, true];
// 多个可选元素
let tuple3 = ["hello"];
// 剩余元素必须是数组类型（...number[]：0-N个number类型元素）
let tuple9 = ["hello", 1, 2, 3];
// 为元组元素添加标签，提高代码可读性（仅能）
let response = [200, "OK"];
// 访问时仍然必须使用索引
console.log(response[0]); // 200
console.log(response[1]); // "OK"
//# sourceMappingURL=02%E6%95%B0%E7%BB%84%E5%92%8C%E5%85%83%E7%BB%84.js.map