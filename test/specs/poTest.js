import { expect as expectChai } from "chai";

import LoginPage from "../pageobjects/login.page.js";
import shopPage from "../pageobjects/shop.js";
import reviewPage from "../pageobjects/reviewPage.js";

describe("E-commerce Application", async () => {
  xit("Login fail page", async () => {
    // browser is a global object
    await browser.url("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await browser.getTitle());
    await expect(browser).toHaveTitleContaining("Rahul Shetty Academy");
    await LoginPage.login("rahulshettyacademy", "learning123");

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
    // Assertions, also known as verifications
    await expect(LoginPage.textInfo).toHaveTextContaining(
      "(username is rahulshettyacademy and Password is learning)"
    );
  });

  it("E2E test", async () => {
    //login to the page
    const products = ["iphone X", "Nokia Edge"];
    await browser.url("https://rahulshettyacademy.com/loginpagePractise/");
    await expect(browser).toHaveTitleContaining("Rahul Shetty Academy");
    await LoginPage.login("rahulshettyacademy", "learning");

    // checkout button with regex to match checkout (0) or checkout (1)

    await shopPage.checkoutButton.waitForExist(); // link text eg: anchor text

    // purchase products -- stick code
    await shopPage.addToCart(products);
    await shopPage.checkoutButton.click();

    let sumOfProducts = await reviewPage.sumOfProducts();
    console.log(await sumOfProducts);
    let totalFormattedPrice = await reviewPage.totalFormattedPrice();
    console.log(await totalFormattedPrice);

    await expectChai(sumOfProducts).to.be.equal(totalFormattedPrice);
    await $(".btn.btn-success").click();
    await $("#country").setValue("India");
    await $(".lds-ellipsis").waitForExist({ reverse: true });
    await $("=India").click();
    await $("input[value='Purchase']").click();
    await expect(
      $("div.alert.alert-success.alert-dismissible")
    ).toHaveTextContaining(
      "Thank you! Your order will be delivered in next few weeks"
    );
  });
});
