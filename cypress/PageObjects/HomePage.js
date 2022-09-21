import BasePage from "./BasePage";

class HomePage extends BasePage{
    inventoryListIsVisible(){
        cy.get('.inventory_list').should('be.visible')
        cy.url().should('include','inventory.html')
    }
    clickOnInventoryItem(){
        cy.get('.inventory_item_name')
            .contains('Sauce Labs Backpack')
            .click()
    }
    displayItemDetail(){
        cy.get('.inventory_details_desc').should('be.visible')
    }
    clickOnBackToProduct(){
        cy.get('[data-test="back-to-products"]').click()
    }
}
export default HomePage;