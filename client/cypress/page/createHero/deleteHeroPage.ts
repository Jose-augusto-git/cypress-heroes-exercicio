export class deleteHeroPage{
    buttonTrash(){
        cy.get("[data-cy='trash']").eq(6).click()
    }

    checkWinDeleteHeroOpen(){
        cy.get('.modal').should('be.visible');
    }

    checkButtonsWinDeleteHero(){
        cy.get('.bg-red-600').should('be.visible');
        cy.get('.gap-4 > .gap-2 > .text-gray-800').should('be.visible')
    }

    buttonYesDeleteHero(){
        cy.get('.bg-red-600').click();
    }

    checkDeleteRegister(){
        cy.get("[data-cy='hero-card']").last().within(() =>{
            cy.contains("dev QA").should("not.exist");
            cy.contains("$200").should("not.exist");
            cy.contains("300").should("not.exist");
            cy.contains("400").should("not.exist");
            cy.contains("Invisibility").should('not.exist');
        })
     
    }


}