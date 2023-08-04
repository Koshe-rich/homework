class Rectangle { // Набор свойств и методов , описывающих будущие объекты (шаблон)
  constructor (a, b) {
    this.a = a;
    this.b = b;
    console.log(`Прямоугольник со сторонами ${a} и ${b} создан`);
  };
  s() {
    return this.a * this.b;
  };
  p() {
    return (this.a + this.b) * 2;
  };
}

class Square extends Rectangle {
  constructor(a) {
    super(a, a);
  }
}

let newRectangle = new Square(5);

console.log(newRectangle.s());
console.log(newRectangle.p());

