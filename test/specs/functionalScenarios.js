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
  xit("Alert msg handler", async () => {
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
    // not available on chrome - isAlertOpen( )
    //expectChai(await browser.isAlertOpen()).to.be.true;

    expectChai(await browser.isAlertText()).to.be.equal(
      "You double clicked me.. Thank You.."
    );
    await browser.acceptAlert();
    await browser.pause(3000);
  });
  xit("Web Tables validation", async () => {
    await browser.url(
      "https://rahulshettyacademy.com/seleniumPractise/#/offers"
    );

    await $("tr th:nth-child(1)").click();
    //await browser.pause(8000);
    const veggiesLocator = $$("tr td:nth-child(1)");
    let veggiesName = await veggiesLocator.map(
      async (veg) => await veg.getText()
    );
    let veggiesCopy = veggiesName.slice();
    let sortedVeggiesName = veggiesCopy.sort();
    //let sortedVeggiesName = veggiesName.sort();
    await expectChai(veggiesName).to.eql(sortedVeggiesName);
  });
  xit("Search for an item", async () => {
    await browser.url(
      "https://rahulshettyacademy.com/seleniumPractise/#/offers"
    );
    await $("#search-field").setValue("apple");
    const firstElementLocator = await $$(
      "tbody tr:nth-child(1) td:first-child"
    );
    const veggies = await firstElementLocator[0].getText();
    await expectChai(veggies).to.match(/apple/);
  });
});
