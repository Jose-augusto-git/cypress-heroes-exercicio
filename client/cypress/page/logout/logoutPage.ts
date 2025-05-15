export class logoutPage{
    buttonLogout(){
        cy.get('nav > .flex > :nth-child(2) > .undefined').click()
    }

    checkEditNotVisible(){
        cy.log('Verificando se o botão editar não está presente na tela')
        cy.get("[data-cy='pencil']").should('not.exist')
    }

    checkDeleteNotVisible(){
        cy.log('Verificando se o botão de deletar não está presente na tela')
        cy.get("[data-cy='trash']").should('not.exist')
    }
}