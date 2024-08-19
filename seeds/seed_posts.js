const { Post } = require('../models');

const postData = [
    {
        title: 'Understanding MVC Architecture',
        content: 'MVC acquitecture divides an application into three interconnected components: Model, View, and Controller...',
        user_id: 1,
    },
    {
        title: 'Why JavaScript is awesome',
        content: 'JavaScript is a versatile language that can be used for both frontend and backend development...',
        user_id: 2,
    },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;