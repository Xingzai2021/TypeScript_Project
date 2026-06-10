"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    _name;
    #age = 0; // 私有字段（ES2022的新语法，用于创建私有字段，非 TS 修饰符）
    constructor(_name, age) {
        this._name = _name;
        // private _name: string：在构造函数中传参时会自动创建_name变量作为私有字段，并赋值。
        this.age = age; // 使用 setter
    }
    //当使用 get/set 时，TypeScript 会推断属性类型；若只写了 get，该属性为只读
    get name() {
        return this._name.trim();
    }
    set name(v) {
        this._name = v;
    }
    get age() {
        return this.#age;
    }
    set age(v) {
        if (v < 0)
            throw new Error("age must be >= 0");
        this.#age = v;
    }
}
const tom = new Person(" Tom ", 18);
console.log(tom.name); // "Tom"
//# sourceMappingURL=03Get%E5%92%8CSet.js.map