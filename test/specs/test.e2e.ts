import Mainpage from '../pageobjects/clickdoc'
import SecurePage from '../pageobjects/praxispage'


describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await Mainpage.open()
        await browser.maximizeWindow();
        await Mainpage.cookie()
        await Mainpage.search('Dr. Peter Test')
        
    })
})

describe('assertion', () => {
    it('should validate the drname an adress', async () => {
        //(await SecurePage.drnametext).waitForDisplayed();
        await browser.scroll(0,200);
        await SecurePage.assert();

    })
})
/*describe('assertion', () => {
    it('should validate timesheet', async () => {
        await browser.scroll(0, 200);

        const currentTimeSheet = await SecurePage.getCurrentTimeSheet();
        switch (currentTimeSheet) {
            case '14:00 Uhr - 18:00 Uhr':
                await expect(SecurePage.morning).toBeExisting();
                break;
            case '14:00 Uhr - 18:00 Uhr':
                await expect(SecurePage.afternoon).toBeExisting();
                break;
            
            default:
                false;
                break;
        }
    });
});*/
