import { expect as expectChai } from "chai";

describe("Functional scenario", async () => {
  xit("UI controls", async () => {
    await browser.url("https://rahulshettyacademy.com/AutomationPractice/");
    await $("#mousehover").scrollIntoView();
    await browser.pause(3000);
    await $("#mousehover").moveTo();

    await $("=Top").click();
    await browser.pause(3000);
  });
  it("Alert msg handler", async () => {
    await browser.url("https://rahulshettyacademy.com/AutomationPractice/");
    await $("#mousehover").scrollIntoView();
    await browser.pause(3000);
    await $("#mousehover").moveTo();

    await $("=Top").click();
    await browser.pause(3000);

    await browser.url(
      "https://only-testing-blog.blogspot.com/2014/09/selectable.html"
    );
    await $("button").doubleClick();
    // not available on chrome - isAlertOpen()
    //expectChai(await browser.isAlertOpen()).to.be.true;

    expectChai(await browser.isAlertText()).to.be.equal(
      "You double clicked me.. Thank You.."
    );
    await browser.acceptAlert();
    await browser.pause(3000);
  });
});
