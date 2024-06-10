//noolean类型
const x: boolean = true;
const y: boolean = false;
//布尔类型只有true和false两种类型。


//string类型
const str1: string = 'hellow'
const str2: string = `${str1}+world`
//字符串和模板字符串都属于string类型


//number类型
const num1: number = 123
const num2: number = 3.1415926
const num3: number = 0xffff
//整数小数和其他进制数都属于number类型。



//bigint类型
const bi: bigint = 123n
const bi2: bigint = 0xffffn
//bigint类型包含所有的大整数。

//bigint类型与number类型并不兼容
const nb: bigint = 123
const nb2: bigint = 3.14

//symbol类型
// const sy: symbol = Symbol(1)

//object 类型
const obj: object = { a: 123 }
const obj2: object = [1, 2, 3, 4]
const obj3: object = (a: string) => a

//undifined和null类型
//undefined和null是两种独立类型

let ud: undefined = undefined
//undefined表示未定义，表示现在未定义，后续可能会定义

let nu: null = null
//null 类型也只包含一个值null，表示为空（即此处没有值）。

//如果没有声明类型的变量，被赋值为undefined或null，它们的类型会被推断为any。
let ud1 = undefined//any
let nu2 = null//any
//const声明也是一样的。
//如果希望避免这种情况，则需要打开编译选项strictNullChecks



//包装对象类型
//boolean，string，number，bigint，symbol都有对应得包装对象。即在需要得时候，会自动产生对象，
"hello".charAt(1); // 'e'
// 从这个例子可以看出，字符串hellow调用了chatAT方法，而对象才能方法，之所以能运行是
// 因为自动转成了包装对象。

//Boolean()，String()，Number()以上三个构造函数，执行后可以直接获取某个原始类型值得包装
//对象symbol 类型和 bigint 类型无法直接获取它们的包装对象（即Symbol()和BigInt()不能作为构造函数使用）

//注意，String()只有当作构造函数使用时（即带有new命令调用），
//才会返回包装对象。如果当作普通函数使用（不带有new命令），
//返回就是一个普通字符串。其他两个构造函数Number()和Boolean()也是如此。

//包装对象类型与字面量类型
//由于包装对象的存在，导致每一个原始类型的值都有包装对象和字面量两种情况
"hello"; // 字面量
new String("hello"); // 包装对象

// 为了区分这两种情况，TypeScript 对五种原始类型分别提供了大写和小写两种类型。

// Boolean 和 boolean
// String 和 string
// Number 和 number
// BigInt 和 bigint
// Symbol 和 symbol
//其中，大写类型同时包含包装对象和字面量两种情况，小写类型只包含字面量，不包含包装对象。
const s1: String = "hello"; // 正确
const s2: String = new String("hello"); // 正确

const s3: string = "hello"; // 正确
const s4: string = new String("hello"); // 报错

// 建议只使用小写类型，不使用大写类型。
// 因为绝大部分使用原始类型的场合，都是使用字面量，不使用包装对象。
// 而且，TypeScript 把很多内置方法的参数，定义成小写类型，使用大写类型会报错。
const n1: number = 1;
const n2: Number = 1;

Math.abs(n1); // 1
Math.abs(n2); // 报错

//Object 类型与 object 类型
//TypeScript 的对象类型也有大写Object和小写object两种。

//Object类型
//大写的Object类型代表了javascript语言里面的广义对象，所有可以转成对象的值，都是Object类型
//包含了除了null和undefind之外的所有值。
let object: Object;
object = true;
object = "hi";
object = 1;
object = { foo: 123 };
object = [1, 2];
object = (a: number) => a + 1;
object = undefined; // 报错
object = null; // 报错

//空对{}是Object类型的简写形式，所以常用{}代替
let object1: Object;
object1 = true;
object1 = "hi";
object1 = 1;
object1 = { foo: 123 };
object1 = [1, 2];
object1 = (a: number) => a + 1;
object1 = undefined; // 报错
object1 = null; // 报错

//object 类型
//小写的object类型代表 JavaScript 里面的狭义对象，
//即可以用字面量表示的对象，只包含对象、数组和函数，不包括原始类型的值。
let obja: object;

obja = { foo: 123 };
obja = [1, 2];
obja = (a: number) => a + 1;
obja = true; // 报错
obja = "hi"; // 报错
obja = 1; // 报错
//大多数时候，我们使用对象类型，只希望包含真正的对象，
//不希望包含原始类型。所以，建议总是使用小写类型object，不使用大写类型Object。

//注意，无论是大写的Object类型，还是小写的object类型，
//都只包含 JavaScript 内置对象原生的属性和方法，
//用户自定义的属性和方法都不存在于这两个类型之中
const o1: Object = { foo: 0 };
const o2: object = { foo: 0 };

o1.toString(); // 正确
o1.foo; // 报错

o2.toString(); // 正确
o2.foo; // 报错
//toString()是对象原生属性可以访问，foo是自己定义的，所以会报错
//所以Obejtct与object的区别就在范围

//undefined 和 null 的特殊性
// undefined和null既是值又是类型
// 作为值，它们有一个特殊的地方：任何其他类型的变量都可以赋值为undefined或null。
//因为它们属于子类型，可以赋值给父类型
let money: number = 24;
money = null; // 正确
money = undefined; // 正确
//但是我发现现在默认为严格模式,可以将"strictNullChecks": false


//值类型
//ypeScript 规定，单个值也是一种类型，称为“值类型”。
let l: "hello";

