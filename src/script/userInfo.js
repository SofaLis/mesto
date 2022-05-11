export class UserInfo {
    constructor(elementName, elementInfo) {
        this._elementName =  elementName;
        this._elementInfo = elementInfo;
    }

    getUserInfo () {
        
        return {
            name: this._elementName.textContent,
            job: this._elementInfo.textContent
        }
    }

    setUserInfo (name, job) {
        this._elementName.textContent = name;
        this._elementInfo.textContent = job;
    }
}