import { accessSitePage } from "../page/accessSite/accessSitePage"
import { loginPage } from "../page/login/loginPage"
import { editRegisterHero } from "../page/editRegisterHero/editRegisterHeroPage"

const accessSite = new accessSitePage
const login = new loginPage
const editRegister = new editRegisterHero

describe('Editar Cadastro de Herói', () => {
  it('CT01 - Ao editar os dados de um herói e salvar, a alteração deve ser refletida na tela inicial', () => {
    accessSite.accessSite();

    login.buttonLogin();
    login.checkWinLogin();
    login.emailPasswordValidLogin();
    login.buttonSignIn();

    cy.get('a > .undefined').should('be.visible');

    editRegister.buttonEditHero();
    editRegister.checkAccessEditPage();
    editRegister.alterDateHero();
    editRegister.clickButtonSubmit();
    editRegister.checkAlterRegisterSave();
    

    
  })
})