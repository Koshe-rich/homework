// // 2. Создай класс Gallery для галереи изображений.
// // Галерея должна содержать массив изображений и методы для добавления новых изображений, 
// отображения следующего и предыдущего изображения,
// // а также для удаления изображения из галереи. 
// Каждое изображение должно представлять из себя ссылку на изображение из интернета.
// // Далее на основе данного класса реализовать галерею в HTML

const persons = [
  {
    link: 'http://turgenevmus.ru/wp-content/uploads/2021/04/Pasternak_1.jpg',
    name: 'Рахманинов'
  },
  {
    link: 'https://1001.ru/media/uploads/bpo9ws3u2kyh8qa5.jpg',
    name: 'Петр Чайковский'
  },
  {
    link: 'https://mc.eduirk.ru/media/k2/items/cache/b91efef676508293ea0d75d32faa3a0f_XL.jpg',
    name: 'Владимир Набоков'
  }
];



class Gallery {
  constructor (...images) {
    this.images = images;
    this.index = 0;
  }
  addImage(img) {
    this.images.push(img);
  }
  current() {
    let img = this.images[this.index];
    return `<img src="${img}">`;
  }
  
  next() {
    if (this.index >= this.images.length - 1) {
      this.index = 0;
    } else {
      this.index++;
    }
  }
  
  prev() {
    if (this.index === 0) {
      this.index = this.images.length - 1;
    } else {
      this.index--;
    }
  }
}

const gallery = new Gallery(...persons.map((person) => person.link))

const currentImg = document.querySelector('.current-img');
const nextBtn = document.querySelector('#next-btn');
const prevBtn = document.querySelector('#prev-btn');

console.log(gallery.current());

currentImg.innerHTML = gallery.current();

console.log(gallery.current());
nextBtn.addEventListener('click', () => {
  gallery.next();
  currentImg.innerHTML = gallery.current();
})

prevBtn.addEventListener('click', () => {
  gallery.prev();
  currentImg.innerHTML = gallery.current();
})



