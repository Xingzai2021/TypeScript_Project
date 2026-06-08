"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1.定义枚举
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
// 使用枚举
let dir = Direction.Up;
// 如果不指定值，默认从 0 开始递增
var Status;
(function (Status) {
    Status[Status["Pending"] = 0] = "Pending";
    Status[Status["Active"] = 1] = "Active";
    Status[Status["Completed"] = 2] = "Completed"; // 2
})(Status || (Status = {}));
// 指定值枚举
var Code;
(function (Code) {
    Code[Code["Success"] = 200] = "Success";
    Code[Code["BadRequest"] = 400] = "BadRequest";
    Code[Code["NotFound"] = 404] = "NotFound";
    Code[Code["ServerError"] = 500] = "ServerError";
})(Code || (Code = {}));
// 字符串枚举
var Color;
(function (Color) {
    Color["Red"] = "RED";
    Color["Green"] = "GREEN";
    Color["Blue"] = "BLUE";
})(Color || (Color = {}));
// 2.函数没有返回值
function log(message) {
    console.log(message);
}
// 3.函数抛出异常
function throwError(message) {
    throw new Error(message);
}
// 函数进入无限循环
function infiniteLoop() {
    while (true) {
        // ...
    }
}
// 不可能的类型（类型守卫）
function processValue(value) {
    if (typeof value === "string") {
        return value.length;
    }
    else if (typeof value === "number") {
        return value.toFixed(2);
    }
    else {
        // 穷举检查：假如新增了联合类型成员但是忘记处理，就会在这里提示忘记处理的类型
        const _exhaustiveCheck = value;
        return _exhaustiveCheck;
    }
}
//# sourceMappingURL=03%E6%9E%9A%E4%B8%BE%E5%92%8Cvoid%E5%92%8Cnever.js.map