/* global Given, Then, When */

import cadastro from'../pageobjects/registroPage'
const cadastrar = new cadastro

Given("usuário esteje na pagina do alurapPic" , () => {
    cadastrar.acessarSite();
})

And("acesse registe now" , () => {
    cadastrar.registrarAgora();
})

When("clicar em register" , () => {
    cadastrar.botaoRegistrar();
})

Then("deverá apresentar uma mensagem de email é obrigatório" , () => {
    cadastrar.mensagemEmail();
    cadastrar.mensagemDadosObrigatorios();
})

Given("usuário esteje na pagina do alurapPic")