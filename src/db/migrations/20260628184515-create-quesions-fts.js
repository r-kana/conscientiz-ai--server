  export async function up (queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
      CREATE VIRTUAL TABLE IF NOT EXISTS QuestionFTS 
      USING FTS5(
        content, 
        content='Questions',
        tokenize='unicode61 remove_diacritics 2', 
        prefix = '2 3 4'
      );
  `);
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.sequelize.query(`
      DROP TABLE IF EXISTS QuestionFTS;
    `);
}
