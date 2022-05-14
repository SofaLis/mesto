export class UserInfo {
    constructor(elementName, elementInfo) {
        this.elementName =  elementName;
        this.elementInfo = elementInfo;
    }

    getUserInfo () {
        return {
            name: this.elementName.textContent,
            job: this.elementInfo.textContent
        }
    }

    setUserInfo (item) {
        this.elementName.textContent = item.nameInput;
        this.elementInfo.textContent = item.jobInput;
    }
}