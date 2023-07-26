// Написать функцию makeHTML(users), которая вернет массив только тех, кто старше 30 и у кого баланс выше $2500
let users = [
  {
    balance: "$3,946.45",
    picture: "http://placehold.it/32x32",
    age: 23,
    name: "Bird Ramsey",
    gender: "male",
    company: "NIMON",
    email: "birdramsey@nimon.com",
  },
  {
    balance: "$2,499.49",
    picture: "http://placehold.it/32x32",
    age: 31,
    name: "Lillian Burgess",
    gender: "female",
    company: "LUXURIA",
    email: "lillianburgess@luxuria.com",
  },
  {
    balance: "$2,820.18",
    picture: "http://placehold.it/32x32",
    age: 34,
    name: "Kristie Cole",
    gender: "female",
    company: "QUADEEBO",
    email: "kristiecole@quadeebo.com",
  },
  {
    balance: "$3,277.32",
    picture: "http://placehold.it/32x32",
    age: 30,
    name: "Leonor Cross",
    gender: "female",
    company: "GRONK",
    email: "leonorcross@gronk.com",
  },
  {
    balance: "$1,972.47",
    picture: "http://placehold.it/32x32",
    age: 28,
    name: "Marsh Mccall",
    gender: "male",
    company: "ULTRIMAX",
    email: "marshmccall@ultrimax.com",
  },
];

function makeHTML(users) {
  let newArr = [];
  let regExp = /[$,.]/g;
  for (let user = 0; user < users.length; user++) {
    let balanceWithoutSimbol = users[user].balance.replace(regExp, "");
    let age = users[user].age;
    if (age > 30 && balanceWithoutSimbol > 250000) {
      newArr.push(users[user]);
    }
  }
  return newArr;
}

console.log(makeHTML(users));
