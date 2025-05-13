export class loginPage{
    buttonLogin(){
        cy.get('button').eq(0).click()
    }

    checkWinLogin(){
        cy.get('.open').eq(1).should('be.visible')
    }

    emailPasswordValidLogin(){
        cy.get("[name='email']").type('admin@test.com')
        cy.get("[name='password']").type('test123')
    }

    emailPasswordInvalidLogin(){
        cy.get("[name='email']").type('adin@test.com')
        cy.get("[name='password']").type('test12')
    }

    buttonSignIn(){
        cy.get('button').eq(15).click()
    }

    alertTextLogin(){
        cy.get('.text-red-500').should('be.visible')
    }
}