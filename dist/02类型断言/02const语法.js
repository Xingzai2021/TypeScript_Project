"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let corlors1 = ['red', 'green', 'blue']; //可重新赋值 可修改元素
let corlors2 = ['red', 'green', 'blue']; //可重新赋值 不可修改元素
const corlors3 = ['red', 'green', 'blue']; //不可重新赋值 可修改元素
const directions = ['north', 'south', 'east', 'west']; //不可重新赋值 不可修改元素
// 类型: readonly ["north", "south", "east", "west"]
const config = {
    theme: 'dark',
    version: 2,
    features: ['login', 'profile']
};
// 类型:
// {
//   readonly theme: "dark";
//   readonly version: 2;
//   readonly features: readonly ["login", "profile"];
// }
const STATUS = {
    PENDING: 'pending',
    SUCCESS: 'success',
    ERROR: 'error'
};
// StatusValue = "pending" | "success" | "error"
/*
1. typeof STATUS：
{
readonly PENDING "pending",
readonly SUCCESS "success",
readonly ERROR "error",
}

2. keyof typeof STATUS：
"PENDING" | "SUCCESS" | "ERROR"

3. STATUS[keyof typeof STATUS]：
取出联合类型的所有值："pending", "success", "error"

4. typeof STATUS[keyof typeof STATUS]：
变成联合类型: "pending" | "success" | "error"
*/
// 类型: "pending" | "success" | "error"
// 安全地使用
function updateStatus(status) { }
updateStatus('pending'); // ✅ OK
// updateStatus('loading');  // ❌ Error!
//# sourceMappingURL=02const%E8%AF%AD%E6%B3%95.js.map