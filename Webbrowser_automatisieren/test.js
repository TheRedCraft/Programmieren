const {Builder, By, Key, until} = require('selenium-webdriver');


let driver;


opengoogle();


async function opengoogle() {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.get('http://www.google.com');
    await click('Alle akzeptieren');

    await driver.findElement(By.name('q')).sendKeys('test', Key.RETURN);
    await click('Stiftung Warentest | Unabhängig. Objektiv. Unbestechlich.');
    for(i = 5; i > 0; i = i) {
        if(driver.getCurrentUrl() == "https://test.de/") {
            await click('Geld');
        }
    }
}

async function click(text) {
    await driver.findElement(By.xpath("//*[text()= '" + text + "']")).click();
}