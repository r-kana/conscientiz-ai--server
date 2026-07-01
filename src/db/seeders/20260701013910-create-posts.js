
export async function up (queryInterface, Sequelize) {
  const tagNames = ["IA", "Educacao-midiatica", "Consumo-energetico", "Sustentabilidade", "Comportamento", "IA-Verde"]
  const tagData = tagNames.map(name => {
    return {
      name: name,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  });
  await queryInterface.bulkInsert('Tags', tagData, {returning: true});

  const template = {
    title: 'Título do Post',
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    createdAt: new Date(),
    updatedAt: new Date()
  };
  const postsData = [];
  for(let i=0;i<10;i++) postsData.push(template);
  await queryInterface.bulkInsert('Posts', postsData, {returning: true});

  const postTagsData = [];
  for(let postId=1;postId<postsData.length; postId++)
  {
    const tagId = Math.floor(Math.random() * tagNames.length);
    postTagsData.push({
      tagId: tagId ? tagId : 1, 
      postId: postId,
      createdAt: new Date(),
      updatedAt: new Date()
    })
  }
  await queryInterface.bulkInsert('Post_Tags', postTagsData);
}

export async function down (queryInterface, Sequelize) {
  await queryInterface.bulkDelete('Tags', null, {});
  await queryInterface.bulkDelete('Posts', null, {});
  await queryInterface.bulkDelete('Post_Tags', null, {});
}
