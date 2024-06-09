//unknow可以解决any的数据污染的问题


//unkonw和any一样不受类型的限制
let v: unknown
v = 1;
v = true
v = []
v = {}
//you open your big eyes see see
//但是unknow不能赋值给除any和unknow的其他类型。

var n: string
var m: any
n = v
m = v
//unknow类型的变量不能访问属性和方法
let v1: unknown = { foo: 123 };
v1.foo; // 报错

let v2: unknown = "hello";
v2.trim(); // 报错

let v3: unknown = (n = 0) => n + 1;
v3(); // 报错

//所以unknow就是为了解决这个数据污染的问题。


//再次，unknown类型变量能够进行的运算是有限的，
//只能进行比较运算（运算符==、===、!=、!==、||、&&、?）
//、取反运算（运算符!）、typeof运算符和instanceof运算符这几种，
//其他运算都会报错。

let d: unknown = 1;

d + 1; // 报错
d === 1; // 正确