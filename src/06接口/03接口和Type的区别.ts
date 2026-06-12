//1.接口和Type均可描述类和函数的结构
interface User { name: string; age: number; }
type User = { name: string; age: number; };
interface Fn { (x: number): string; }
type Fn = (x: number) => string;
//2.接口和Type均支持组合扩展
interface A { x: number; }
interface B extends A { y: string; }
type A = { x: number; };
type B = A & { y: string; };
//3.接口支持声明合并，而Type不支持
interface Api { get(): void; }
interface Api { post(): void; }
type Api2 = { get(): void; };
type Api2 = { post(): void; };


//结构的描述：【至少】包含某些属性或方法
interface Person { name: string }
interface Dev { name: string; skills: string[] }// 因为Dev包含了Person的所有结构，并且拥有自己的结构，那么可以说Dev是Person的子类型

let p: Person;
const d: Dev = { name: "Bob", skills: ["ts", "vue"] };
p = d; // ✅ d指向Dev，而Dev包含了Person的所有结构，所以p也可以指向d
console.log(p); // ✅ 这里的p指向了d，所以输出的是d的内容
console.log(p.skills); // ❌ 错误：在TypeScript中，Person类型没有skills属性，但是由于p指向了d，而d是Dev类型，所以在运行时p实际上是有skills属性的，但TypeScript的类型系统无法识别这一点，因此会报错