// 1. Написать функцию randint(a, b), которая вернёт случайное ЦЕЛОЕ число от a до b

function randInt(a, b) {
  let numbers = [];
  for (let i = a + 1; i < b; i++) {
    numbers.push(i);
  }
  console.log(numbers[Math.floor(Math.random() * numbers.length)]); // чтобы округлить к меньшему
  return numbers[Math.ceil(Math.random() * (numbers.length - 1))]; // чтобы округлить к большему
}

console.log(randInt(-1, 5));
