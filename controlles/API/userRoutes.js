const router = require('express').Router();
const { User } = require('../models');
const bcrypt = require('bcrypt');

//Sing up route 

router.post('/signup', async (req, res) =>{
    try {
        const newUser = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });

        req.session.save(() => {
            req.session.user_id = newUser.id;
            req.session.loggedIn = true;

            req.statusCode(200).json(newUser);
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

//Login route

router.post('./login', async  (req, res) => {
    try {
        const user = await User.findOne({where: {email: req.body.email} });

        if (!user) {
            res.status(400).json({ message: 'No user found with this email!' });
            return;
        }

        const validPassword = await bcrypt.compare(req.body.password, user.password);

        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect password!' });
            return;
        }

        req.session.save(() => {
            req.session.user_id = user.id;
            req.session.loggedIn = true;

            res.status(200).json({ user, message: ' You are now logged in!' });
        });
    } catch (err) {
        res.status(500). json(err);
    }
});

module.exports = router;