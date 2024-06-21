//第一种写法，在类型后面加[]
let num: number[] = [1, 2, 3, 4]//限定了数组必须是number类型
let ns: (string | number)[] = [1, 2, 3, 'hellow']//数组里面的类型比较也可以使用联合类型。写在小括号里面，因为优先级的问题。
//这个例子里面的圆括号是必须的，否则因为竖杠|的优先级低于[]，TypeScript 会把number|string[]理解成number和string[]的联合类型。

//如果数组成员可以是任意类型，写成any[]。当然，这种写法是应该避免的。
let arr: any[];//应该避免使用any类型，会默认停止类型判断。


//第二种方法，就是使用内置接口
let arr1: Array<number> = [1, 2, 3];
let arr3: Array<number | string> = [1, 2, '123']

//数组可以任意数量的成员，空数组也可以。
let arr4: number[]
arr4 = [1, 2]
arr4 = [1, 2, 3, 4, 5, 6]
arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let arr5: number[] = [1, 2, 3]
arr5[3] = 0

//数组成员可以任意，所以ts不会对数组边界进行判断。
//TypeScript 允许使用方括号读取数组成员的类型。
type Names = string[];
type Name = Names[0]; // string

//由于数组成员的索引类型都是number，所以读取成员类型也可以写成下面这样。
type Names1 = string[];
type name1 = Names[number]; // string

//数组的类型判断
const arrr = []//判断为never
const arr0 = [1, 2, 3]
arr0.push('asd')


//只读数组，const断言
//JavaScript 规定，const命令声明的数组变量是可以改变成员的。
const m = [1, 2, 3]
m[3] = 1
//可以修改值


//但是，很多时候确实有声明为只读数组的需求，即不允许变动数组成员。
//TypeScript 允许声明只读数组，方法是在数组类型前面加上readonly关键字。
const arry: readonly number[] = [0, 1];

arry[1] = 2; // 报错
arry.push(3); // 报错
delete arry[0]; // 报错
//那就不能对数组做任何的修改。


//只读是父类型，不能赋值给子类型
//子类型的方法比父类型多
let a1: number[] = [0, 1];
let a2: readonly number[] = a1; // 正确

a1 = a2; // 报错


//这个例子中也可以体现。
function getSum(s: number[]) {
    // ...
}

const arr: readonly number[] = [1, 2, 3];

getSum(arr); // 报错
//arr是只读父类型，不能作为s的实参

//关键字readonly不能跟泛型写在一起
const test: readonly Array<number> = [1, 2, 3]

//实际上，TypeScript 提供了两个专门的泛型，用来生成只读数组的类型。
const s1: ReadonlyArray<number> = [0, 1];

const s2: Readonly<number[]> = [0, 1];


//只读数组还有一种声明方法，就是使用“const 断言”。
const asdf = [0, 1] as const; 6
asdf[0] = [2]; // 报错

