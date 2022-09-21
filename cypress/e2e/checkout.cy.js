import LoginPage from "../PageObjects/LoginPage";
import {password, username} from "../fixtures/user";
import SelectButton from "../PageObjects/SelectButton";
import ShoppingCartPage from "../PageObjects/ShoppingCartPage";
import CheckoutPage from "../PageObjects/CheckoutPage";

describe('Checkout Test',()=>{
    const loginPage= new LoginPage()
    const selectButton = new SelectButton()
    const shoppingCart = new ShoppingCartPage()
    const checkoutPage = new CheckoutPage()

    before(function(){
        loginPage.visit()
        loginPage.login(username,password)
    })
    it('Checkout',()=>{
        selectButton.selectHighToLow()
        shoppingCart.clickOnAddToCart()
        shoppingCart.clickOnShoppingCartLink()
        checkoutPage.clickOnCheckout()
        checkoutPage.fillInCheckoutForm('Phurpa','Lhamo',12345)
        //checkoutPage.clickOnCancel()
        checkoutPage.clickOnContinue()
        //checkoutPage.clickOnSecondPageCancel()
        checkoutPage.clickOnFinish()
        checkoutPage.clickOnBackToHome()
    })
})