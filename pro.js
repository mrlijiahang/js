var obj = {}
var obj = new Object()

var arr = []
var arr = new Array()

function fn() {}
var Fn = new Function()

console.log(typeof arr) 
console.log(arr instanceof Array)
console.log(Object.prototype.toString.call(arr)=='[object Array]')

//引用类型有扩展性
obj._proto_
arr._proto_
Fn._proto_
// 所有引用类型，都有_proto_（隐形原型）属性，属性值是一个普通对象

fn.protype
// 所有函数，都有prototype（显形原型）属性，属性值是一个普通对象

obj._proto_ === Object.protype
// 所有引用类型的_proto_属性值指向它构造函数的protype的属性值

//对象中没有某个属性时，会找它的_proto_(它构造函数的protype)中寻找