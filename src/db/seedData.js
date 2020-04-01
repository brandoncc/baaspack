const seedData = async (models) => {
  await models.messages.deleteAll();

  // const user1 = await models.User.create({ username: 'Rotschy' });
  // const user2 = await models.User.create({ username: 'Moskovich' });

  await models.messages.create({
    // user: user1.id,
    text: 'The first message is the hardest',
  });

  await models.messages.create({
    // user: user1.id,
    text: 'The second message is also tough',
  });

  await models.messages.create({
    // user: user2.id,
    text: 'The third brings surprises',
  });
};


export default seedData;
