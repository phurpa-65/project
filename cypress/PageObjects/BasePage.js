class BasePage{
    static pause(ms){
        cy.wait(ms)
    }
}
export default BasePage;