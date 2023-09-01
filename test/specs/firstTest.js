describe("E-commerce Application", async () => {
  xit("Login fail page", async () => {
    // browser is a global object
    await browser.url("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await browser.getTitle());

    await expect(browser).toHaveTitleContaining("Rahul Shetty Academy");

    await $("input[name='username']").setValue("rahulshettyacademy");
    // await browser.pause(3000);
    //await $("#username").setValue("Supriya");

    await $("//input[@id='password']").setValue("learning");
    await $("#signInBtn").click();
    // await browser.pause(6000);
    // await console.log(
    //   await $(".alert.alert-danger.col-md-12").getText(),
    //   "log"
    // );
    await browser.waitUntil(
      async () => (await $("#signInBtn")).getAttribute("value") === "Sign In",
      {
        timeout: 5000,
        timeoutMsg: "Error message is not showing up",
      }
    );
    await console.log((await $(".alert-danger")).getText());
    // Assertions, also known as verifications
    await expect($("p")).toHaveTextContaining(
      "(username is rahulshettyacademy and Password is learning)"
    );
  });

  xit("Login success page", async () => {
    await browser.url("https://rahulshettyacademy.com/loginpagePractise/");
    await $("input[name='username']").setValue("rahulshettyacademy");
    await $("//input[@id='password']").setValue("learning");
    await $("#signInBtn").click();

    // wait until checkout button is displayed
    await $(".btn-primary").waitForExist();
    await expect(browser).toHaveUrlContaining("shop");
    await expect(browser).toHaveTitle("ProtoCommerce");
  });
});
