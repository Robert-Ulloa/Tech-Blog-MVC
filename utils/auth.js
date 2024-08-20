const withAuth = (req, res, next) => {
    if (!req.session.logged_in) {
        res.redirect('/login');  // Redirect to login page if not logged in
    } else {
        next();  // Continue to the next middleware/route handler
    }
};

module.exports = withAuth;