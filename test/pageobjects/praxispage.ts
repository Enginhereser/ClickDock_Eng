import { $ } from '@wdio/globals'
import Page from './openpage';



class SecurePage extends Page {
    
    
    /**
     * define selectors using getter methods
     */
    public get drnametext () {
        return $('//h1[contains(.,"Dr. Peter Test")]');
    }
    public get headerimage () {
        return $('//div[@class="header__image"]');
    }


    public get adress1 () {
        return $('//div//div[@class="location-info-container"]//a/p[text()=" Blücherstraße 10 "]');
    }

    public get adress2 () {
        return $('//div//div[@class="location-info-container"]//a//p[text()=" 56564 Neuwied "]');
    }


    public get timesheettable (){
        return $('//div[@class="text-day-container"]/div[3]/ancestor::div[@class="content__days"]/div[2]/div[3]//div[text()]');
    }
    
    public async assert(){
       await expect(this.drnametext).toBeExisting();
       await expect(this.adress1).toBeExisting();
       await expect(this.adress2).toBeExisting();
       await expect(this.headerimage).toBePresent();
       
      
    }
    
    
}

export default new SecurePage();
