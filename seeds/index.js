const seedUsers = require('./seed_users');
const seedPosts = require('./seed_posts');
const seedComments = require('./seed_comments');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    await seedUsers();
    await seedPosts();
    await seedComments();
    process.exit(0);
};

seedAll();