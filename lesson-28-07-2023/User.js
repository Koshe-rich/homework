// Написать класс User, в конструкторе которого будут:
// обязательные поля - login, password
// необязательные - firstname, lastname
// определить методы:
// info(), который возвращает всю информацию об объекте, кроме пароля
// login(password), который если вводится верный пароль меняет внутреннее свойство isLoggined на true, а если неверный то возвращает false
// logout(), который просто меняет isLoggined на false
// От этого класса отнаследовать класс Admin, у которого будет метод showUser(user), который бы возвращал полную информацию о пользователе, включая пароль

class User {
  constructor (password, login, firstname = false, lastname = false) {
    this.login = login;
    this._password = password;
    this.firstname = firstname;
    this.lastname = lastname;
    this.isLogin = false;
  };
  info() {
    return {
      login: this.login,
      firstname: this.firstname,
      lastname: this.lastname
    };
  };
  signIn(password) {
    if (password == this._password) {
      this.isLogin = true;
      return true;
    }
    return false;
  };
  signOut() {
    this.isLogin = false;
  }
}

class Admin extends User {
  showUser(user) {
    return {
      login: user.login,
      firstname: user.firstname,
      lastname: user.lastname,
      password: user._password
    }
  }
}

let newUser = new User('qwerty', 'test');

let newAdmin = new Admin('fghj', 'fghjk');

console.log(newAdmin.showUser(newUser));