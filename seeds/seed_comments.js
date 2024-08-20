const { Comment } = require('../models');

const commentData = [
    {
        comment_text: 'Great post! Really informative.',
        user_id: 2,  // Assumes the second user is commenting
        post_id: 1,  // Assumes the first post is being commented on
    },
    {
        comment_text: 'Thanks for sharing this!',
        user_id: 1,  // Assumes the first user is commenting
        post_id: 2,  // Assumes the second post is being commented on
    },
    // Add more comments as needed
];

const seedComments = async () => {
    await Comment.bulkCreate(commentData);
};

module.exports = seedComments;