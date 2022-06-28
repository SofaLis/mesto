export class UserInfo {
    constructor(elementName, elementInfo, avatar) {
        this.elementName =  elementName;
        this.elementInfo = elementInfo;
        this._avatar = avatar;
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
    };

}