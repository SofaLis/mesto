export class UserInfo {
    constructor(elementName, elementInfo, avatar, id) {
        this.elementName =  elementName;
        this.elementInfo = elementInfo;
        this._avatar = avatar;
        this._userId = null;
    };

    getUserInfo () {
        return {
            name: this.elementName.textContent,
            job: this.elementInfo.textContent,
            avatar: this._avatar.src
        };
    };

    setUserInfo (item) {
        this.elementName.textContent = item.name;
        this.elementInfo.textContent = item.about;
    };

    addAvatar(item) {
        this._avatar.src = item.avatar;
        this._avatar.alt = item.name
    };

    setId (item) {
        this._userId = item._id;
    }

}