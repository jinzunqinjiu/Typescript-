## TypeScript 的数组类型
JavaScript 数组在 TypeScript 里面分成两种类型，分别是数组（array）和元组（tuple）。

## 数组类型
- TypeScript 数组有一个根本特征：所有成员的类型必须相同，但是成员数量是不确定的，可以是无限数量的成员，也可以是零成员。
数组有两种写法
- 在类型后面加[]
- 使用使用 TypeScript 内置的 Array 接口。
let arr: Array<number> = [1, 2, 3];
let arr: Array<number | string>;

- 数组类型声明了以后，成员数量是不限制的，任意数量的成员都可以，也可以是空数组。数组成员可以动态变化。
- 正是由于成员数量可以动态变化，所以 TypeScript 不会对数组边界进行检查，越界访问数组并不会报错。
- TypeScript 允许使用方括号读取数组成员的类型。

## 数组的类型推断
如果数组变量没有声明类型，TypeScript 就会推断数组成员的类型。这时，推断行为会因为值的不同，而有所不同。这一点跟ts的类型判断并无任何出入。

## 只读数组，const 断言
- 在js当中const声明的数组是可以被修改的
- 但是，很多时候确实有声明为只读数组的需求，即不允许变动数组成员。
TypeScript 允许声明只读数组，方法是在数组类型前面加上readonly关键字。


## TypeScript 将readonly number[]与number[]视为两种不一样的类型，后者是前者的子类型。

这是因为只读数组没有pop()、push()之类会改变原数组的方法，所以number[]的方法数量要多于readonly number[]，这意味着number[]其实是readonly number[]的子类型。
子类型可以赋值给父类型，而父类型不能赋值给子类型。

## 注意，readonly关键字不能与数组的泛型写法一起使用。
