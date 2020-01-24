const puppeteer = require('puppeteer');

module.exports = {

    async index(req, res) {

        const browser = await puppeteer.launch({ ignoreDefaultArgs: ['--disable-extensions'] });
        const page = await browser.newPage();
        await page.setContent('<h1>Hello</h1>');
        await page.emulateMediaType('screen');

        //It is not necessary to use the *path*, I am only using it to view the Layout
        const buffer = await page.pdf({
            path: 'mypdftest.pdf',
            format: 'A4',
            printBackground: true
        })

        await page.close();

        return res.json(buffer);
    }
}