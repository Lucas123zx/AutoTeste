/// <reference types="Cypress" />

import registroElements from '../elements/registroElements'
const camposRegistro = new registroElements
const url = Cypress.config("baseUrl")

class registroPage {
    acessarSite() {
        //Acessar site do ALura Pic
        cy.visit(url)
    }

    registrarAgora() {
        //Cadastra-se no site do Alura Pic
        cy.contains(camposRegistro.linkregistrar()).click()
    }

    botaoRegistrar() {
        cy.get(camposRegistro.registrar()).click()
    }

    mensagemEmail() {
        cy.contains(camposRegistro.emailObrigatorio()).should('be.visible')

    }

    mensagemDadosObrigatorios(){
        this.botaoRegistrar();
        cy.contains(camposRegistro.nomeCompletoObrigatorio()).should('be.visible')
        cy.contains(camposRegistro.nomeUsuarioObrigatorio()).should('be.visible')
        cy.contains(camposRegistro.senhaObrigatoria()).should('be.visible')
    }
}

export default registroPage;
    