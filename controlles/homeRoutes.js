const router = require('express').Router();
const { Post, User } = require('../models');
const { getAttributes } = require('../models/User');

router.get('/', async (req, res) => {
    try {
        const postData = await Post.FindAll({
            include: [
                {
                    model: User,
                    getAttributes: ['username'],
                },
            ],
        });

        const post = postData.map((post) => post.get({plain: true}));

        res.render('homeoage', {
            post, 
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

//other home-related routes...

module.exports = router; 