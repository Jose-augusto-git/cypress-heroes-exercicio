let contadorCadastro:number;

export class createHeroPage{
    butttonCreateNewHero(){
        cy.get("[href='/heroes/new']").click()
    }

    checkAccessCreateHeroPage(){
        cy.location('pathname').should('equal','/heroes/new')
    }

    inputNameHero(){
        cy.get("[name='name']").type('dev QA')
    }

    numbersInputHero(){
        cy.get("[name='price']").type('200')
        cy.get("[name='fans']").type('300')
        cy.get("[name='saves']").type('400')
    }

    selectPowerHero(){
        cy.get('[data-cy="powersSelect"]').select('4')

    }
    
    clickButtonSubmit(){
        cy.get('button').eq(2).click()

    }

    checkNumberRegister(){
        cy.get("[data-cy='hero-card']").last().within(() =>{
            cy.contains("dev QA").should("exist");
            cy.contains("$200").should("exist");
            cy.contains("300").should("exist");
            cy.contains("400").should("exist");
            cy.contains("Invisibility").should("exist");
        })
     
    }


}