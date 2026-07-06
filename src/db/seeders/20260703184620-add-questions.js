export async function up (queryInterface, Sequelize) {
    const questionsData = [
      "A IA realmente “entende” o que faz ou apenas reproduz padrões?",
      "A IA vai substituir meu emprego?",
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
      "Até o momento, a IA vem apresentar ser capaz de automatizar tarefas específicas, em especial as que são repetitivas e que se baseam em padroões ou as que são altamente formalizáveis. Essa taefa já é executada com grau aceitavel de confiabilidade. A Organização Internacional do Trabalho e a OCDE, apotam para questões que aumentam a complexidade do problema. Trabalhadores com maior escolaridade tendem a se beneficiar mais da IA. Já países e regiões com menor infraestrutura digital enfrentam riscos maiores de desemprego tecnológico sem compensação. O impacto é desigual por gênero, raça e território, pois reflete desigualdades pré-existentes no mercado de trabalho. No final, o fator decivo parece ser o pólitico e institucional, ou seja, o resultados vão depender do desenvolvimento de políticas publicas para mitigação do efeitos do uso da IA nas relações de trabalho.",
      "É fundamental primeiro o entendimento as crianças e jovens sobre o que de fato é a IA. A explicação técnica desmitifica e evita conclusões equivocadas e danosas ao desenvolvimento e a educação. Neste contexto, a IA deve ser considerada como uma ferramenta. A UNESCO depende a alfabetização do uso dessa ferramenta de forma transversal, ou seja, integrando às disciplinas como matemática, ciências, línguas e estudos sociais. Essa integração é importante uma vez que há indicios de que a IA pode sim pontencializar curriculos educacionais, mas também para o desenvolvimento do pensamento crítico a fim de validar os resultados produzidos pela IA e entendimento de que a ferramenta é um ponto de partida para estudos e investigações e não a fonte de uma resposta final.",
      "O consumo de energia das ferramentas de IA se concentram em dois aspectos do seu funcionamento. O primeiro, na origem do modelo de IA, é o treinamento. Esse processo utiliza milhares de peças de hardware como GPUs ou TPUs para o processamento em massa de dados no que envole trilhões de operações matemáticas. Isso tem um alto custo elétrico e que aumenta com base na quantidade de dados processado. O outro aspecto é a infraestrutura para treinar e manter o serviço da ferramenta. Essa infraestrutura toma a forma de data centers que são instalações que concentram o aparato técnico da IA. Essas instalações consomem grande quantidade de energia principalmente para o resfriamento dos hardwares instalados. No moldes atuais o consumo energético da IA é muitas vezes incompatível com os sistema de energia atuais.",
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
