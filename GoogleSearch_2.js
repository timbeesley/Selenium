const { Builder, By, Key, util } = require('selenium-webdriver');

(async function helloSelenium() {

        let driver = await new Builder().forBrowser('chrome').build();

        await driver.get('http://google.com');

        await driver.getTitle();

        let searchBox = await driver.findElement(By.name('q'));
        let searchButton = await driver.findElement(By.name('btnK'));

        await searchBox.sendKeys('Selenium Dev');
        // Apply timeout for 10 seconds
        await driver.manage().setTimeouts( { implicit: 1000});
        await searchButton.click();

        await driver.findElement(By.name('q')).getAttribute("value");

        await driver.quit();

})();