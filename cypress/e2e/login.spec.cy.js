/// <reference  types="cypress" />
const perfil = require('../fixtures/perfil.json')

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

    it('deve fazer login com sucesso - usando arquivo de dados', () => {

        cy.get('[name="username"]').type(perfil.usuario)
        cy.get('.woocommerce-form > :nth-child(2) > [name="password"]').type(perfil.senha)
        cy.get('[name="login"]').click()


    })

    it('deve fazer login com sucesso - usando fixture', () => {

        cy.fixture('perfil').then(dados => {
            cy.get('[name="username"]').type(dados.usuario)
            cy.get('.woocommerce-form > :nth-child(2) > [name="password"]').type(dados.senha, {log: false})
            cy.get('[name="login"]').click()

        })

    })

    it('deve exibir uma mensagem de erro ao insirir usuario e senha errados', () => {

        cy.get('[name="username"]').type('teste@gmail.com')
        cy.get('.woocommerce-form > :nth-child(2) > [name="password"]').type('teste123')
        cy.get('[name="login"]').click()
        cy.get('.woocommerce-error > li > :nth-child(1)').should('contain', 'Erro')

    })

})