describe("Window and Frames Miscellanous", async () => {
  xit("Parent and Child windows switch", async () => {
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
  it("Frames switch", async () => {
    await browser.url("https://rahulshettyacademy.com/AutomationPractice/");
    await $("#mousehover").scrollIntoView;
    console.log(await $$("a").length); // 27
    browser.switchToFrame(await $("[id='courses-iframe']"));
    // tag courses
    console.log((await $("=Courses")).getTagName());
    console.log(await $$("a").length, "length"); // 107
    await browser.switchToFrame(null);
    console.log(await $$("a").length); // 27
  });
});
