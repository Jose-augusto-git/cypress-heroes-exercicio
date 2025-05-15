import { accessSitePage } from "../page/accessSite/accessSitePage"
import { loginPage } from "../page/login/loginPage"
import { logoutPage } from "../page/logout/logoutPage"

const accessSite = new accessSitePage
const login = new loginPage
const logout = new logoutPage


describe('O botão de exclusão deve desaparecer e não estar acessível para nenhum herói.', () => {
  it('CT01 - Ao sair da conta, o botão de deletar herói não deve estar mais disponível na interface.', () => {
    accessSite.accessSite();

    login.buttonLogin();
    login.checkWinLogin();
    login.emailPasswordValidLogin();
    login.buttonSignIn();

    cy.get('a > .undefined').should('be.visible');

    logout.buttonLogout();
    logout.checkEditNotVisible();
    logout.checkDeleteNotVisible();
    

    
  })
})