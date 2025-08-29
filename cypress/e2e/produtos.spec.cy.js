/// <reference types="cypress" />

describe('funcionalidade Página de produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')

    });

    it('deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            //.first()
            //.last()
            //.eq(3)
            .contains('Ariel Roll Sleeve Sweatshirt')
            .click()

    });

    it('deve adicionar um produto ao carrinho', () => {

        var quantidade = 3

        cy.get('[class="product-block grid"]')
            .contains('Ariel Roll Sleeve Sweatshirt')
            .click()
        cy.get('.button-variable-item-L').click()
        cy.get('.button-variable-item-Purple').click()
        cy.get('[name="quantity"]').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Ariel Roll Sleeve Sweatshirt” foram adicionados no seu carrinho.')

    })

    it.only('Deve adicionar produtos ao carrinho - Usando Comanado customziado', () =>{
        cy.addProdutos('Aero Daily Fitness Tee', 'L','Black', 2)
    })
    
     it.only('Deve adicionar produtos ao carrinho - Usando Comanado customziado', () =>{
        cy.addProdutos('Ariel Roll Sleeve Sweatshirt', 'L','Red', 5)
    })

});