const sequelize = require('../config/connection');
const { User } = require('../models');

const userData = [
    {
        username: 'JohnDoe',
        email: 'johndoe@example.com',
        password: 'password123',  // This will be hashed by the User model's hook
    },
    {
        username: 'JaneSmith',
        email: 'janesmith@example.com',
        password: 'password456',  // This will be hashed by the User model's hook
    },
    // Add more users as needed
];

const seedUsers = async () => {
    await sequelize.sync({ force: true });  // Recreate tables
    await User.bulkCreate(userData, {
        individualHooks: true,  // Ensures password hashing
        returning: true,
    });
};

module.exports = seedUsers;