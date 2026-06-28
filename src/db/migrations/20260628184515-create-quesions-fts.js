'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
      CREATE VIRTUAL TABLE IF NOT EXISTS QuestionFTS 
      USING fts5(content, content='Question', content_id='id');

      CREATE TRIGGER IF NOT EXISTS Question_ai AFTER INSERT ON Question BEGIN
        INSERT INTO QuestionFTS(rowid, content) VALUES (new.id, new.content);
      END;

      CREATE TRIGGER IF NOT EXISTS Question_ad AFTER DELETE ON Question BEGIN
        INSERT INTO QuestionFTS(QuestionFTS, rowid, content) VALUES('delete', old.id, old.content);
      END;

      CREATE TRIGGER IF NOT EXISTS Question_au AFTER UPDATE ON Question BEGIN
        INSERT INTO QuestionFTS(QuestionFTS, rowid, content) VALUES('delete', old.id, old.content);
        INSERT INTO QuestionFTS(rowid, content) VALUES (new.id, new.content);
      END;
  `);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
      DROP TABLE IF EXISTS QuestionFTS;
    `);
  }
};

