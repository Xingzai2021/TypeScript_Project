class Vehicle {
  constructor(public brand: string) {}
  describe(): string {
    return `Vehicle: ${this.brand}`;
  }
}

class Car extends Vehicle {
  constructor(brand: string, public model: string) {
    super(brand); // 必须先调用
  }
  override describe(): string {
    const base = super.describe();
    return `${base}, Model: ${this.model}`;
  }
}

const car = new Car("Toyota", "Corolla");
console.log(car.describe()); // Vehicle: Toyota, Model: Corolla