l = "hello"; // 正确
l = "world"; // 报错
//也就是说值也是一种类型，并且值也只能是这个值
//TypeScript 推断类型时，遇到const命令声明的变量，如果代码里面没有注明类型，就会推断该变量是值类型。
//其实也可以这么认为，毕竟const声明的变量不能修改，与js高度一致，所以我认为值类型是为const创立的

//注意，const命令声明的变量，如果赋值为对象，并不会推断为值类型。
// x 的类型是 { foo: number }
const o3 = { foo: 1 };

//值类型可能会出现一些很奇怪的报错。
const h: 5 = 4 + 1; // 报错
//因为number是父类型，5是子类型，父类型不能赋值给子类型。


//联合类型
//联合类型（union types）指的是多个类型组成的一个新类型，使用符号|表示。
//联合类型A|B表示，任何一个类型只要属于A或B，就属于联合类型A|B。
let x1: string | number;

x1 = 123; // 正确
x1 = "abc"; // 正确

//联合类型可以与值类型相结合，表示一个变量的值有若干种可能。
let setting: true | false;

let gender: "male" | "female";

let number: 1 | 2 | 3 | 4 | 5 | 6 | 7;

//前面提到，打开编译选项strictNullChecks后，其他类型的变量不能赋值为undefined或null。这时，如果某个变量确实可能包含空值，就可以采用联合类型的写法。
let name1: string | null;

name1 = "John";
name1 = null;

//如果一个变量有多种类型，读取该变量时，往往需要进行“类型缩小”（type narrowing），区分该值到底属于哪一种类型，然后再进一步处理。
function printId(id: number | string) {
    console.log(id.toUpperCase()); // 报错
}
//number上不存在toUpperCase()所以会出现报错
//所以要进行类型缩小，确定参数类型再进一步处理
function printId1(id: number | string) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    } else {
        console.log(id);
    }
}

//联合类型相当于类型放大，处理就要类型缩小，用switch也能进行类型缩小
function getPort(scheme: "http" | "https") {
    switch (scheme) {
        case "http":
            return 80;
        case "https":
            return 443;
    }
}

//交叉类型
//交叉类型（intersection types）指的多个类型组成的一个新类型，使用符号&表示。

//交叉类型A&B表示，任何一个类型必须同时属于A和B，才属于交叉类型A&B，
//即交叉类型同时满足A和B的特征。
let r: number & string;

//交叉类型的主要用途是表示对象的合成。
let ob: { foo: string } & { bar: string };

ob = {
    foo: "hello",
    bar: "world",
};
//即里面的值必须包含这两种属性


//type 命令
//type命令用来定义一个类型的别名。
type Age = number;

let age: Age = 55;
//别名可以让类型的名字变得更有意义，也能增加代码的可读性，还可以使复杂类型用起来更方便，便于以后修改变量的类型。
//别名不允许重名。
type Color = "red";
type Color = "blue"; // 报错

//别名的作用域是块级作用域。这意味着，代码块内部定义的别名，影响不到外部。
type Color2 = "red";

if (Math.random() < 0.5) {
    type Color2 = "blue";
}

//别名支持使用表达式，也可以在定义一个别名时，使用另一个别名，即别名允许嵌套。
type World = "world";
type Greeting = `hello ${World}`;
//type命令属于类型相关的代码，编译成 JavaScript 的时候，会被全部删除。

//typeof运算符
//JavaScript 语言中，typeof 运算符是一个一元运算符，返回一个字符串，代表操作数的类型。
//TypeScript 将typeof运算符移植到了类型运算，它的操作数依然是一个值，但是返回的不是字符串，而是该值的 TypeScript 类型。
const a = { x: 0 };

type T0 = typeof a; // { x: number }
type T1 = typeof a.x; // number

//同一段代码可能存在两种typeof运算符，一种用在值相关的 JavaScript 代码部分，另一种用在类型相关的 TypeScript 代码部分。
let a1 = 1;
let b: typeof a1;

if (typeof a === "number") {
    b = a;
}
//JavaScript 的 typeof 遵守 JavaScript 规则，TypeScript 的 typeof 遵守 TypeScript 规则。它们的一个重要区别在于，编译后，前者会保留，后者会被全部删除。
//由于编译时不会进行 JavaScript 的值运算，所以 TypeScript 规定，typeof 的参数只能是标识符，不能是需要运算的表达式。
type T = typeof Date(); // 报错

//另外，typeof命令的参数不能是类型。
type Age1 = number;
type MyAge = typeof Age1; // 报错
//typeof 是一个很重要的 TypeScript 运算符，有些场合不知道某个变量foo的类型，这时使用typeof foo就可以获得它的类型。

//类型的兼容
//TypeScript 的类型存在兼容关系，某些类型可以兼容其他类型。
type S = number | string;

let a6: number = 1;
let b6: S = a6;

//ypeScript 为这种情况定义了一个专门术语。如果类型A的值可以赋值给类型B，那么类型A就称为类型B的子类型（subtype）。在上例中，类型number就是类型number|string的子类型。

//TypeScript 的一个规则是，凡是可以使用父类型的地方，都可以使用子类型，但是反过来不行。
let a7: "hi" = "hi";
let b7: string = "hello";

b7 = a7; // 正确
a7 = b7; // 报错
//之所以有这样的规则，是因为子类型继承了父类型的所有特征，所以可以用在父类型的场合。但是，子类型还可能有一些父类型没有的特征，所以父类型不能用在子类型的场合。
//其实也可以说子类的范围更小，更精确，存在包含关系。