// 基本用法
let value: unknown = "hello";
let length = (value as string).length; //unknown类型需要审查后才能使用，但是加了as （Type）后就可以使用

// 数字字符串转换
let numStr: unknown = "123";
let num = parseInt(numStr as string); // 断言为 string

// DOM 操作
let element = document.getElementById("myButton") as HTMLButtonElement;
element.click(); // 这里getElementById()返回的类型是 HTMLElement | null，断言为 HTMLButtonElement 后就可以调用 click() 方法