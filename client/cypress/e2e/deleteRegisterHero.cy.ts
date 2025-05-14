import { accessSitePage } from "../page/accessSite/accessSitePage"
import { loginPage } from "../page/login/loginPage"
import { createHeroPage } from "../page/createHero/createHeroPage"

const accessSite = new accessSitePage
const login = new loginPage
const createHero = new createHeroPage

describe('Realizar um novo cadastro de herói', () => {
  it('CT01 - Ao salvar o cadastro o herói precisa aparecer na tela inicial ', () => {
    accessSite.accessSite();

    login.buttonLogin();
    login.checkWinLogin();
    login.emailPasswordValidLogin();
    login.buttonSignIn();

    cy.get('a > .undefined').should('be.visible');
    
    
  })
})