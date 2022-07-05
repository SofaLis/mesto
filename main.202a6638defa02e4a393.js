!function(){"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var n=function(){function n(e,r){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),t(this,"_showInputError",(function(e,t){var n=o._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(o._inputErrorClass),n.classList.add(o._errorClassActive),n.textContent=t})),t(this,"_hideInputError",(function(e){var t=o._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(o._inputErrorClass),t.classList.remove(o._errorClassActive),t.textContent=""})),t(this,"_checkInputValidity",(function(e){e.validity.valid?o._hideInputError(e):o._showInputError(e,e.validationMessage)})),t(this,"setEventListeners",(function(){o._toggleButtonState(o._inputList,o._buttonElement),o._inputList.forEach((function(e){e.addEventListener("input",(function(){o._checkInputValidity(e),o._toggleButtonState(o._inputList,o._buttonElement)}))}))})),t(this,"_toggleButtonState",(function(){o._hasInvalidInput()?(o._buttonElement.classList.add(o._inactiveButtonClass),o._buttonElement.disabled=!0):(o._buttonElement.classList.remove(o._inactiveButtonClass),o._buttonElement.disabled=!1)})),t(this,"_hasInvalidInput",(function(){return o._inputList.some((function(e){return!e.validity.valid}))})),this._formElement=r,this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClassActive=e.errorClassActive,this._errorClass=e.errorClass,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector)}var r,o;return r=n,(o=[{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(this._inputList,this._buttonElement),this._inputList.forEach((function(t){e._hideInputError(t)}))}}])&&e(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),n}(),r=document.querySelector(".popup_user"),o=document.querySelector(".popup_cards"),i=document.querySelector(".popup_image"),a=document.querySelector(".popup_avatar"),c=document.querySelector(".popup__item_name"),u=document.querySelector(".popup__item_job"),l=document.querySelector(".profile__name"),s=document.querySelector(".profile__status"),f=(r.querySelector(".popup__close-button"),document.querySelector(".profile__edit-button")),p=document.querySelector(".profile__add-button"),d=(o.querySelector(".popup__item_card_name"),o.querySelector(".popup__item_card_link"),i.querySelector(".popup__name"),o.querySelector(".popup__form_card"),document.querySelector(".popup__image"),document.querySelector(".elements"),document.querySelector(".profile__avatar")),h=document.querySelector(".profile__avatar-hover"),_={formSelector:".popup__form",inputSelector:".popup__item",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_disabled",inputErrorClass:"popup__item_type_error",errorClassActive:"popup__input-error_active",errorClass:"popup__input-error"};function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var m=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupElement=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this),this._closeOverlay=this._closeOverlay.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_closeOverlay",value:function(e){e.target===e.currentTarget&&this.close()}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popupElement.querySelector(".popup__close-button").addEventListener("click",(function(){return e.close()})),this._popupElement.addEventListener("click",(function(t){return e._closeOverlay(t)}))}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=g(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},k.apply(this,arguments)}function g(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}function C(e,t){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},C(e,t)}function S(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&C(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(r);if(o){var n=w(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return S(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._namePopup=document.querySelector(".popup__name"),t._imgBig=document.querySelector(".popup__image"),t}return t=a,(n=[{key:"open",value:function(e){var t=e.name,n=e.link;k(w(a.prototype),"open",this).call(this),this._imgBig.src=n,this._imgBig.alt=t,this._namePopup.textContent=t}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(m);function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=P(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},j.apply(this,arguments)}function P(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=R(e)););return e}function I(e,t){return I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},I(e,t)}function q(e,t){if(t&&("object"===L(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function R(e){return R=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},R(e)}var B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&I(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=R(r);if(o){var n=R(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return q(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._callbackForm=t,n._formCard=n._popupElement.querySelector(".popup__form"),n._inputList=n._formCard.querySelectorAll(".popup__item"),n._submitButton=n._formCard.querySelector(".popup__submit-button"),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._obj={},Array.from(this._inputList).forEach((function(t){e._obj[t.name]=t.value})),this._obj}},{key:"setEventListeners",value:function(){var e=this;j(R(a.prototype),"setEventListeners",this).call(this),this._formCard.addEventListener("submit",(function(t){t.preventDefault(),e._callbackForm(e._getInputValues())}))}},{key:"close",value:function(){j(R(a.prototype),"close",this).call(this),this._formCard.reset()}},{key:"renderLoading",value:function(e){this._submitButton.textContent=e?"Сохранение...":"Сохранить"}}])&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(m);function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var A=function(){function e(t,n,r,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.elementName=t,this.elementInfo=n,this._avatar=r,this._userId=null}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this.elementName.textContent,job:this.elementInfo.textContent,avatar:this._avatar.src}}},{key:"setUserInfo",value:function(e){this.elementName.textContent=e.name,this.elementInfo.textContent=e.about}},{key:"addAvatar",value:function(e){this._avatar.src=e.avatar,this._avatar.alt=e.name}},{key:"setId",value:function(e){this._userId=e._id}}])&&T(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var U=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._containerSelector=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._containerSelector.prepend(e)}},{key:"addItemServer",value:function(e){this._containerSelector.append(e)}},{key:"rendererOne",value:function(e){var t=this;e.forEach((function(e){return t._renderer(e)}))}}])&&x(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var N=function(){function e(t,n,r){var o=this,i=t.item,a=t.handleCardClick,c=t.handleLikeClick,u=t.handleDeleteIconClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._link=i.link,this._name=i.name,this._ownerid=i.owner._id,this._likes=i.likes,this._Id=i._id,this._cardSelector=r,this._handleCardClick=a,this._handleLikeClick=c,this._handleDeleteIconClick=u,this._userId=n,this._isLiked=this._likes.some((function(e){return e._id==o._userId}))}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_setEventListeners",value:function(){var e=this;this._likebtn.addEventListener("click",(function(){e._handleLikeClick()})),this._deletbtn.addEventListener("click",(function(){e._handleDeleteIconClick(e._Id)})),this._imgCard.addEventListener("click",(function(){e._handleCardClick({name:e._name,link:e._link})}))}},{key:"getNewCard",value:function(){return this._elementCard=this._getTemplate(),this._imgCard=this._elementCard.querySelector(".element__image"),this._nameCard=this._elementCard.querySelector(".element__name"),this._deletbtn=this._elementCard.querySelector(".element__delete"),this._btnLickNum=this._elementCard.querySelector(".element__like"),this._likebtn=this._elementCard.querySelector(".element__button"),this._likeNum=this._elementCard.querySelector(".element__like"),this._checkLike(),this._setEventListeners(),this._checkIdcard(),this._imgCard.src=this._link,this._imgCard.alt=this._name,this._nameCard.textContent=this._name,this._elementCard}},{key:"deleteCard",value:function(){this._elementCard.remove(),this._elementCard=null}},{key:"returnId",value:function(){return this._Id}},{key:"isLiked",value:function(){return this._isLiked}},{key:"addlike",value:function(){this._likebtn.classList.add("element__button_active"),this._btnLickNum.textContent=this._likes.length,this._isLiked=!0}},{key:"deletelike",value:function(){this._likebtn.classList.remove("element__button_active"),this._btnLickNum.textContent=this._likes.length,this._isLiked=!1}},{key:"countLike",value:function(e){this._likes=e,this._likeNum.textContent=this._likes.length}},{key:"_checkLike",value:function(){this._isLiked?this.addlike():this.deletelike()}},{key:"_checkIdcard",value:function(){this._ownerid!==this._userId?this._deletbtn.classList.add("element__delete_opracity"):this._deletbtn.classList.remove("element__delete_opracity")}}])&&D(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function V(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var F=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(t){return e._testStatus(t)}))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(t){return e._testStatus(t)}))}},{key:"editProfile",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return t._testStatus(e)}))}},{key:"addCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return t._testStatus(e)}))}},{key:"editAvatar",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then((function(e){return t._testStatus(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._testStatus(e)}))}},{key:"like",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then((function(e){return t._testStatus(e)}))}},{key:"dltLike",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then((function(e){return t._testStatus(e)}))}},{key:"_testStatus",value:function(e){return e.ok?e.json():Promise.reject("".concat(e))}}])&&V(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function J(e){return J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},J(e)}function H(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function M(){return M="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=z(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},M.apply(this,arguments)}function z(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=K(e)););return e}function $(e,t){return $=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},$(e,t)}function G(e,t){if(t&&("object"===J(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function K(e){return K=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},K(e)}var Q,W=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&$(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=K(r);if(o){var n=K(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return G(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._formCard=t._popupElement.querySelector(e),t._submitButton=t._formCard.querySelector(".popup__submit-button"),t}return t=a,(n=[{key:"setEventListeners",value:function(){var e=this;M(K(a.prototype),"setEventListeners",this).call(this),this._formCard.addEventListener("submit",(function(t){t.preventDefault(),e.callbackForm(),e.close()}))}},{key:"setFormSubmit",value:function(e){this.callbackForm=e}},{key:"renderLoading",value:function(e){this._submitButton.textContent=e?"Сохранение...":"Да"}}])&&H(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(m);function X(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Y=new n(_,r);Y.setEventListeners();var Z=new n(_,o);Z.setEventListeners();var ee=new n(_,a);ee.setEventListeners();var te=new F({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-44",headers:{authorization:"716a14ac-2e8b-4ac9-86a9-ffe832dc7936","Content-Type":"application/json"}}),ne=new A(l,s,d,Q),re=new B(".popup_user",(function(e){re.renderLoading(!0),te.editProfile({name:e.name,about:e.about}).then((function(e){ne.setUserInfo(e),re.close()})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){re.renderLoading(!1)}))}));re.setEventListeners(),f.addEventListener("click",(function(){var e=ne.getUserInfo();c.value=e.name,u.value=e.job,Y.resetValidation(),re.open()}));var oe=new B(".popup_avatar",(function(e){oe.renderLoading(!0),te.editAvatar({avatar:e.avatar}).then((function(e){ne.addAvatar(e),oe.close()})).then((function(e){ne.addAvatar(e)})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){oe.renderLoading(!1)}))}));oe.setEventListeners(),h.addEventListener("click",(function(){ee.resetValidation(),oe.open()}));var ie=new E(".popup_image");ie.setEventListeners();var ae=new W(".popup_delete");ae.setEventListeners();var ce=new B(".popup_cards",(function(e){ce.renderLoading(!0),te.addCard({name:e.name,link:e.link}).then((function(e){var t=ue(e);le.addItem(t),ce.close()})).catch((function(e){console.log("ошибка добавления карточки ".concat(e))})).finally((function(){ce.renderLoading(!1)})),console.log("I work")}));function ue(e){var t=new N({item:e,handleCardClick:function(){return function(e){ie.open(e)}(e)},handleLikeClick:function(){return function(e){e.isLiked()?te.dltLike(e.returnId()).then((function(t){e.deletelike(),e.countLike(t.likes)})).catch((function(e){console.log("ошибка удаления лайка ".concat(e))})):te.like(e.returnId()).then((function(t){e.addlike(),e.countLike(t.likes)})).catch((function(e){console.log("ошибка добавления лайка ".concat(e))}))}(t)},handleDeleteIconClick:function(e){ae.open(),ae.setFormSubmit((function(){ae.renderLoading(!0),te.deleteCard(e).then((function(e){ae.close(),t.deleteCard(e)})).catch((function(e){console.log("Упс...Проблемы с удалением карточки ".concat(e))})).finally((function(){ae.renderLoading(!1)}))}))}},Q,".template");return console.log(Q),console.log(e.owner._id),t.getNewCard()}ce.setEventListeners();var le=new U({renderer:function(e){var t=ue(e);le.addItemServer(t)}},".elements");p.addEventListener("click",(function(){Z.resetValidation(),ce.open()})),Promise.all([te.getUserInfo(),te.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return X(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?X(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];Q=o._id,ne.setUserInfo(o),ne.addAvatar(o),le.rendererOne(i)})).catch((function(e){console.log("".concat(e))}))}();