import ShoppingCartPage from "../PageObjects/ShoppingCartPage";
import LoginPage from "../PageObjects/LoginPage";
import SelectButton from "../PageObjects/SelectButton";
import {password, username} from "../fixtures/user";

describe('',()=>{
    const loginPage = new LoginPage()
    const selectButton = new SelectButton()
    const shoppingCart = new ShoppingCartPage()

    beforeEach(function(){
        loginPage.visit()
        loginPage.login(username,password)
    })
    it('select low to high',()=>{
        selectButton.selectLowToHigh()
    })
    it('click on add to cart and click on shopping cart link',()=>{
        shoppingCart.clickOnAddToCart()
        shoppingCart.clickOnShoppingCartLink()
        shoppingCart.inventoryItemIsVisible()
        //click on remove button
        shoppingCart.clickOnRemoveButton()
        shoppingCart.itemIsNotVisible()
        //click on continue shopping
        shoppingCart.clickOnContinueShopping()
        shoppingCart.inventoryListIsVisible()
    })
})
