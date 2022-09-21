import LoginPage from "../PageObjects/LoginPage";
import {username,password} from "../fixtures/user";

describe('Login Failed Test',()=>{
    const loginPage = new LoginPage()

    before(function(){
        loginPage.visit()
        loginPage.loginPageIsVisible()
    })
    it('should display error message',()=>{
        loginPage.login('username','password')
        loginPage.errorMessageIsVisible()
    })

})

describe('passed login test',()=>{
    const loginPage = new LoginPage()
    it('should login',()=>{
        loginPage.clearFields()
        loginPage.login(username,password)
        loginPage.productPageIsVisible()
    })
})