class Account {
  public owner: string;
  private balance: number = 0; // 仅类内部
  protected logPrefix: string = "[Account]"; // 类与子类

  constructor(owner: string) {
    this.owner = owner;
  }

  deposit(amount: number) : void{
    if (amount <= 0) throw new Error("amount must be > 0");
    this.balance += amount;
  }

  getBalance() : number {
    return this.balance; // ✅ 允许
  }
}

class VIPAccount extends Account {
  bonusRate = 0.02;
  addBonus():void {
    // console.log(this.balance); // ❌ private，不能访问
    console.log(this.logPrefix, "add bonus"); // ✅ protected
  }
}

class Config {
  readonly apiBase: string;
  constructor(apiBase: string) {
    this.apiBase = apiBase;
  }
}

const cfg = new Config("/api");
// cfg.apiBase = "/v2"; // ❌ 只读

