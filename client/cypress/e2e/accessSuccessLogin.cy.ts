import { accessSitePage } from "../page/accessSite/accessSitePage"
import { loginPage } from "../page/login/loginPage"

const accessSite = new accessSitePage
const login = new loginPage

describe('Login com informações validas', () => {
  it('CT01 - O site precisa permitir o acesso ao site ', () => {
      accessSite.accessSite();

    login.buttonLogin();
    login.checkWinLogin();
    login.emailPasswordValidLogin();
    login.buttonSignIn();

    cy.get('a > .undefined').should('be.visible')
    
  })
})