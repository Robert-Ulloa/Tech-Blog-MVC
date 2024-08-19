const viewAuth = (req, res, next) => {
    if (!req.session.loggedIn) {
        res.redirect('/login');
    } else {
        nest ();
    }
};

module.exports = viewAuth;