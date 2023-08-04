// 3.Создай класс Calculator, который представляет собой калькулятор.
//  Калькулятор должен иметь методы для выполнения основных арифметических операций (сложение, вычитание, умножение, деление)
// а также метод, который принимает строку с примером (2*2, 3+3).
// Используй DOM для создания интерфейса и начни с примеров в одно действие, если получится сделай с несколькими

// const input = document.querySelector('.caclc__input');
// const result = document.querySelector('.cacl__result');
// const subtractBtn = document.querySelector('#subtract');
// const addBtn = document.querySelector('#add');
// const divisionBtn = document.querySelector('#division');
// const multiplicationBtn = document.querySelector('#multiplication');
// const equalBtn = document.querySelector('#equal');

const equalBtn = document.querySelector(".calc__action");
const result = document.querySelector(".calc__result");

class Calculator {
  constructor(inputSelector) {
    this.input = document.querySelector(inputSelector);
    this._updValue();
  }

  _updValue() {
    this.input.addEventListener("input", () => {
      let exceptions = /[-+*/]/;
      let split = this.input.value.split(exceptions);
      this.a = Number(split[0]);
      this.b = Number(split[1]);
      this.action = this.input.value.match(exceptions)[0];
    });
  }

  result() {
    let result;
    switch (this.action) {
      case "+":
        result = this.a + this.b;
        break;
      case "-":
        result = this.a - this.b;
        break;
      case "*":
        result = this.a * this.b;
        break;
      case "/":
        result = this.a / this.b;
        break;
    }
    return result;
  }
}

const calculator = new Calculator('#a');

equalBtn.addEventListener("click", () => {
  result.innerHTML = calculator.result();
});