describe("E-commerce Application", async () => {
  it("Login fail page", async () => {
    // browser is a global object
    await browser.url("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await browser.getTitle());

    await expect(browser).toHaveTitleContaining("Rahul Shetty Academy");

    await $("input[name='username']").setValue("rahulshettyacademy");
    // await browser.pause(3000);
    await $("#username").setValue("Supriya");

    await $("//input[@id='password']").setValue("learning");
    await $("#signInBtn").click();
    await browser.pause(6000);
    await console.log((await $(".alert-danger")).getText());
  });
});
