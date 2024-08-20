const { Post } = require('../models');

const postData = [
    {
        title: 'Understanding MVC Architecture',
        content: 'Model-View-Controller (MVC) architecture is a software design pattern...',
        user_id: 1,  // Assumes the first user is the author
    },
    {
        title: 'JavaScript: The Good Parts',
        content: 'JavaScript is a versatile and powerful language that is essential for web development...',
        user_id: 2,  // Assumes the second user is the author
    },
    // Add more posts as needed
];

const seedPosts = async () => {
    await Post.bulkCreate(postData);
};

module.exports = seedPosts;