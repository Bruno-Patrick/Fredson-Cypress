/// <reference types="cypress" />

let user = "user.cypress"+Math.random();
describe('Página de Cadastro', () => {
    it("Login", () => {
        cy.visit('http://localhost:8000/cadastro/')
        cy.get('#id_username').type(user)
        cy.get('#id_password1').type("senhadocy99")
        cy.get('#id_password2').type("senhadocy99")
        cy.get('[type=submit]').click()
    })
})

describe('Página de Login', () => {
    it("Login", () => {
        cy.get('#id_login').type(user)
        cy.get('#id_password').type("senhadocy99")
        cy.get('[type=submit]').click()
    })
})

describe('Página Inicial', () => {
    it("Criar cards e preencher", () => {
        cy.get('.to-do > .btn').click()
        cy.get('.to-do > .btn').click()
        cy.get('.to-do > .btn').click()
    })
})
describe('Página Inicial', () => {
    it("Preencher o card", () => {
        cy.get(':nth-child(1) > .content > #conteudo').type("Teste automatizado do cypress")
    })
})