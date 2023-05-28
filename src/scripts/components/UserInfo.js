export default class UserInfo {
  constructor(sabmitInfo) {
    this._profileName = document.querySelector(sabmitInfo.profileNameSelector);
    this._profileProfession = document.querySelector(sabmitInfo.profileProfessionSelector);
    this._profileAvatar = document.querySelector(sabmitInfo.profileAvatar)
  }

  getUserInfo() {
    return {username: this._profileName.textContent, profession: this._profileProfession.textContent}
  }

  setUserInfo({ avatar,  username, profession }) {
    this._profileAvatar.src = avatar;
    this._profileName.textContent = username;
    this._profileProfession.textContent = profession;
  }

  setid (id) {
    this._id = id;
  }

  getid () {
    return this._id;
  }
}