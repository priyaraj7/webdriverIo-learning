import { expect as expectChai } from "chai";
import { readFileSync } from "fs";

import LoginPage from "../pageobjects/login.page.js";

let credentials = JSON.parse(readFileSync("test/testData/LoginTest.json"));
describe("E-commerce Application", async () => {
  credentials.forEach(({ username, password }) => {
    it("Login fail page - Smoke", async () => {
      await browser.url("/loginpagePractise/");
      console.log(await browser.getTitle());
      await expect(browser).toHaveTitleContaining("Rahul Shetty Academy");
      await LoginPage.login(username, password);
      await browser.pause(3000);
      await browser.waitUntil(
        async () => (
          (await LoginPage.signIn.getAttribute("value")) === "Sign In",
          {
            timeout: 5000,
            timeoutMsg: "Error message is not showing up",
          }
        )
      );
      await console.log(await LoginPage.alert.getText());

      await expect(LoginPage.textInfo).toHaveTextContaining(
        "(username is rahulshettyacademy and Password is learning)"
      );
    });
  });
});
