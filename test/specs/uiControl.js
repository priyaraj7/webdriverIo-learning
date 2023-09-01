describe("UI Controls Test suite", async () => {
  it("UI Controls", async () => {
    await browser.url("https://rahulshettyacademy.com/loginpagePractise/");
    await $("input[name='username']").setValue("rahulshettyacademy");
    await $("//input[@id='password']").setValue("learning");

    const radioButtons = await $$(".customradio");
    console.log(await radioButtons[1], "button");
    await radioButtons[1].click();
    const modal = await $(".modal-body");
    await modal.waitForDisplayed();
    await $("#cancelBtn").click();
    await $$(".customradio")[0].$("span").isSelected;
    await radioButtons[1].$("span").click();
    await modal.waitForDisplayed();
    await $("#okayBtn").click();
    //validate pop up not shown up when you select admin
    await $$(".customradio")[0].$("span").click();
    await expect(modal).not.toBeDisplayed();
    //selecting dropdown
    const dropdown = await $("select.form-control"); //select tag
    await dropdown.selectByAttribute("value", "teach");
    await dropdown.selectByVisibleText("Consultant");
    await dropdown.selectByIndex(0);
    console.log(await dropdown.getValue());
  });
});
