export async function up (queryInterface, Sequelize) {
    const questionsData = [
      "A IA realmente “entende” o que faz ou apenas reproduz padrões?",
      "A IA vai substituir meu emprego?",
      "Como distinguir conteúdo verdadeiro de conteúdo gerado por IA?",
      "Como preparar crianças e jovens para conviver com sistemas inteligentes?",
      "O consumo energético da IA é sustentável?",
    ].map((content, index) => {
      return {
        id: index+1,
        name: "Pessoa Exemplo",
        email: "email@exemplo.com",
        content: content,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    });
    await queryInterface.bulkInsert('Questions', questionsData);

    const answersData = [
      "Não. As IAs como o ChatGPT e similares são modelos de linguagem treinados para prever a sequẽncia de palavras mais provável dadas as entradas anteriores. Como resultado o modelo é capaz de idẽntificar os padrões complexos da sintaxe e semântica e formular uma resposta com base nesses mesmos padrões. Mas essa proficiência não garante aos modelos um entendimento genuíno do mundo ou dos significados subjacente. Eles operam simplesmente por correlações estatísticas entre as palavras.",
      "A IA vai substituir meu emprego?",
      "Como distinguir conteúdo verdadeiro de conteúdo gerado por IA?",
      "Como preparar crianças e jovens para conviver com sistemas inteligentes?",
      "O consumo energético da IA é sustentável?",
    ].map((content, index) => {
      return {
        id: index+1,
        questionId: index+1,
        content: content,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    });
    await queryInterface.bulkInsert('Answers', answersData);
  }

export async function down (queryInterface, Sequelize) {
  await queryInterface.bulkDelete('Questions', null, {});
  await queryInterface.bulkDelete('Answers', null, {});
}
