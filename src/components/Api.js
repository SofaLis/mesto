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
                title: data.title,
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