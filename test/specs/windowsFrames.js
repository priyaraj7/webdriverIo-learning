describe("Window and Frames Miscellanous", async () => {
  it("Parent and Child windows switch", async () => {
    await browser.url("https://rahulshettyacademy.com/loginpagePractise/");

    await $(".blinkingText").click();

    const handles = await browser.getWindowHandles(); // 2 windows
    console.log(handles, "hand");
    // switchToWindow -> used when dealing with the browser which are opened by app
    await browser.switchToWindow(handles[1]);
    console.log((await $("h1")).getText());
    console.log((await $("h1")).getTitle());
    await browser.closeWindow();
    await browser.switchToWindow(handles[0]);
    console.log(await browser.getTitle());
    await browser.newWindow("https://google.com"); // automation
    console.log(await browser.getTitle());
    //switchWindow -> open by automation
    await browser.switchWindow(
      "https://rahulshettyacademy.com/loginpagePractise/"
    );
  });
});
