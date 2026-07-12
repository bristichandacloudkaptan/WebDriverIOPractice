describe("Demo Tests", function () {
  it("My First Test", async () => {
    await browser.url("https://google.com");

    await browser.pause(2000);

    await $('[name="q"]').setValue("WebDriverIO");

    await browser.keys("Enter");

    await browser.pause(3000);
  });
});
