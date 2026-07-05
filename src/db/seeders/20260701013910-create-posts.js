export async function up (queryInterface, Sequelize) {
  const tags = 
  {
    "ia": {id: 1, name: "ia"},
    "meio-ambiente": {id:2, name: "meio-ambiente"},
    "sustentabilidade": {id:3, name: "sustentabilidade"},
    "educação": {id:4, name: "educação"},
    "aprendizado": {id:5, name: "aprendizado"},
  }
  const tagData = Object.keys(tags).map(name => {
    return {
      id: tags[name].id,
      name: name,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  });
  await queryInterface.bulkInsert('Tags', tagData);

  const postData = [
    {
      id: 1,
      title: 'Como o uso excessivo da Inteligência Artificial prejudica o nosso aprendizado',
      subtitle: "",
      imgSrc: `post-a.jpg`,
      content: `
        <section>
          <p>
            A Inteligência Artificial chegou para facilitar a vida de todo mundo. Em segundos, ela resolve exercícios, escreve textos, resume livros e responde praticamente qualquer pergunta. Mas será que essa facilidade toda está nos ajudando a aprender de verdade ou apenas nos ensinando a depender cada vez menos do nosso próprio raciocínio?
          </p>
          <p>Neste post, vamos entender por que o uso exagerado da IA pode prejudicar o aprendizado e como encontrar um equilíbrio saudável.</p>

          <h2 class="post-section-title">1. Aprender exige esforço — e a IA elimina esse esforço</h2>
          <p>
            Aprender algo novo é, por natureza, um processo que exige tentativa, erro e repetição. É justamente esse esforço mental que fortalece a memória e a compreensão. Quando a IA entrega a resposta pronta, esse processo é interrompido antes mesmo de começar. O cérebro não é desafiado, e sem desafio não há aprendizado consistente.
          </p>
          <p>É como tentar ganhar músculo sem levantar peso: só de olhar alguém treinando, você não fica mais forte.</p>

          <h2 class="post-section-title">2. O pensamento crítico vai enfraquecendo aos poucos</h2>
          <p>
            Quando a solução está sempre a um clique de distância, a tendência é parar de questionar, comparar informações e formular as próprias ideias. Com o tempo, isso pode reduzir a capacidade de análise e de resolução de problemas — habilidades essenciais tanto na vida acadêmica quanto profissional.
          </p>

          <h2 class="post-section-title">3. A sensação de "eu entendi" pode ser uma ilusão</h2>
          <p>
            Ler uma explicação bem escrita gerada por IA dá a impressão de que compreendemos o assunto. Mas existe uma diferença grande entre reconhecer uma explicação e ser capaz de reproduzi-la com as próprias palavras. Esse é o famoso efeito de "aprendizado ilusório": você sente que sabe, mas na hora da prova, da entrevista ou do trabalho prático, a informação simplesmente não vem.
          </p>

          <h2 class="post-section-title">4. A dependência tira a autonomia</h2>
          <p>
            Usar a IA para tudo, o tempo todo, cria uma espécie de "muleta mental". Aos poucos, a pessoa perde a confiança na própria capacidade de pensar sozinha e passa a recorrer à ferramenta até para tarefas simples. Isso reduz a autonomia intelectual, que é justamente uma das habilidades mais valorizadas hoje em dia.
          </p>

          <h2 class="post-section-title">5. Como usar a IA sem prejudicar o aprendizado</h2>
          <p>
            A boa notícia é que a IA não precisa ser vilã. O problema não é a ferramenta, é o modo como ela é usada. Algumas dicas simples ajudam a manter o equilíbrio:
          </p>
          <ul class="post-list">
            <li>Tente primeiro sozinho. Antes de perguntar para a IA, pense, escreva ou tente resolver por conta própria.</li>
            <li>Use a IA para revisar, não para substituir. Deixe que ela aponte erros ou sugira melhorias depois que você já fez sua parte.</li>
            <li>Peça explicações, não apenas respostas. Em vez de copiar a resposta pronta, peça para a IA explicar o raciocínio — e depois tente reproduzir esse raciocínio com suas próprias palavras.</li>
            <li>Reserve momentos "sem IA". Estudar, escrever ou resolver problemas sem nenhuma ajuda de vez em quando mantém sua mente em forma.</li>
          </ul>

          <h2 class="post-section-title">Conclusão</h2>
          <p>
            A Inteligência Artificial é uma ferramenta poderosa e pode, sim, ser uma grande aliada do aprendizado — desde que usada com consciência. O segredo está em não deixar que ela pense por nós, mas sim que ela nos ajude a pensar melhor. No fim das contas, o conhecimento que realmente fica é aquele que construímos com o nosso próprio esforço.
          </p>
        </section>`,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 2,
      title: 'Como o uso e desenvolvimento da IA impactam o meio ambiente',
      subtitle: "",
      imgSrc: `post-b.jpg`,
      content: `
        <section>
          <p>
            A Inteligência Artificial parece algo totalmente digital e "invisível": você digita uma pergunta, recebe uma resposta em segundos e pronto. Mas por trás dessa simplicidade existe uma estrutura física gigantesca — servidores, cabos, sistemas de refrigeração e uma quantidade enorme de energia elétrica. E isso tem um custo real para o meio ambiente.
          </p>
          <p>Neste post, vamos entender de onde vem esse impacto e por que ele merece nossa atenção.</p>

          <h2 class="post-section-title">1. Treinar uma IA consome uma quantidade enorme de energia</h2>
          <p>
            Antes de qualquer IA responder a uma única pergunta, ela passa por um processo chamado treinamento, no qual analisa bilhões de dados para "aprender" a se comunicar. Esse processo acontece em milhares de computadores potentes, ligados por dias ou semanas seguidas. O consumo de energia elétrica nessa etapa pode ser comparável ao de centenas de residências ao longo de um ano inteiro.
          </p>

          <h2 class="post-section-title">2. Cada pergunta que você faz também tem um custo energético</h2>
          <p>
            Depois de pronta, a IA continua consumindo energia toda vez que é usada. Isso porque cada resposta gerada exige processamento em data centers — os grandes "galpões" cheios de computadores que fazem a IA funcionar. Multiplicando isso por milhões de usuários fazendo perguntas o dia todo, o consumo de eletricidade se torna significativo.
          </p>

          <h2 class="post-section-title">3. Data centers também consomem muita água</h2>
          <p>
            Um detalhe que poucas pessoas conhecem: os data centers esquentam bastante e precisam ser resfriados constantemente. Em muitos casos, esse resfriamento é feito com água, em grandes volumes. Isso significa que, além de eletricidade, o uso intenso de IA também está ligado ao consumo de recursos hídricos — um recurso que já é escasso em diversas regiões do planeta.
          </p>

          <h2 class="post-section-title">4. A fabricação dos equipamentos também pesa</h2>
          <p>
            O impacto ambiental não vem apenas do uso da IA, mas também da produção dos componentes físicos que tornam tudo isso possível, como os chips especializados usados nos servidores. A fabricação desses equipamentos envolve mineração de metais raros, processos industriais poluentes e, depois de um tempo, o descarte de lixo eletrônico.
          </p>

          <h2 class="post-section-title">5. Nem tudo é negativo: a IA também pode ajudar o planeta</h2>
          <p>
            Apesar dos impactos, é importante lembrar que a IA também tem sido usada como aliada em causas ambientais, como no monitoramento de desmatamento, na previsão de eventos climáticos extremos e na otimização do consumo de energia em cidades e indústrias. Ou seja, a mesma tecnologia que gera impacto também pode ajudar a reduzi-lo, dependendo de como é aplicada.
          </p>

          <h2 class="post-section-title">6. O que podemos fazer com essa informação</h2>
          <p>
            Você não precisa parar de usar IA, mas pode usá-la de forma mais consciente:
          </p>
          <ul class="post-list">
            <li>Evite perguntas repetidas ou desnecessárias. Pense antes de gerar múltiplas respostas para a mesma dúvida.</li>
            <li>Prefira empresas que divulgam suas metas ambientais. Muitas companhias de tecnologia já publicam relatórios sobre eficiência energética e uso de energia renovável.</li>
            <li>Valorize o uso consciente, não o excesso. Assim como em outros hábitos digitais, moderação faz diferença no impacto coletivo.</li>
          </ul>

          <h2 class="post-section-title">Conclusão</h2>
          <p>
            A Inteligência Artificial trouxe avanços impressionantes, mas seu funcionamento depende de uma estrutura física que consome energia, água e recursos naturais. Entender esse custo invisível é o primeiro passo para usarmos essa tecnologia de forma mais responsável — aproveitando seus benefícios sem perder de vista o impacto que ela gera no planeta.
          </p>
        </section>`,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ];
  await queryInterface.bulkInsert('Posts', postData);

  const postTagsData = [
    {
      tagId: tags["educação"].id,
      postId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      tagId:tags["aprendizado"].id,
      postId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      tagId:tags["ia"].id,
      postId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      tagId:tags["ia"].id,
      postId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      tagId: tags["meio-ambiente"].id,
      postId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      tagId: tags["sustentabilidade"].id,
      postId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ];
  
  await queryInterface.bulkInsert('Post_Tags', postTagsData);
}

export async function down (queryInterface, Sequelize) {
  await queryInterface.bulkDelete('Tags', null, {});
  await queryInterface.bulkDelete('Posts', null, {});
  await queryInterface.bulkDelete('Post_Tags', null, {});
}
