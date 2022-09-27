import BasePage from "./BasePage";

class LoginPage extends BasePage{
    visit(){
        cy.visit('https://www.saucedemo.com/')
        cy.url().should('include','saucedemo.com')
    }
    loginPageIsVisible(){
        cy.get('#login_button_container').should('be.visible')
    }
    login(){
        cy.login('second','locked_out_user','secret_sauce');
    }
    login_(){
        cy.login('first');
    }
    clearFields(){
        cy.get('#user-name').clear()
        cy.get('#password').clear()
    }
    errorMessageIsVisible(){
        cy.get('h3')
            .contains('Epic sadface: Sorry, this user has been locked out.')
            .should('be.visible')
    }
    productPageIsVisible(){
        cy.get('.title').contains('Products')
        cy.url().should('include','inventory.html')
    }

}
export default LoginPage;