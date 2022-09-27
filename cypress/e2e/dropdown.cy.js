import LoginPage from "../PageObjects/LoginPage";
//import {password, username} from "../fixtures/user";
import DropdownMenu from "../PageObjects/DropdownMenu";

describe('Dropdown Test',()=>{
    const loginPage = new LoginPage()
    const dropdown = new DropdownMenu()

    before(function(){
        loginPage.visit()
        loginPage.login_()
    })
    it('About and Logout Test',()=>{
        dropdown.clickOnDropdownMenu()
        dropdown.clickOnAbout()
        dropdown.clickOnLogoutButton()
    })
})