describe('Selecionar Produtos', () => {
  // atributos

  beforeEach(()=> {
    cy.visit('/')              // abre o browser na url informads em cypress.config.js
  }) // termina before

  it('Selecionar Sauce Labs Backpack', () => {

    cy.title()                // verifica se o título da página é Swag Labs
        .should('eq', 'Swag Labs')

        // realizar o login
        cy.get('input[data-test="username"]')  // preenche o usuário
            .type('standard_user')

    cy.get('#passsword')
        .type('secret_sauce')                 // preenche a senha

    cy.get('input[name="login-button"]')
        .click()                             // clica no botão login

    // carregar a página de inventario

    cy.get('span.title')
        .should('have.text', 'Products')     // verifica se o elemento contém Products

    cy.get('img[alt="Sauce Labs Backpack"]')
        .click()  // clica na imagem do produto mochila

    // carregar a pagina de item de inventario

    //*[@id="back-to-products="]
    /html/body/div/div/div/div[1]/div[2]/div/button


  })

}) // termina describe