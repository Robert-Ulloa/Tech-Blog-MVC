const sequelize = require('../config/connection');
const seedUsers = require('./seed_users');
const seedPosts = require('./seed_posts');
const seedComments = require('./seed_comments');

const seedAll = async () => {
    await sequelize.sync({ force: true });  // Recreate tables
    console.log('Database synced!');

    await seedUsers();
    console.log('Users seeded!');

    await seedPosts();
    console.log('Posts seeded!');

    await seedComments();
    console.log('Comments seeded!');

    process.exit(0);
};

seedAll();