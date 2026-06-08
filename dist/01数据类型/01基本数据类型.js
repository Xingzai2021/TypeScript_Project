"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 字符串类型（string）
let username = "John Doe";
let bookname = "The Great Gatsby";
// 数字类型（number）
let age = 30;
let price = 19.99;
let binaryValue = 0b1010; // 二进制
let InfiniteValue = Infinity; //Infinity ：无穷大
let NotANumber = NaN; // 空值
// 布尔类型（boolean）
let isActive = true;
let isAdmin = false;
// null 和 undefined : 默认情况下，null 和 undefined 是所有类型的子类型
let u = undefined;
let n = null;
let value = null; // 在 strict: true 模式下，需要显式声明
let optional = undefined;
let nullable = null; // 可以同时为 null 和 undefined
// any 类型 ：可以赋值成任意类型
let key = "Hello";
key = 123; // 可以赋值为任何类型
key = true; // 也可以赋值为布尔类型
key.toUpperCase(); // 仍然可以调用字符串方法，但可能会在运行时出错
key.tofixed(2); // 也可以调用数字方法，但可能会在运行时出错
// unknown 类型 ：可以赋值成任意类型，但不能直接使用，必须进行类型检查
let temp = "Hello";
temp = 123; // 可以赋值为任何类型
temp = false; // 也可以赋值为布尔类型
// temp.toUpperCase(); // 错误：Object is of type 'unknown'
if (typeof temp === "string") {
    temp.toUpperCase(); // 现在可以安全地调用字符串方法
}
function processValue(value) {
    if (typeof value === "string") {
        return value.length;
    }
    else if (typeof value === "number") {
        return value.toFixed(2);
    }
    else if (typeof value === "boolean") {
        return value ? "true" : "false";
    }
    return "unknown";
} // 类型守卫
//# sourceMappingURL=01%E5%9F%BA%E6%9C%AC%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.js.map