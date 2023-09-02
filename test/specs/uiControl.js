// const expectChai = require("chai").expect;
import { expect as expectChai } from "chai";

describe("UI Controls Test suite", async () => {
  xit("UI Controls", async () => {
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
    await browser.pause(3000);
    console.log(await dropdown.getValue());

    // Chai assertion
    expectChai(await dropdown.getValue()).to.equal("stud");
  });
  xit("Dynamic Dropdown Controls", async () => {
    await browser.url("https://rahulshettyacademy.com/AutomationPractice/");
    await $("#autocomplete").setValue("ind");
    await browser.pause(3000);
    let items = await $$("[class='ui-menu-item'] div");

    for (let i = 0; i < (await items.length); i++) {
      if ((await items[i].getText()) === "India") {
        await items[i].click();
      }
    }
  });

  xit("Checkboxes Identification", async () => {
    await browser.url("https://rahulshettyacademy.com/AutomationPractice/");
    const element = await $$("input[type='checkbox']");
    await element[1].click();
    console.log(await element[1].isSelected());
    console.log(await element[2].isSelected());
  });
});
