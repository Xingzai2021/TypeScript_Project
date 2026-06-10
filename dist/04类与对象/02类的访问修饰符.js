"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Account {
    owner;
    balance = 0; // 仅类内部
    logPrefix = "[Account]"; // 类与子类
    constructor(owner) {
        this.owner = owner;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("amount must be > 0");
        this.balance += amount;
    }
    getBalance() {
        return this.balance; // ✅ 允许
    }
}
class VIPAccount extends Account {
    bonusRate = 0.02;
    addBonus() {
        // console.log(this.balance); // ❌ private，不能访问
        console.log(this.logPrefix, "add bonus"); // ✅ protected
    }
}
class Config {
    apiBase;
    constructor(apiBase) {
        this.apiBase = apiBase;
    }
}
const cfg = new Config("/api");
// cfg.apiBase = "/v2"; // ❌ 只读
//# sourceMappingURL=02%E7%B1%BB%E7%9A%84%E8%AE%BF%E9%97%AE%E4%BF%AE%E9%A5%B0%E7%AC%A6.js.map