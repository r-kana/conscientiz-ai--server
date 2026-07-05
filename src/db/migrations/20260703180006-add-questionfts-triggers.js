export async function up (queryInterface, Sequelize) {
  await queryInterface.sequelize.query(`
    CREATE TRIGGER IF NOT EXISTS Question_ai AFTER INSERT ON Questions BEGIN
      INSERT INTO QuestionFTS(rowid, content) VALUES (new.id, new.content);
    END;
          

    CREATE TRIGGER IF NOT EXISTS Question_ad AFTER DELETE ON Questions BEGIN
      INSERT INTO QuestionFTS(QuestionFTS, rowid, content) VALUES('delete', old.id, old.content);
    END;
          

    CREATE TRIGGER IF NOT EXISTS Question_au AFTER UPDATE ON Questions BEGIN
      INSERT INTO QuestionFTS(QuestionFTS, rowid, content) VALUES('delete', old.id, old.content);
      INSERT INTO QuestionFTS(rowid, content) VALUES (new.id, new.content);
    END;
  `);
}

export async function  down (queryInterface, Sequelize) {
  await queryInterface.sequelize.query(`
    DROP TRIGGER IF EXISTS Question_ai;
    DROP TRIGGER IF EXISTS Question_ad;
    DROP TRIGGER IF EXISTS Question_au;
  `);
}

