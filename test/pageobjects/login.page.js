import { $ } from "@wdio/globals";
import Page from "./page.js";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage {
  /**
   * define selectors using getter methods
   */
  get userName() {
    return $('input[name="username"]');
  }

  get password() {
    return $('//input[@type="password"]');
  }

  get signIn() {
    return $("#signInBtn");
  }
  get alert() {
    return $(".alert-danger");
  }
  get textInfo() {
    return $("p");
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  async login(userName, password) {
    await this.userName.setValue(userName);
    await this.password.setValue(password);
    await this.signIn.click();
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  open() {
    return super.open("login");
  }
}

export default new LoginPage();
