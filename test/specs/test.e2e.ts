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

