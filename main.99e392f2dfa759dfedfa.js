!function(){"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var n=function(){function n(e,r){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),t(this,"_showInputError",(function(e,t){var n=o._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(o._inputErrorClass),n.classList.add(o._errorClassActive),n.textContent=t})),t(this,"_hideInputError",(function(e){var t=o._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(o._inputErrorClass),t.classList.remove(o._errorClassActive),t.textContent=""})),t(this,"_checkInputValidity",(function(e){e.validity.valid?o._hideInputError(e):o._showInputError(e,e.validationMessage)})),t(this,"setEventListeners",(function(){o._toggleButtonState(o._inputList,o._buttonElement),o._inputList.forEach((function(e){e.addEventListener("input",(function(){o._checkInputValidity(e),o._toggleButtonState(o._inputList,o._buttonElement)}))}))})),t(this,"_toggleButtonState",(function(){o._hasInvalidInput()?(o._buttonElement.classList.add(o._inactiveButtonClass),o._buttonElement.disabled=!0):(o._buttonElement.classList.remove(o._inactiveButtonClass),o._buttonElement.disabled=!1)})),t(this,"_hasInvalidInput",(function(){return o._inputList.some((function(e){return!e.validity.valid}))})),this._formElement=r,this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClassActive=e.errorClassActive,this._errorClass=e.errorClass,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector)}var r,o;return r=n,(o=[{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(this._inputList,this._buttonElement),this._inputList.forEach((function(t){e._hideInputError(t)}))}}])&&e(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),n}(),r=document.querySelector(".popup_user"),o=document.querySelector(".popup_cards"),i=document.querySelector(".popup_image"),a=document.querySelector(".popup_avatar"),c=document.querySelector(".popup__item_name"),u=document.querySelector(".popup__item_job"),l=document.querySelector(".profile__name"),s=document.querySelector(".profile__status"),f=(r.querySelector(".popup__close-button"),document.querySelector(".profile__edit-button")),p=document.querySelector(".profile__add-button"),h=(o.querySelector(".popup__item_card_name"),o.querySelector(".popup__item_card_link"),i.querySelector(".popup__name"),o.querySelector(".popup__form_card"),document.querySelector(".popup__image"),document.querySelector(".elements"),document.querySelector(".profile__avatar")),d=document.querySelector(".profile__avatar_hover"),_={formSelector:".popup__form",inputSelector:".popup__item",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_disabled",inputErrorClass:"popup__item_type_error",errorClassActive:"popup__input-error_active",errorClass:"popup__input-error"};function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var v=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupSelector=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this),this._closeOverlay=this._closeOverlay.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupSelector.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupSelector.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_closeOverlay",value:function(e){e.target===e.currentTarget&&this.close()}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popupSelector.querySelector(".popup__close-button").addEventListener("click",(function(){return e.close()})),this._popupSelector.addEventListener("click",(function(t){return e._closeOverlay(t)}))}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=g(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},k.apply(this,arguments)}function g(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}function S(e,t){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},S(e,t)}function C(e,t){if(t&&("object"===b(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&S(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(r);if(o){var n=w(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return C(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._namePopup=document.querySelector(".popup__name"),t._imgBig=document.querySelector(".popup__image"),t}return t=a,(n=[{key:"open",value:function(e){var t=e.title,n=e.link;k(w(a.prototype),"open",this).call(this),this._imgBig.src=n,this._imgBig.alt=t,this._namePopup.textContent=t}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(v);function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=P(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},j.apply(this,arguments)}function P(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=R(e)););return e}function I(e,t){return I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},I(e,t)}function q(e,t){if(t&&("object"===O(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function R(e){return R=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},R(e)}var T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&I(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=R(r);if(o){var n=R(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return q(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._callbackForm=t,n._formCard=n._popupSelector.querySelector(".popup__form"),n._inputList=n._formCard.querySelectorAll(".popup__item"),n._submitButton=n._formCard.querySelector(".popup__submit-button"),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._obj={},Array.from(this._inputList).forEach((function(t){e._obj[t.name]=t.value})),this._obj}},{key:"setEventListeners",value:function(){var e=this;j(R(a.prototype),"setEventListeners",this).call(this),this._formCard.addEventListener("submit",(function(t){t.preventDefault(),e._callbackForm(e._getInputValues()),e.close()}))}},{key:"close",value:function(){j(R(a.prototype),"close",this).call(this),this._formCard.reset()}},{key:"renderLoading",value:function(e){this._submitButton.textContent=e?"Сохранение...":"Сохранить"}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(v);function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var A=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.elementName=t,this.elementInfo=n,this._avatar=r}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this.elementName.textContent,job:this.elementInfo.textContent,avatar:this._avatar.src}}},{key:"setUserInfo",value:function(e){this.elementName.textContent=e.nameInput,this.elementInfo.textContent=e.jobInput}},{key:"addAvatar",value:function(e){this._avatar.src=e.avatarInput}},{key:"id",value:function(e){this._id=e}}])&&B(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var U=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=r,this._renderer=o,this._containerSelector=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._containerSelector.append(e)}},{key:"rendererOne",value:function(){var e=this;this._items.forEach((function(t){return e._renderer(t)}))}}])&&x(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var N=function(){function e(t,n,r){var o,i,a=this,c=t.item,u=t.handleCardClick,l=t.handleLikeClick,s=t.handleDeleteIconClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i=function(e){a._likes=e.likes,a._btnLickNum.textContent=a._likes.length,a._elementLike.classList.toggle("element__button_active")},(o="like")in this?Object.defineProperty(this,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):this.like=i,this._link=c.link,this._title=c.title,this._alt=c.alt,this._ownerid=c.owner._id,this._likes=c.likes,this._Id=c._id,this._cardSelector=r,this._handleCardClick=u,this._handleLikeClick=l,this._handleDeleteIconClick=s,this._userId=n}var t,n;return t=e,(n=[{key:"isLiked",value:function(){var e=this;return this._likes.some((function(t){return t._id===e._userId}))}},{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_checkClickheart",value:function(){this._likebtn=this._elementCard.querySelector(".element__button"),this._isLiked()?this._likebtn.classList.add("element__button_active"):this._likebtn.classList.remove("element__button_active")}},{key:"_checkIdcard",value:function(){this._ownerId!==this._userId?this._eltmentDelete.classList.add("element__delete_opracity"):this._eltmentDelete.classList.remove("element__delete_opracity")}},{key:"_setEventListeners",value:function(){var e=this;this._btnLickNum.textContent=this._likes.length,this._likebtn.addEventListener("click",(function(){e._clickheart(e._likebtn)})),this._deletbtn.addEventListener("click",(function(){e._deleteCard(e._elementCard)})),this._imgCard.addEventListener("click",(function(){e._handleCardClick({title:e._title,link:e._link})}))}},{key:"getNewCard",value:function(){return this._elementCard=this._getTemplate(),this._imgCard=this._elementCard.querySelector(".element__image"),this._titleCard=this._elementCard.querySelector(".element__name"),this._deletbtn=this._elementCard.querySelector(".element__delete"),this._btnLickNum=this._elementCard.querySelector(".element__like"),this._likebtn=this._elementCard.querySelector(".element__button"),this._setEventListeners(),this._btnLickNum.textContent=this._likes.length,this._imgCard.src=this._link,this._imgCard.alt=this._title,this._titleCard.textContent=this._title,this._checkClickheart(),this._checkIdcard(),this._elementCard}},{key:"deleteCard",value:function(){this._elementCard.remove(),this._elementCard=null}},{key:"returnId",value:function(){return this._Id}}])&&D(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function V(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var F=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(t){return e._testStatus(t)}))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(t){return e._testStatus(t)}))}},{key:"editProfile",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return t._testStatus(e)}))}},{key:"addCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({title:e.title,link:e.link})}).then((function(e){return t._testStatus(e)}))}},{key:"editAvatar",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatarInput})}).then((function(e){return t._testStatus(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._testStatus(e)}))}},{key:"like",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then((function(e){return t._testStatus(e)}))}},{key:"dltLike",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then((function(e){return t._testStatus(e)}))}},{key:"_testStatus",value:function(e){return e.ok?e.json():Promise.reject("".concat(e))}}])&&V(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function J(e){return J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},J(e)}function H(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function M(){return M="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=z(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},M.apply(this,arguments)}function z(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=K(e)););return e}function $(e,t){return $=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},$(e,t)}function G(e,t){if(t&&("object"===J(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function K(e){return K=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},K(e)}var Q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&$(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=K(r);if(o){var n=K(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return G(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._formCard=document.querySelector(".popup_delete"),t._submitButton=t._formCard.querySelector(".popup__submit-button"),t}return t=a,(n=[{key:"setEventListeners",value:function(){var e=this;M(K(a.prototype),"setEventListeners",this).call(this),this._formCard.addEventListener("submit",(function(t){t.preventDefault(),e.callbackForm(),e.close()}))}},{key:"setFormSubmit",value:function(e){this.callbackForm=e}},{key:"renderLoading",value:function(e){this._buttonSubmit.textContent=e?"Сохранение...":"Да"}}])&&H(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(v);function W(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var X=new n(_,r);X.setEventListeners();var Y=new n(_,o);Y.setEventListeners();var Z=new n(_,a);Z.setEventListeners();var ee=new F({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-44",headers:{authorization:"716a14ac-2e8b-4ac9-86a9-ffe832dc7936","Content-Type":"application/json"}}),te=new A(l,s,h),ne=new T(".popup_user",(function(e){ne.renderLoading(!0),ee.editProfile({name:e.name,about:e.about}).then((function(e){te.setUserInfo(e)})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){ne.renderLoading(!1)}))}));ne.setEventListeners(),f.addEventListener("click",(function(){var e=te.getUserInfo();c.value=e.name,u.value=e.job,X.resetValidation(),ne.open()}));var re=new T(".popup_avatar",(function(e){re.renderLoading(!0),ee.editAvatar({avatar:e.avatarInput}).then((function(e){te.addAvatar(e)})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){re.renderLoading(!1)}))}));re.setEventListeners(),d.addEventListener("click",(function(){Z.resetValidation(),re.open()}));var oe=new E(".popup_image");oe.setEventListeners();var ie=new Q(".popup_delete");ie.setEventListeners();var ae=new T(".popup_cards",(function(e){ae.renderLoading(!0),ee.addCard({title:e.title,link:e.link}).then((function(e){var t=ce(e);ue.rendererOne(t)})).then((function(){ae.close()})).catch((function(e){console.log("ошибка ".concat(e))})).finally((function(){ae.renderLoading(!1)}))}));function ce(e){var t=new N({item:e,handleCardClick:function(){return function(e){oe.open(e)}(e)},handleLikeClick:function(e){return function(e){e.isLiked()?ee.dltLike(e.returnId()).then((function(t){e.like(t)})).catch((function(e){console.log("".concat(e))})):ee.like(e.returnId()).then((function(t){e.like(t)})).catch((function(e){console.log("".concat(e))}))}(e)},handleDeleteIconClick:function(e){return function(e){ie.open(),ie.setFormSubmit((function(){ie.renderLoading(!0),ee.deleteCard(e).then((function(t){ie.close(),e.deleteCard(t)})).catch((function(e){console.log("".concat(e))})).finally((function(){ie.renderLoading(!1)}))}))}(e)}},te.id(),".template");return t.getNewCard()}ae.setEventListeners();var ue=new U({items:[],renderer:function(e){var t=ce(e);ue.addItem(t)}},".elements");p.addEventListener("click",(function(){console.log("gad"),Y.resetValidation(),ae.open()})),Promise.all([ee.getUserInfo(),ee.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return W(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?W(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];o._id,te.setUserInfo(o),te.addAvatar(o),ue.rendererOne(i)})).catch((function(e){console.log("".concat(e))}))}();