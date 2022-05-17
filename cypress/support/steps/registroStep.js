/* global Given, Then, When */

import cadastro from'../pageobjects/registroPage'
const cadastrar = new cadastro

Given("usuário esteje na pagína do alurapPic" , () => {
    cadastrar.acessarSite();
})

And("acesse registre now" , () => {
    cadastrar.registrarAgora();
})

When("clicar em register" , () => {
    cadastrar.botaoRegistrar();
})

Then("deverá apresentar uma mensagem de erro" , () => {
    cadastrar.mensagemEmail();
    cadastrar.mensagemDadosObrigatorios();
})