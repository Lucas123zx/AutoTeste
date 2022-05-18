/* global Given, Then, When */

import cadastro from'../pageobjects/registroPage'
const cadastrar = new cadastro

Given("esteje na tela de singup" , () => {
    cadastrar.acessarSiteSingup();
})

When("clicar em register" , () => {
    cadastrar.botaoRegistrar();
})

Then("deverá apresentar mensagem informando que campos são obrigatorios", () => {
    cadastrar.mensagemDadosObrigatorios();
})


Given("esteje na tela singnup" , () => {
    cadastrar.acessarSiteSingup();
})

When("digitar um email inválido" , () => {
    cadastrar.preencherCampos();
})

Then("deverá apresentar uma mensagem de email inválido" , () => {
    cadastrar.botaoRegistrar();
    cy.contains('ap-vmessage' , 'Invalid e-mail').should('be.visible')
})