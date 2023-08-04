const input = document.querySelector("#inputfield");
const btn = document.querySelector("#btn");
const simbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const splitSimbols = simbols.split("");

// const randint = (a, b = false) =>  Math.ceil(b ? Math.random() * (b - a) + a : Math.random() * a);

function randomIndex(arr) {
  let index = Math.floor(Math.random() * arr.length);
  return index;
}



let isRandomIndex = randomIndex(splitSimbols);
console.log(isRandomIndex);
console.log(splitSimbols[isRandomIndex]);

function checkMatch() {
  let letter = input.value;
  let letterIndex = splitSimbols.indexOf(letter);
  if (input.value == "") {
    alert(
      "Нужно ввести любую букву из английского алфавита в верхнем регистре"
    );
    return
  }
  if (letterIndex == isRandomIndex) {
    alert("Шок, ты угадал! Перезагрузи страницу, чтобы сыграть еще раз.");
    input.value = "";
  } else if (letterIndex < isRandomIndex) {
    alert("Не угадал, буква находится правее");
    input.value = "";
  } else if (letterIndex > isRandomIndex) {
    alert("Не угадал, буква находится левее");
    input.value = "";
  }
}

btn.addEventListener("click", () => {
  checkMatch();
});
