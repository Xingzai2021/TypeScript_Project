abstract class Shape { //abstract的意思是：「Shape是一个不完整的概念，不能直接实例化」。它的意义是作为所有形状类型的共同基类，而不是用来创建具体的「形状」对象
  abstract area(): number;
}

class Circle extends Shape {
  constructor(public r: number) { super(); }
  area(): number { return Math.PI * this.r * this.r; }
}

class Rect extends Shape {
  constructor(public w: number, public h: number) { super(); }
  area(): number { return this.w * this.h; }
}

function totalArea(shapes: Shape[]): number {
  return shapes.reduce((sum, s) => sum + s.area(), 0);
}

console.log(totalArea([new Circle(2), new Rect(3, 4)]));




abstract class Storage {
  abstract get(key: string): string | null;
  abstract set(key: string, value: string): void;
  clear(): void { /* 可提供默认实现 */ }
}

class MemoryStorage extends Storage {
  private map = new Map<string, string>();
  get(key: string) { return this.map.get(key) ?? null; } //??（空值合并运算符）的意思是：左边是 null 或 undefined 时就取右边，否则取左边
  set(key: string, value: string) { this.map.set(key, value); }
}



class Engine { start() {} }
class Wheel { roll() {} }
class Car {
  constructor(private engine: Engine, private wheels: Wheel[]) {}
  drive() { this.engine.start(); this.wheels.forEach(w => w.roll()); }
}