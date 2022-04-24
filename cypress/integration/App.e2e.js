
describe('Home page', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it('check select radio answer', () => {
        cy.get('[data-cy=RadioAnswer]')
            .eq(1)
            .click()
    })
    it('check select checkbox answer', () => {
        cy.get('[data-cy=CheckboxAnswer]')
            .eq(1)
            .click()
    })
    it('check select checkbox answers', () => {
        cy.get('[data-cy=CheckboxAnswer]')
            .eq(1)
            .click()
        cy.get('[data-cy=CheckboxAnswer]')
            .eq(2)
            .click()
    })
    it('check switch theme', () => {
        cy.get('[data-cy=SunIcon]')
        cy.get('[data-cy=ThemeBtn]')
            .click()
        cy.get('[data-cy=MoonIcon]')
    })
})

describe('Editor page', () => {
    beforeEach(() => {
        cy.visit('/editor')
    })
    it('check switch theme', () => {
        cy.get('[data-cy=SunIcon]')
        cy.get('[data-cy=ThemeBtn]')
            .click()
        cy.get('[data-cy=MoonIcon]')
    })
    it('check enter title question', () => {
        cy.get('[data-cy=QuestionTitle]')
            .eq(0)
            .click()
            .type('How are you?')
        cy.get('[data-cy=Header]')
    })
    it('check add answer', () => {
        cy.get('[data-cy=AddAnswerBtn]')
            .eq(0)
            .click()
    })
    it('enter answer text', () => {
        cy.get('[data-cy=AddAnswerBtn]')
            .eq(0)
            .click()
        cy.get('[data-cy=Answer]')
            .eq(1)
            .type('Fine!')
    })
    it('delete answer', () => {
        cy.get('[data-cy=AddAnswerBtn]')
            .eq(0)
            .click()
        cy.get('[data-cy=DeleteAnwerBtn]')
            .eq(1)
            .click()
    })
    it('delete question', () => {
        cy.get('[data-cy=DeleteQuestionBtn]')
            .eq(0)
            .click()
    })
    it('add radio question', () => {
        cy.get('[data-cy=AddQuestionBtn]')
            .trigger('mouseover')
        cy.get('[data-cy=AddRadioQuestionBtn]')
            .click()
        cy.get('[data-cy=DeleteQuestionBtn]')
            .should('have.length', 3)
    })
})