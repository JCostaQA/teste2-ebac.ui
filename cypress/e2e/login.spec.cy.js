/// <reference  types="cypress" />

context('funcionalidade de Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/my-account/')

    })

    it('deve fazer login com sucesso', () => {


        cy.get('[name="username"]').type('testedybala@gmail.com')
        cy.get('.woocommerce-form > :nth-child(2) > [name="password"]').type('teste123')
        cy.get('[name="login"]').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá')

    })

    it.only('deve exibir uma mensagem de erro ao insirir usuario e senha errados', () => {

        cy.get('[name="username"]').type('teste@gmail.com')
        cy.get('.woocommerce-form > :nth-child(2) > [name="password"]').type('teste123')
        cy.get('[name="login"]').click()
        cy.get('.woocommerce-error > li > :nth-child(1)').should('contain', 'Erro')

    })

})