//三种赋值方式
class test{
    a! : number
    b! : number

    toString(): string {
        return `a: ${this.a}, b: ${this.b}`
    }
}
const A = new test()
A.a = 1
A.b = 2
console.log(A.toString())

//定义类时提前赋值
class test2{
    a : number = 1
    b : number = 2

    toString(): string {
        return `a: ${this.a}, b: ${this.b}`
    }
}
const B = new test2()
console.log(B.toString())

//通过构造函数赋值
class test3{
    a : number
    b : number

    constructor(a: number = 1, b: number = 2) {
        this.a = a
        this.b = b
    }

    toString(): string {
        return `a: ${this.a}, b: ${this.b}`
    }
}
const C = new test3(3, 4)
console.log(C.toString())