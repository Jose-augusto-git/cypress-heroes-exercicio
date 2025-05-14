import { accessSitePage } from "../page/accessSite/accessSitePage"
import { loginPage } from "../page/login/loginPage"
import { deleteHeroPage } from "../page/createHero/deleteHeroPage"

const accessSite = new accessSitePage
const login = new loginPage
const deleteHero = new deleteHeroPage


describe('Deletar heroi que foi criado', () => {
  it('CT01 - Ao deletar o heroi, ele não pode aparecer no site', () => {
    accessSite.accessSite();

    login.buttonLogin();
    login.checkWinLogin();
    login.emailPasswordValidLogin();
    login.buttonSignIn();

    cy.get('a > .undefined').should('be.visible');

    deleteHero.buttonTrash();
    deleteHero.checkButtonsWinDeleteHero();
    deleteHero.buttonYesDeleteHero();
    deleteHero.checkDeleteRegister();
    
    
    
  })
})