// 1. Написать функцию randint(a, b), которая вернёт случайное ЦЕЛОЕ число от a до b

// function randInt(a, b) {
//   let numbers = [];
//   // for (let i = a + 1; i < b; i++) {
//   //   numbers.push(i);
//   //   console.log(numbers);
//   // }
//   // console.log(numbers[Math.floor(Math.random() * numbers.length)]); // чтобы округлить к меньшему
//   return Math.ceil(Math.random()* (b - a) + a); // чтобы округлить к большему
// }
const randint = (a, b = false) =>  Math.ceil(b ? Math.random() * (b - a) + a : Math.random() * a);

console.log(randint(-1, 5));


console.log(randint(20, 100))//20-100
console.log(randint(50)) //0-50

// console.log(Math.trunc(-9.9)); // trunc отрезает дробную часть
// console.log(Math.floor(-9.9));

// console.log(Math.ceil(Math.random()* (b - a) + a))