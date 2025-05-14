export class editRegisterHero{
    buttonEditHero(){
        cy.get("[data-cy='pencil']").eq(0).click()
    }

    checkAccessEditPage(){
        cy.location('pathname').should('equal','/heroes/1/edit')
    }

    alterDateHero(){
        cy.get("[name='name']").clear().type('Purple Man')
        cy.get("[name='price']").clear().type('1000')
        cy.get("[name='fans']").clear().type('2539')
        cy.get("[name='saves']").clear().type('656365000')
    }

    clickButtonSubmit(){
        cy.get('.max-w-\\[100px\\]').click()

    }

    checkAlterRegisterSave(){
        cy.get("[data-cy='hero-card']").first().within(() =>{
            cy.contains('Purple Man').should("exist");
            cy.contains('1.000').should("exist");
            cy.contains('2.539').should("exist");
            cy.contains('6.563,65M').should("exist");
        })
     
    }



}