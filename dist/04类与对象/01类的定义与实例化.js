"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//三种赋值方式
class test {
    a;
    b;
    toString() {
        return `a: ${this.a}, b: ${this.b}`;
    }
}
const A = new test();
A.a = 1;
A.b = 2;
console.log(A.toString());
//定义类时提前赋值
class test2 {
    a = 1;
    b = 2;
    toString() {
        return `a: ${this.a}, b: ${this.b}`;
    }
}
const B = new test2();
console.log(B.toString());
//通过构造函数赋值
class test3 {
    a;
    b;
    constructor(a = 1, b = 2) {
        this.a = a;
        this.b = b;
    }
    toString() {
        return `a: ${this.a}, b: ${this.b}`;
    }
}
const C = new test3(3, 4);
console.log(C.toString());
//# sourceMappingURL=01%E7%B1%BB%E7%9A%84%E5%AE%9A%E4%B9%89%E4%B8%8E%E5%AE%9E%E4%BE%8B%E5%8C%96.js.map