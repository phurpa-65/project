import BasePage from "./BasePage";

class SelectButton extends BasePage{
    selectAToZ(){
        cy.sel('product_sort_container')
            .select('Name (A to Z)')
        cy.sel('product_sort_container').should('have.value','az')
    }
    selectZtoA(){
        cy.sel('product_sort_container')
            .select('Name (Z to A)')
        cy.sel('product_sort_container').should('have.value','za')
    }
    selectLowToHigh(){
        cy.sel('product_sort_container')
            .select('Price (low to high)')
        cy.sel('product_sort_container').should('have.value','lohi')
    }
    selectHighToLow(){
        cy.sel('product_sort_container')
            .select('Price (high to low)')
        cy.sel('product_sort_container').should('have.value','hilo')
    }
}
export default SelectButton;