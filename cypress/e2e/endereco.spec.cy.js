/// <reference types="cypress" />
import EnderecoPage from '../support/page-objects/endereco.page'
const dadosEndereco = require('../fixtures/endereco.json')

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {

    beforeEach('', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/my-account/')
        cy.fixture('perfil').then(dados =>{
            cy.login(dados.usuario, dados.senha)

        })
       
    })

    it('Deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento('Vinicius','Júnior','Real Madrid','Brasil','rocinha 95','rio de janeiro','rio de janeiro','52888120','21995266558','vjr@gmail.com')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
        
    });
    
    it.only('Deve fazer cadastro de faturamento com sucesso - USANDO ARQUIVO DE DADOS', () => {
        EnderecoPage.editarEnderecoFaturamento(
            dadosEndereco[0].nome,
            dadosEndereco[0].Sobrenome,
            dadosEndereco[0].empresa,
            dadosEndereco[0].pais,
            dadosEndereco[0].endereco,
            dadosEndereco[0].cidade,
            dadosEndereco[0].estado,
            dadosEndereco[0].cep,
            dadosEndereco[0].telefone,
            dadosEndereco[0].email
        
        )
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
        
    });
    
});