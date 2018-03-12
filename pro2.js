function Person(name) {
    this.name = name
}

Person.prototype.Name = function(){
    console.log(this.name)
}

var p1 = new Person('yh')

p1.sayName = function() {
    alert(this.name)
}

console.log(p1._proto_ === Person.protype)
console.log(p1.constructor == Person)
console.log(Person.prototype.constructor == Person)

p1.sayName()
// p1 有name，sayName属性
p1.Name()
// p1没有Name属性，从它的_proto_（Person的prototype中查找）
p1.toString()
// p1没有toString属性，从它的_proto_（Person的prototype中查找），还没有toString(),从Person的_proto_(Object的prototype中查找)
// p1._proto_._proto_.toString()

var item;
for (item in p1) {
    // hasOwnPropertype可以屏蔽来自原型的属性
    // 浏览器的兼容问题
    if(p1.hasOwnProperty(item))
    console.log(item)
}

console.log(p1) // Person { name: 'yh', sayName: [Function] }