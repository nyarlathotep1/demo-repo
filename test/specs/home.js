import HomePage from '../pages/home-page';

describe('Home', () => {
    beforeEach(async () => {
       await HomePage.open();
    })

    it('Open URL & assert title', async () => {

        await expect(browser).toHaveTitle('http://prestashop.qatestlab.com.ua/');
    });

    it('Open the About page & assert url', async () => {

        await browser.url('http://prestashop.qatestlab.com.ua/en/content/4-about-us');
        await expect(browser).toHaveUrl('http://prestashop.qatestlab.com.ua/en/content/4-about-us')
    });

    it('Click the "Women" button & assert url contains "Women" text', async () => {

        await HomePage.btnWomen.click()
        await expect(browser).toHaveUrlContaining('3-women');
    });

    it('Click Home logo & assert url not contains "3-women" url', async () => {

        await HomePage.imageLogo.click()
        await expect(browser).not.toHaveUrlContaining('3-women');
    });

    it('Find custom block & assert the text',async () => {
        
        const customBlock = await HomePage.txtCustomBlock;
        await expect(customBlock).toHaveText('Custom Block');
    });
});