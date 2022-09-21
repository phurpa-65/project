import BasePage from "./BasePage";

class DropdownMenu extends BasePage{
    clickOnDropdownMenu(){
        cy.get('#react-burger-menu-btn').click()
        //cy.get('#inventory_sidebar_link').should('be.visible')
    }
    clickOnAbout(){
        cy.contains('About').click({force:true})
        cy.url().should('include','saucelabs.com')
    }
    clickOnLogoutButton(){
        cy.go('back')
        cy.contains('Logout').click({force:true})
        cy.get('#login_button_container').should('be.visible')
    }
}
export default DropdownMenu;