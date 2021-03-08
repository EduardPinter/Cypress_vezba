/// <reference types="Cypress" />

import { button } from '../page_objects/nextButton'
import { lettersAndSelectors } from "../page_objects/clickingLettersAndFillingSelector"

const data = require('../fixtures/data.json')

describe("Clicking Next button", () => {

before(() => {
    cy.visit('/')
}) 


it("clicking the next Button 5 times", ()=> {
    for(var i = 0; i < 5; i++){
        button.nextButtonClick();
    }
}) 

/* it("check assertation #1", () => {
    button.paragraph.should("contain", data.texts.textOne)
    button.title.should('contain', data.texts.titleOne)
    cy.wait(500)
    button.nextButtonClick()
})

it("check assertation #2", () => {
    button.paragraph.should("contain", data.texts.textTwo)
    button.title.should('contain', data.texts.titleTwo)
    cy.wait(500)
    button.nextButtonClick()
})

it("check assertation #3", () => {
    button.paragraph.should("contain", data.texts.textThree)
    cy.wait(500)
    button.title.should('contain', data.texts.titleThree)
    cy.wait(500)
    button.nextButtonClick()
})

it("check assertation #4", () => {
    cy.wait(500)
    button.paragraph.should("contain", data.texts.textFour)
    cy.wait(500)
    button.title.should('contain', data.texts.titleFour)
    cy.wait(500)
    button.nextButtonClick()
})

it("check assertation #5", () => {
    cy.wait(500)
    button.paragraph.should("contain", data.texts.textFive)
    cy.wait(500)
    button.title.should('contain', data.texts.titleFive)
    cy.wait(500)
    button.nextButtonClick()
}) */

it("Selecting values", () => {
    cy.wait(1000)
    cy.get(".btn").should("have.attr", "disabled")
    cy.wait(1000)
   cy.get(":nth-child(2) > .react-select-container > .react-select__control > .react-select__indicators > .react-select__indicator").click().type("6{enter}")
   cy.get(":nth-child(3) > .react-select-container > .react-select__control > .react-select__value-container").click().type("Below Average{enter}")
   lettersAndSelectors.typeEmail("ea@gmail.com")
   button.submitButtonClick()
   cy.wait(2000)
   cy.url().should("eq", "https://check.lexplore.com/read/check?mode=parent&grade=6&selfEstimate=0&email=ea%40gmail.com")
})

var number1 = Math.floor(Math.random() * 20);
var number2 = Math.floor(Math.random() * 20);
var number3 = Math.floor(Math.random() * 20);
var number4 = Math.floor(Math.random() * 20);
var number5 = Math.floor(Math.random() * 20);



it("checking multiple words", () => {
    lettersAndSelectors.stopReading.should("have.attr", "disabled")
    lettersAndSelectors.startReadingClick()
    lettersAndSelectors.readingLoop.should("have.attr", "disabled")
    lettersAndSelectors.letters.eq(number1).click()
    lettersAndSelectors.letters.eq(number2).click()
    lettersAndSelectors.letters.eq(number3).click()
    lettersAndSelectors.letters.eq(number4).click()
    lettersAndSelectors.letters.eq(number5).click()
    lettersAndSelectors.stopReadingClick()

})

var number6 = Math.floor(Math.random() * 20);
var number7 = Math.floor(Math.random() * 20);
var number8 = Math.floor(Math.random() * 20);
var number9 = Math.floor(Math.random() * 20);


it("checking multiple words #2", () => {
    lettersAndSelectors.stopReading.should("have.attr", "disabled")
    lettersAndSelectors.startReadingClick()
    lettersAndSelectors.readingLoop.should("have.attr", "disabled")
    lettersAndSelectors.letters.eq(number6).click()
    lettersAndSelectors.letters.eq(number7).click()
    lettersAndSelectors.letters.eq(number8).click()
    lettersAndSelectors.letters.eq(number9).click()
    lettersAndSelectors.stopReading.should("not.have.attr", "disabled")
    lettersAndSelectors.stopReadingClick()
})


it("Selecting values", () => {

    cy.get(':nth-child(1) > .space-y-1 > .react-select-container > .react-select__control > .react-select__value-container').click().type('Tennis Court{enter}')
    cy.get(':nth-child(2) > .space-y-1 > .react-select-container > .react-select__control > .react-select__value-container').click().type('People{enter}')
    cy.get(':nth-child(3) > .space-y-1 > .react-select-container > .react-select__control > .react-select__value-container').click().type('Measure Rainfall{enter}')
    cy.get(':nth-child(4) > .space-y-1 > .react-select-container > .react-select__control > .react-select__value-container').click().type('A school telescope{enter}')
    cy.get('.btn').click()

 })

 it("Restart the test", () => {
     cy.get(".btn").click()
     cy.url().should("eq", "https://check.lexplore.com/read")
 })




})