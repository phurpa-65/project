// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Cypress.Commands.add('login',(username,password)=>{
//     cy.get('#user-name').type(username)
//     cy.get('#password').type(password)
//     cy.get('#login-button').click()
// })

Cypress.Commands.add('sel',(selector)=>{
    return cy.get(`[data-test*=${selector}]`);
})


Cypress.Commands.add('login', (userType, email, password) => {
    const types = {
        first: {
            login:'standard_user',
            password: 'secret_sauce',
        },
        second: {
            login: email,
            password: password
        },
        third: {
            login: email,
            password: password
        },
        fourth: {
            login: email,
            password: password
        }
    };

    const user = types[userType];

    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type(user.login)
    cy.get('#password').type(user.password)
    cy.get('#login-button').click()
});