class Button {

    get nextButton() {
        return cy.contains('Next')
    }

    get submitButton(){
        return cy.get("button[type=button]")
    }

    get paragraph(){
        return cy.get("p")
    }

    get title(){
        return cy.get("h1.text-2xl")
    }
    
    nextButtonClick() {
        this.nextButton.click()
    }

    submitButtonClick(){
        this.submitButton.click()
    }


}

export const button = new Button()