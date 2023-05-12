export default class UserInfo {
  constructor(sabmitInfo) {
    this._profileName = document.querySelector(sabmitInfo.profileNameSelector);
    this._profileProfession = document.querySelector(sabmitInfo.profileProfessionSelector);
  }

  getUserInfo() {
    return {username: this._profileName.textContent, profession: this._profileProfession.textContent}
  }

  setUserInfo(dataName) {
    this._profileName.textContent = dataName.username;
    this._profileProfession.textContent = dataName.profession;
  }
}