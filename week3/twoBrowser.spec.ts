import { test, chromium, firefox } from '@playwright/test';

test('Launch Edge and Firefox browsers', async () => {

    // Launch Microsoft Edge
    const edgeBrowser = await chromium.launch({
        channel: 'msedge',
        headless: false
    });

    const edgeContext = await edgeBrowser.newContext();
    const edgePage = await edgeContext.newPage();

    await edgePage.goto('https://www.redbus.in');

    console.log('RedBus Title:', await edgePage.title());
    console.log('RedBus URL:', edgePage.url());


    // Launch Firefox
    const firefoxBrowser = await firefox.launch({
        headless: false
    });

    const firefoxContext = await firefoxBrowser.newContext();
    const firefoxPage = await firefoxContext.newPage();

    await firefoxPage.goto('https://www.flipkart.com');

    console.log('Flipkart Title:', await firefoxPage.title());
    console.log('Flipkart URL:', firefoxPage.url());


    // Close both browsers
    await edgeBrowser.close();
    await firefoxBrowser.close();
});



   