const router = require('express').Router();
const { Post, User } = require('../models');

// Render homepage with posts
router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });

        const posts = postData.map((post) => post.get({ plain: true }));

        res.render('homepage', {
            posts,
            logged_in: req.session.logged_in,  // Pass logged_in status
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Render login page
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/dashboard');  // Redirect to dashboard if already logged in
        return;
    }

    res.render('login');
});

// Render signup page
router.get('/signup', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/dashboard');  // Redirect to dashboard if already logged in
        return;
    }

    res.render('signup');
});

// Handle logout
router.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/');
    });
});

module.exports = router;