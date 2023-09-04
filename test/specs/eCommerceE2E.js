import { expect as expectChai } from "chai";

describe("E-Commerce Application", async () => {
  it("E2E test", async () => {
    //login to the page
    const products = ["iphone X", "Nokia Edge"];
    await browser.url("https://rahulshettyacademy.com/loginpagePractise/");
    await expect(browser).toHaveTitleContaining("Rahul Shetty Academy");
    await $("input[name='username']").setValue("rahulshettyacademy");
    await $("//input[@id='password']").setValue("learning");
    await $("#signInBtn").click();
    // now you are loged to the page, wait until checkout button is displayed

    // checkout button with regex to match checkout (0) or checkout (1)
    const checkoutButton = await $("*=Checkout");
    await checkoutButton.waitForExist(); // link text eg: anchor text

    const cards = await $$("div[class='card h-100']");

    for (let i = 0; i < (await cards.length); i++) {
      const card = await cards[i].$("div h4 a");

      if (products.includes(await card.getText())) {
        await cards[i].$(".card-footer button").click();
      }
    }
    await checkoutButton.click();
    // await browser.pause(3000);
    //browser.switchWindow("https://rahulshettyacademy.com/angularpractice/shop");
    const productPrices = await $$("//tr/td[4]/strong");

    // await productPrices.map(async (price) => {
    //   console.log(await price, "log");
    // });

    const productsValues = await Promise.all(
      await productPrices.map(async (price) =>
        parseInt((await price.getText()).split(".")[1].trim())
      )
    );

    const total = productsValues.reduce((acc, cur) => acc + parseInt(cur), 0);

    const productSum = await $("h3 strong").getText();
    // console.log(await productSum);
    // console.log(await productSum.toString().split(" "));
    const productIntSum = await parseInt(productSum.split(" ")[1]);
    // parseInt(productSum.split(".")[1].trim());

    await expectChai(total).to.be.equal(productIntSum);
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
