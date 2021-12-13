/// <reference types="Cypress" />

describe("renders the home page", () =>{

    beforeEach('login', () =>{
        cy.visit('/login')
        cy.get(':nth-child(1) > input').type('djordjino@gmail.com')
        cy.get(':nth-child(2) > input').type('djole123')
        cy.get('.btn').click()
    })

    it('set token', () => {
        
    })

    it('check date', () => {
        cy.get('[href="/add-experience"]').click()
        cy.get(':nth-child(6) > input').type('2020-12-03')
    })
})