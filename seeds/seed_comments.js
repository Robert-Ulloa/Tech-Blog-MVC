const { Comment } = require('../models');

const commentData = [
    {
        content: 'Great post! Very informative.',
        user_id: 2,
        user_id: 1,
    },
    {
        content: 'Thanks for sharing this',
        user_id: 1,
        user_id: 2,
    },
];

const seedComments= () => Comment.bulkCreate(commentData);

module.exports = seedComments;