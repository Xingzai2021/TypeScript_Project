class IdGenerator {
  private static last = 0;
  
  static next(): number {
    return ++this.last;
  }

  // 实例方法中调用静态成员，需通过IdGenerator访问。
  getLastId(): number {
    return IdGenerator.last;
  }
}

const id1 = IdGenerator.next();
const id2 = IdGenerator.next();
const generator = new IdGenerator();
console.log(generator.getLastId());