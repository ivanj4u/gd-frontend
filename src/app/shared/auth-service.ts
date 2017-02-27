import {userInfo} from "os";
export class AuthService {

  isLogin() : boolean {
    return localStorage.getItem("userInfo") != null
    && localStorage.getItem("token") != null;
  }

  login(username : string, password : string) : boolean {
    if ("ivan" == username && "qwd" == password) {
      let userInfo = {
        fullname : "Ivan Aribanilia",
        username : "ivan"
      };

      localStorage.setItem("userInfo", JSON.stringify(userInfo));
      localStorage.setItem("token", "abcd1234");
      return true;
    }
    return false;
  }

  logout() : void {
    localStorage.removeItem("userInfo");
    localStorage.removeItem("token");
  }

  getUserInfo() {
    return JSON.parse(localStorage.getItem("userInfo"));
  }
}
