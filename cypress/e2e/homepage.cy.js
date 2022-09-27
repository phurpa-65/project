import HomePage from "../PageObjects/HomePage";
import LoginPage from "../PageObjects/LoginPage";
import SelectButton from "../PageObjects/SelectButton";
//import {password, username} from "../fixtures/user";

describe('Homepage Test',()=>{
    const homePage = new HomePage()
    const loginPage = new LoginPage()
    const selectButton = new SelectButton()

    before(function(){
        loginPage.visit()
    })
    it('should log in,check if inventory list is visible,click on item',()=>{
        loginPage.login_()
        homePage.inventoryListIsVisible()
        homePage.clickOnInventoryItem()
        homePage.displayItemDetail()
        homePage.clickOnBackToProduct()

    })
    it('select item',()=>{
        selectButton.selectAToZ()
        selectButton.selectZtoA()
        selectButton.selectLowToHigh()
        selectButton.selectHighToLow()
    })
})