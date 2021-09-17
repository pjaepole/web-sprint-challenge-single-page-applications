describe('pizza order form',()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000/pizza');
    })
    //grabbing elem from DOM
    const nameInput=()=>cy.get('input[name=name]')
    const specialtextInput=()=>cy.get('Input[name=specialtext]')
    const beefCheckbox=()=>cy.get('input[name=beef]');
    const salamiCheckbox=()=>cy.get('input[name=salami]');
    const baconCheckbox=()=>cy.get('input[name=bacon]');
    const chickenCheckbox=()=>cy.get('input[name=chicken]');
    const sizeInput=()=>cy.get('#size-dropdown');
    const submitButton=()=>cy.get('button[name=orderbutton]')
    it('checking if i can put text in all the text type input box',()=>{
        nameInput()
        .should('exist')
        .type('thisIsName')
        .should('have.value','thisIsName')

    })

    it('checking if i can put text in all the text type input box',()=>{
        specialtextInput()
        .should('exist')
        .type('thisIsspecial input')
        .should('have.value','thisIsspecial input')

    })
    
    it('checks if i can select multiple topping',()=>{
        beefCheckbox()
        .click()
        .should('be.checked')
        chickenCheckbox()
        .click()
        .should('be.checked')
        baconCheckbox()
        .click()
        .should('be.checked')
        salamiCheckbox()
        .click()
        .should('be.checked')
    })




    it('check if i can submit the form after i fill out the form',()=>{
        submitButton()
        .should('be.disabled');
        nameInput()
        .type('jaehun')
        submitButton()
        .should('be.disabled');
        sizeInput()
        .select('small')
        .should('have.value','small')
        submitButton()
        .should('not.be.disabled')
        .click()
    })








})