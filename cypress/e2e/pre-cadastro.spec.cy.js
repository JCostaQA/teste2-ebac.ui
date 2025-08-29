/// <reference types="cypress" />
import { faker } from '@faker-js/faker'; // p pegar nomes email aleaorios automaticos

describe('Funcionalidade Pré Cadastro', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/my-account/')
    })

    it('DEVE CRIAR CADASTRO COM SUCESSO', () => {


        let fakenome = faker.person.firstName()
        let fakesobrenome = faker.person.lastName()
        let fakeremail = faker.internet.email()

        cy.get('[name="email"]').type(fakeremail)
        cy.get('.register > :nth-child(2) > [name="password"]').type('teste1233')
        cy.get('[name="register"]').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('[name="account_first_name"]').type(fakenome)
        cy.get('[name="account_last_name"]').type(fakesobrenome)
        cy.get('[name="save_account_details"]').click()

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')


    })
    // comando customizados

    it.only('Deve completar o pré-cadastro com sucesso usando Comando customizados', () =>{
        let fakeremail2 = faker.internet.email()
        cy.preCadastro(fakeremail2, 'senhaforte','Paulo','Dybala')

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')

    })
})