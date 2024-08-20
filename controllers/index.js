const router = require('express').Router();
const apiRoutes = require('./API'); 
const homeRoutes = require('./homeRoutes');
const dashboardRoutes = require('./dashboardRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes); 
router.use('/dashboard', dashboardRoutes);

module.exports = router;