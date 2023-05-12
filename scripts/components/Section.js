export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._container = document.querySelector(containerSelector);
    this._initialCards = items;
    this.renderer = renderer
  }
//Создание начальных карточек из массива
  addCardArray() {
    this._initialCards.forEach(element => {
    this.addItem(this.renderer(element))
    }); 
  }
//Добавление каточки в нужный контейнер
  addItem(elementDom) {
    this._container.prepend(elementDom);
  }
}