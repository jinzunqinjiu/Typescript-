## TypeScript 的 symbol 类型
Symbol 是 ES2015 新引入的一种原始类型的值。它类似于字符串，但是每一个 Symbol 值都是独一无二的，与其他任何值都不相等。

- Symbol 值通过Symbol()函数生成。在 TypeScript 里面，Symbol 的类型使用symbol表示。

## unique symbol
symble类型包含所有的symbol类型，无法表示某一个类型，像值类型，因为symbol类型没有字面量只能通过变量。如果我们要进一步缩小它的范围确定为某一个值ts当中有unique symbol类型。因为unique symbol表示单个值，所以这个类型的变量是不能修改值的，只能用const命令声明，不能用let声明。

- const命令为变量赋值 Symbol 值时，变量类型默认就是unique symbol，所以类型可以省略不写。

- 每个声明为unique symbol类型的变量，它们的值都是不一样的，其实属于两个值类型

- unique symbol类似于字符串，所以可以参考值类型来理解unique symbol。

- 由于两个unique symbol 是两个类型，就不能把一个赋值给另一个。如果要分配值，那么要用typeof分获取类型

- 相同参数的Symbol.for()方法会返回相同的 Symbol 值。TypeScript 目前无法识别这种情况，所以可能出现多个 unique symbol 类型的变量，等于同一个 Symbol 值的情况。

- unique symbol 类型是 symbol 类型的子类型，所以可以将前者赋值给后者，但是反过来就不行。我们前面提过子类型可以分配父类型，但是父类型不能分配给子类型。

- unique symbol 类型的一个作用，就是用作属性名，这可以保证不会跟其他属性名冲突。如果要把某一个特定的 Symbol 值当作属性名，那么它的类型只能是 unique symbol，不能是 symbol。这里就是讲的unique symbol的作用。

- unique symbol类型也可以用作类（class）的属性值，但只能赋值给类的readonly static属性。

## 类型推断
如果变量声明时没有给出类型，TypeScript 会推断某个 Symbol 值变量的类型。
- let命令声明的变量，推断类型为 symbol。
