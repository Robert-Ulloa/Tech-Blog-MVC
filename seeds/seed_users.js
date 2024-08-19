const sequelize = require('../config/connection');
const { User } = require('../models');
 
const userData = [
    {
        username: 'JohnDoe',
        email: 'john.doe@example.com',
        password: 'password123',
    },
    {
        username: 'JaneDoe',
        email: 'jane.doe@example.com',
        password: 'password456',
    },
];

const seedUsers = async () => {
    await sequelize.sync({ force: true });
    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });
};

module.exports = seedUsers;