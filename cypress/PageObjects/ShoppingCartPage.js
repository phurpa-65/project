import BasePage from "./BasePage";

class ShoppingCartPage extends BasePage{
    clickOnAddToCart(){
        cy.contains('Add to cart').click()
        cy.get('.shopping_cart_badge').should('contain','1')
    }
    clickOnShoppingCartLink(){
        cy.get('.shopping_cart_link').click()
        cy.contains('Remove').should('be.visible')
    }
    inventoryItemIsVisible(){
        cy.contains('Sauce Labs Backpack').should('be.visible')
    }
    clickOnRemoveButton(){
        cy.contains('Remove').click()
    }
    itemIsNotVisible(){
        cy.get('.inventory_item_name').should('not.exist')
    }
    clickOnContinueShopping(){
        cy.get('[data-test="continue-shopping"]').click()
    }
    inventoryListIsVisible(){
        cy.get('.inventory_list').should('be.visible')
        cy.url().should('include','inventory.html')
    }

}
export default ShoppingCartPage;