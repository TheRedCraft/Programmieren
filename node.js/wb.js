const {Builder, By, Key, until} = require('selenium-webdriver');


let driver;


opengoogle();


async function opengoogle() {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.get('http://www.google.com');
    await click('Ich stimme zu');

    await driver.findElement(By.name('q')).sendKeys('Developer Akademie', Key.RETURN);
    await click('Developer Akademie - Karriere');
    await click('Cookies zulassen');
}

async function click(text) {
    await driver.findElement(By.xpath("//*[text()= '" + text + "']")).click();
}