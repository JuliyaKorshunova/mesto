export default class Section {
  constructor(renderer, containerSelector) {
    this._container = document.querySelector(containerSelector);
    // this._initialCards = items;
    this._renderer = renderer;
  }
//Создание начальных карточек из массива
  addCardArray(dataCard) {
    dataCard.forEach(element => {
    this._renderer(element)
    }); 
  }
//Добавление каточки в нужный контейнер
  addItemPrepend(elementDom) {
    this._container.prepend(elementDom);
  }

  addItemAppend(elementDom) {
    this._container.append(elementDom);
  }
}