// 原型链继承
// function F1 (name) {
//   this.name = name
// }
// F1.prototype.changeLife = function () {
//   console.log('life constraints my imagination')
// }
// function F2 (color) {
//   this.color = color
// }
// F2.prototype = new F1('张三')
// F2.prototype.constructor = F2
// const f2 = new F2('red')
// console.log(f2.name)

// 借用构造函数实现继承
// function F1 (name) {
//   this.name = name
// }
// F1.prototype.changeLife = function () {
//   console.log('life constraints my imagination')
// }
// function F2 (color, name) {
//   this.color = color
//   F1.call(this, name)
// }
// const f2 = new F2('red', 'sky')
// f2.changeLife()// 父类原型链上定义的方法  子类是不可见的  方法只能定义在构造函数中， 方法也不可复用

// 3.组合继承
// function F1 (name) {
//   this.name = name
// }
// F1.prototype.changeLife = function () {
//   console.log('life constraints my imagination')
// }
// function F2 (color, name) {
//   this.color = color
//   F1.call(this, name)
// }
// F2.prototype = new F1('001')
// F2.prototype.constructor = F2
// F2.prototype.session = function () {
//   console.log('二代弟子')
// }
// const f1 = new F1('一代')
// const f2 = new F2('二代')
//
// f2.session()
// f2.changeLife()
// f1.changeLife()
// f1.session() // 无法使用子类的原型上的方法 子类原型上定义的方法无法影响父类

// 4.寄生组合继承
function F1 (name) {
  this.name = name
}
F1.prototype.changeLife = function () {
  console.log('life constraints my imagination')
}
function F2 (color, name) {
  this.color = color
  F1.call(this, name)
}
(function () {
  const Temp = function () {}
  Temp.prototype = F1.prototype
  F2.prototype = new Temp()
  F2.prototype.constructor = F2
})()
const f2 = new F2('goushi', 'lese')
f2.changeLife()
console.log(f2.name)
