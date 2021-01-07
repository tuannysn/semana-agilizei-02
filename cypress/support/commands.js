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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('backgroundLogin', ()=>{
    // Técnica de background login
    cy.setCookie(
        'PrestaShop-a30a9934ef476d11b6cc3c983616e364',
        '8JYVddvvVUUWYwyn08WBQuY2dowG5kD5Jpmua%2B%2FhzFJ3sZ1mLA8UWz8dRuStYj3akHCMdASoFl%2BVuBNO%2F9VnCpw3ykW99iumMCWMnSthBcfgXcF%2B5Jclpm0JNPhD%2FQmgyGHtF5miWs5b7ougBanBU0vzLcDt%2B1nkO%2Fwt2EodH4Vul%2FVZqCKovhwxWT7LTO9H0EJPbkXb0b%2Bs9naobJpuVNsi4TvU5yZBDFDM1nNwO%2BGCuVaDau%2FnHyUftqXRf7RmVKcpnhSocvKApFtGJ%2FOnMx%2Fij2vxUpyPz7AdElIBbijVCmQNqZ1l4mMqgAAKBeyBKm3zPItsN1eS46sXAXFq1Vl9nleD9bBCv6%2BHWf9GLZH9glZo90h4eo0vVFnlh4Jr9ZTcVWDB7O36ArS4ezpcB6OT6NtX5d4sA2WiH4cr75aRhOm7Mq9x70chPyYgCYDiOyV6JlKSrPlyDN9h6yToUQ%3D%3D000345'
    )
})