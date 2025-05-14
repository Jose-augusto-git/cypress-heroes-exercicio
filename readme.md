# 📖 Casos de Teste Automatizados

Este projeto contém automações E2E desenvolvidas com Cypress para validar as principais funcionalidades do sistema.

---

## 📝 Funcionalidades Testadas

| Funcionalidade               | Código | Cenário                                                                                         | Resultado Esperado                                                                 |
|:----------------------------|:--------|:------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------|
| **Deletar Herói**             | CT01     | Ao deletar um herói, ele deve ser removido da tela inicial.                                      | O card do herói excluído não deve mais aparecer no site.                         |
| **Editar Cadastro de Herói** | CT01     | Ao editar os dados de um herói e salvar, a alteração deve ser refletida na tela inicial.         | Os dados atualizados devem aparecer imediatamente no card do herói.              |
| **Contratar Herói**           | CT01     | Ao clicar no ícone de dinheiro de um herói, a quantidade de contratações deve ser incrementada.  | A quantidade de contratações deve aumentar em 1 e atualizar no card.             |
| **Logout e Restrições**       | CT01     | Ao sair da conta, o botão de deletar herói não deve estar mais disponível na interface.          | O botão de exclusão deve desaparecer e não estar acessível para nenhum herói.    |

---

## 📌 Observações

- Todos os testes são executados diretamente na interface web, simulando ações de usuário real.
- Os testes foram implementados considerando o comportamento visual e funcional da aplicação.

