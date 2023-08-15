import { $ } from '@wdio/globals'
import Page from './openpage';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get searchterm () {
        return $('input[data-web-test="lp-search-input"]');
    }

    public get selectwithtext () {
        return $('(//span[@class="text-highlight"][contains(.,"Dr. Peter Test")])[1]');
    }

    public get findbutton () {
        return $('#search-button');
    }

    public get cookieacept () {
        return $('//div//button[text()=" Alle akzeptieren "]');
    }



    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async search (searchtext: string) {
        await this.searchterm.click();
        await this.searchterm.setValue(searchtext);        
        await this.selectwithtext.click();
        
        
    }

    public async cookie(){
        (await this.cookieacept).click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('cd-de/');
        
    }
}

export default new LoginPage();
