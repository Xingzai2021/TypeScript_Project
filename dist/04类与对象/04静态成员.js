"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IdGenerator {
    static last = 0;
    static next() {
        return ++this.last;
    }
    // 实例方法中调用静态成员，需通过IdGenerator访问。
    getLastId() {
        return IdGenerator.last;
    }
}
const id1 = IdGenerator.next();
const id2 = IdGenerator.next();
const generator = new IdGenerator();
console.log(generator.getLastId());
//# sourceMappingURL=04%E9%9D%99%E6%80%81%E6%88%90%E5%91%98.js.map