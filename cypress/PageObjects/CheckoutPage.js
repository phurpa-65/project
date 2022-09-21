import BasePage from "./BasePage";

class CheckoutPage extends BasePage{
    clickOnCheckout(){
        cy.get('#checkout').click()
        cy.url().should('include','checkout-step-one.html')
    }
    fillInCheckoutForm(firstname,lastname,postal_code){
        cy.get('[data-test="firstName"]').type(firstname)
        cy.get('[data-test="lastName"]').type(lastname)
        cy.get('[data-test="postalCode"]').type(postal_code)
    }
    clickOnCancel(){
        cy.get('[data-test="cancel"]').click()
        cy.url().should('include','cart.html')
    }
    clickOnContinue(){
        cy.get('[data-test="continue"]').click()
        cy.url().should('include','checkout-step-two.html')
        cy.get('.summary_total_label').should('be.visible')
    }
    clickOnSecondPageCancel(){
        cy.get('[data-test="cancel"]').click()
        cy.url().should('include','inventory.html')
    }
    clickOnFinish(){
        cy.get('[data-test="finish"]').click()
        cy.get('h2')
            .contains('THANK YOU FOR YOUR ORDER')
            .should('be.visible')
    }
    clickOnBackToHome(){
        cy.get('[data-test="back-to-products"]').click()
        cy.url().should('include','inventory.html')
    }

}
export default CheckoutPage;