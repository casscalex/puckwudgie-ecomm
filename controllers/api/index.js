const router = require('express').Router();

const productRoutes = require('./product-routes');
const categoryRoutes = require('./category-routes');
const userRoutes = require('./user-routes');

router.use('/product', productRoutes);
router.use('/category', categoryRoutes);
router.use('/user', userRoutes);

module.exports = router;