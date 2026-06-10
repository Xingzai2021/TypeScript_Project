const Rectangle = class {
  constructor(public width: number, public height: number) {}
  
  area(): number {
    setTimeout(() => {
        //箭头函数：(传参)=>{函数体} 若这里用的是function创建函数，则this指向调用area的对象即r；但箭头函数不会像func一样创建作用域而是会将this向上面抛出，所以this指向的是class本身所以正确访问width和height。
        console.log(this.width * this.height);
    }, 1000);
    return this.width * this.height;
  }
};

const r = new Rectangle(2, 3);
console.log(r.area()); // 6