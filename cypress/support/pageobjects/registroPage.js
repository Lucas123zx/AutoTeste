/// <reference types="Cypress" />

import registroElements from '../elements/registroElements'
const camposRegistro = new registroElements
const url = Cypress.config("baseUrl")

class registroPage {
    acessarSiteSingup() {
        //Acessar site do ALura Pic
        cy.visit(url)
    }

    botaoRegistrar() {
        cy.get(camposRegistro.registrar()).click()
    }

    mensagemDadosObrigatorios(){
        this.botaoRegistrar();
        cy.contains(camposRegistro.emailObrigatorio()).should('be.visible')
        cy.contains(camposRegistro.nomeCompletoObrigatorio()).should('be.visible')
        cy.contains(camposRegistro.nomeUsuarioObrigatorio()).should('be.visible')
        cy.contains(camposRegistro.senhaObrigatoria()).should('be.visible')
    }

    preencherCampos(){
        cy.get(camposRegistro.campoEmail()).type('Juuulia')
    }
}

export default registroPage;
    