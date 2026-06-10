"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    brand;
    constructor(brand) {
        this.brand = brand;
    }
    describe() {
        return `Vehicle: ${this.brand}`;
    }
}
class Car extends Vehicle {
    model;
    constructor(brand, model) {
        super(brand); // 必须先调用
        this.model = model;
    }
    describe() {
        const base = super.describe();
        return `${base}, Model: ${this.model}`;
    }
}
const car = new Car("Toyota", "Corolla");
console.log(car.describe()); // Vehicle: Toyota, Model: Corolla
//# sourceMappingURL=01%E7%B1%BB%E7%9A%84%E7%BB%A7%E6%89%BF.js.map