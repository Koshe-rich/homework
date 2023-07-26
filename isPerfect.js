// 2. Написать функцию isPerfect(n), которая вернёт true, если число совершенное
// (число является совершенным, если сумма его делителей равно ему самому, например 6 = 1+2+3, 28=1+2+4+7+14)

function isPerfect(n) {
  let summ = 0;
  for (let devisor = 1; devisor <= n / 2; devisor++) {
    if (n % devisor == 0) {
      summ += devisor;
    }
  }
  if (summ == n) {
    return true;
  }
  return false;
}

console.log(isPerfect(8128)); // true
console.log(isPerfect(28)); // true
console.log(isPerfect(496)); // true
console.log(isPerfect(6)); // true
console.log(isPerfect(7)); // false
console.log(isPerfect(500)); // false
