//学习一下symbol类型
//Symbol 值通过Symbol()函数生成。在 TypeScript 里面，Symbol 的类型使用symbol表示。
let sym: symbol = Symbol()
let sym2: symbol = Symbol()
console.log(sym == sym2);
//由此看出symbol的值是独一无二的。


//unique symbol只能用const因为不能修改。
const sym3: unique symbol = Symbol(3)
let sym4: unique symbol = Symbol(4)

//const命令为变量赋值 Symbol 值时，变量类型默认就是unique symbol，所以类型可以省略不写。
const sym5 = Symbol()

//每个声明为unique symbol类型的变量，它们的值都是不一样的，其实属于两个值类型
const sym6: unique symbol = Symbol()
const sym7: unique symbol = Symbol()
sym6 === sym7//报错，看一下啊报什么错呢？

//用字符串的值类型来理解unique symbol
const strs: "hello" = "hello";
const strs2: "world" = "world";
strs === strs2; // 报错
//上面示例中，变量a和b都是字符串，但是属于不同的值类型，不能使用严格相等运算符进行比较。

//而且，由于变量sym8和sym9是两个类型，就不能把一个赋值给另一个。要赋值的话用typeof获取类型。
const sym8: unique symbol = Symbol()
// const sym9: unique symbol = sym8//报错
const sym9: typeof sym8 = sym8

//相同参数的Symbol.for()方法会返回相同的 Symbol 值。TypeScript 目前无法识别这种情况，所以可能出现多个 unique symbol 类型的变量，等于同一个 Symbol 值的情况。
const sym10: unique symbol = Symbol.for('1111')
const sym11: unique symbol = Symbol.for('1111')
//上面示例中，变量a和b是两个不同的值类型，但是它们的值其实是相等的。

//子类型可以分配给父类型，但是父类型不能分配给子类型
const sym12: unique symbol = Symbol();

const sym13: symbol = sym12; // 正确

const sym14: unique symbol = sym13; // 报错

//unique symbol的作用就是当作属性名来用，并且只能用unique symbol类型
const x: unique symbol = Symbol();
const y: symbol = Symbol();

interface Foo {
    [x]: string; // 正确
    [y]: string; // 报错
}


//unique symbol类型也可以用作类（class）的属性值，但只能赋值给类的readonly static属性。
class C {
    static readonly foo: unique symbol = Symbol();
}
//并且static 和readonly缺一不可。
//类型判断
let sym15 = Symbol()//symbol
const sym16 = Symbol()//unique symbol
const sym17 = sym16//symbol
let sym18 = sym16//symbol
//这个很好理解，因为子类型和同类型才能分配给父类型或同类型，所以被推断为父类型。不得不说十分的强大。
//所以，今天的ts的学习就到此为止了，我学到的就是unique symbol的用处，我感觉收获很大。

