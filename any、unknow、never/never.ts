//为了保持与集合论的对应关系，以及类型运算的完整性，TypeScript 还引入了“空类型”的概念，即该类型为空，不包含任何值。
//由于不存在任何属于“空类型”的值，所以该类型被称为never，即不可能有这样的值。

//在处理分支时走其他的逻辑，else里面就是never类型，即不存在这种类型
function fn(x: string | number) {
    if (typeof x === "string") {
        // ...
    } else if (typeof x === "number") {
        // ...
    } else {
        x; // never 类型
    }
}


//never不能被赋值成任何类型，与any，unknow相反，因为代表没有这种类型
var q: never
var e: never
q = e


//never可以赋值给任意的其他类型
function f(): never {
    throw new Error("Error");
}

let u1: number = f(); // 不报错
let u2: string = f(); // 不报错
let u3: boolean = f(); // 不报错