# Проект: "Mesto"

### __Обзор проекта__
Мой проект - интерактивное приложение, созданное для обмена фотографиями и редактирования собственного профиля (прекрасная замена Instagram). 
На данный момент мы можем лишь либо сами добавлять фотографии, либо смотрять на добавненные фотографии других, оценивать карточки и приближать изображения.
Для создания сайта использовалось множество иструментов, например:
1. HTML 
2. CSS
3. Формы
4. JS, который помогает вносить изменение на сайт с помощью форм.


**Figma**

* [Ссылка на макет в Figma](https://www.figma.com/file/2cn9N9jSkmxD84oJik7xL7/JavaScript.-Sprint-4?node-id=0%3A1)


**GitHub Pages**

* [Ссылка на GitHub Pages](https://sofalis.github.io/mesto/)

export class Api {
    constructor(options){
        this._baseUrl = options.baseUrl
        this._headers = options.headers
    };
    
    //Загрузка информации о пользователе с сервера
    getUserInfo() { 
        return fetch(`${this._baseUrl}/users/me`, { 
            headers: this._headers
        })

            .then((res) => {
            return this._testStatus(res)
            }) 
    };

    //Загрузка карточек с сервера 
    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: this._headers
        })

        .then((res) => {
            return this._testStatus(res)
          })
    };

    //Редактирование профиля
    editProfile(data) {
        return fetch(`${this._baseUrl}/users/me`,
        {
            method: 'PATCH',  
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                about: data.about
            })
        })
        .then((res) => {
            return this._testStatus(res)
          })
    };

    //Добавление новой карточки
    addCard (data) {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'POST',  
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                link: data.link
            })
        })

        .then((res) => {
            return this._testStatus(res)
          })
    };

    //Редактирование аватара
    editAvatar(data) {
        return fetch(`${this._baseUrl}/users/me/avatar`, 
        {
            method: 'PATCH',  
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.avatar
            })
        })
        .then((res) => {
            return this._testStatus(res)
        })
    };

    //Удаление
    deleteCard(cardId) {
        return fetch(`${this._baseUrl}cards/${cardId}`, { 
          method: 'DELETE', 
          headers: this._headers,
        })
        .then((res) => {
            return this._testStatus(res)
        })
    };

    //Постановка лайка
    like(cardId) {
        return fetch(`${this._baseUrl}cards/${cardId}/likes`, { 
          method: 'PUT', 
          headers: this._headers,
        })
        .then((res) => {
            return this._testStatus(res)
        }) 
    };

    //Удаление лайка
    dltLike(cardId) {
        return fetch(`${this._baseUrl}cards/${cardId}/likes`, { 
            method: 'DELETE', 
            headers: this._headers,
          })
          .then((res) => {
              return this._testStatus(res)
          })
    };

    //Проверяем на ошибку
    _testStatus(res) {
        if (res.ok) { 
            return res.json();
        }
        return Promise.reject(`${res}`);
    }

}
