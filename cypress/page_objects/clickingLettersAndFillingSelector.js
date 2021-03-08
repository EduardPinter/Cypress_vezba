class LettersAndSelectors {
    get letters(){
        return cy.get('button[class="btn hover:shadow-lg active:shadow-inner  p-1 text-lg bg-transparent border-transparent hover:text-gray-800"]')
    }

    get email(){
        return cy.get("input[type=email]")
    }

    get startReading(){
        return cy.contains("Start reading")
    }

    get stopReading(){
        return cy.contains("Stop reading")
    }

    get readingLoop(){
        return cy.contains("Reading")
    }

    stopReadingClick(){
        this.stopReading.click()
    }

    startReadingClick(){
        this.startReading.click()
    }

    typeEmail(email){
        this.email.type(email)
    }
}

export const lettersAndSelectors = new LettersAndSelectors()