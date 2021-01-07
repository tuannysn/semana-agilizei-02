/// <reference types="cypress" />

context('Compra', () => {
    it('Efetuar uma compra de produto', () => {
        cy.backgroundLogin() // abstração para comando personalizado 
        // http://automationpractice.com/index.php
        cy.visit('/');

        let nomeProduto = 'Faded Short Sleeve T-shirts';
        cy.contains(nomeProduto).trigger('mouseover')

        cy.contains(nomeProduto)
            .parent() //h5
            .siblings('div.button-container')
            .children('a')
            .first() // add to cart
            .click()

        // Validando se o produto foi adicionado ao carrinho com sucesso
        cy.get('.icon-ok')
            .parent() //h2
            .should('contain.text', 'Product successfully added to your shopping cart')

        cy.get('span#layer_cart_product_title')
            .should('contain.text', nomeProduto)

        cy.get(".button-container a[href$='controller=order']").click()

        cy.get(".cart_navigation a[href$='controller=order&step=1']").click()
        
        // Bloco para fazer login após inserir dados no carrinho
        // cy.get('#email').type('lalalisa_m@mail.com')
        // cy.get('#passwd').type('Lalisa@123')
        // cy.get('button#SubmitLogin').click()

        // Validando se o endereço de entrega é igual ao de cobrança
        // asserção | atributo | valor
        cy.get('[type=checkbox]#addressesAreEquals').should('have.attr', 'checked', 'checked')
        cy.get('[type=checkbox]#addressesAreEquals').should('have.attr', 'name', 'same')

        cy.get('button[name=processAddress]').click()

        cy.get('[type=checkbox]#cgv').check()
        cy.get('button[name=processCarrier]').click()

        cy.get('.bankwire').click()

        cy.get('.cart_navigation button[type=submit]')
            .find('span')
            .contains('I confirm my order')
            .click()

        cy.get('.cheque-indent strong')
            .should('contain.text', 'Your order on My Store is complete.')

        // 1. Texto capturado do box
        // 2. Filtrar o texto do box para extrair somente o ID do pedido
        // 3. Armazenar o ID do pedido de alguma forma
        // 4. Obter o ID do pedido armazenado de alguma forma
        cy.get('div.box').invoke('text').then((text) => {
            //console.log(text) - imprimir texto no console do navegador
            //console.log(text.match(/[A-Z][A-Z]+/g)[1]) - imprime o ID no console do navegador
            // text.match(/[A-Z][A-Z]+/g)[1] - regex que identifica a posição do ID do pedido
            cy.writeFile('cypress/fixtures/pedido.json', {id:`${text.match(/[A-Z][A-Z]+/g)[1]}`}) // salva o ID em um arquivo json

            cy.get(".cart_navigation  a[href$='history']").click()

            // leitura de um arquivo
            cy.readFile('cypress/fixtures/pedido.json').then((pedido) =>{
                cy.get("tr.first_item .history_link a").should('contain.text', pedido.id)
            })
        })   
    });
});