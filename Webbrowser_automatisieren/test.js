const {Builder, By, Key, until} = require('selenium-webdriver');


let driver;


opengoogle();


async function opengoogle() {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.get('http://www.google.com');
    await click('Alle akzeptieren');

    await driver.findElement(By.name('q')).sendKeys('test', Key.RETURN);
    await click('Stiftung Warentest | Unabhängig. Objektiv. Unbestechlich.');
    setInterval(async function() {
        await click('Einwilligen');
    }, 2);
    
    setInterval(async function() {
        if(driver.getCurrentUrl == "https://www.test.de/") {
            await click('Geld');
        }
    }, 2);
}

async function click(text) {
    await driver.findElement(By.xpath("//*[text()= '" + text + "']")).click();
}