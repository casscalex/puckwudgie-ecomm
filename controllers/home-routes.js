const router = require('express').Router();
const sequelize = require('../config/connection');
const { Product, Category, User } = require('../models');
const withAuth = require("../utils/auth");

// added withAuth requierment
router.get('/', (req, res) => {
  console.log(req.session);
  Product.findAll({
    attributes: [
      "id", 
      "product_name", 
      "description", 
      "img_url",
      "price",
      "stock",
    ],
    include: [
      {
        model: User,
        attributes: ['id', 'username'],
      },
      {
        model: Category,
        attributes: ['id', 'category_name']
      }
    ]
  })
  .then(dbProductData => {
    const products = dbProductData.map(product => product.get({ plain: true }));
    res.render('homepage', { products, loggedIn: req.session.loggedIn });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/store', withAuth, (req, res) => {
  console.log(req.session);
  Product.findAll({
    attributes: [
      "id", 
      "product_name", 
      "description", 
      "img_url",
      "price",
      "stock",
    ],
    include: [
      {
        model: User,
        attributes: ['id', 'username'],
      },
      {
        model: Category,
        attributes: ['id', 'category_name']
      }
    ]
  })
  .then(dbProductData => {
    const products = dbProductData.map(product => product.get({ plain: true }));
    res.render('store', { products, loggedIn: req.session.loggedIn });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login')
});

router.get('/product/:id', (req, res) => {
  Product.findOne({
    where: {
      id: req.params.id 
    },
    attributes: [
      "id", 
      "product_name", 
      "description", 
      "img_url",
      "price",
      "stock",
    ],
    include: [
      {
        model: User,
        attributes: ['id', 'username'],
      },
      {
        model: Category,
        attributes: ['id', 'category_name']
      }
    ]
  })
  .then(dbProductData => {
    if (!dbProductData) {
      res.status(404).json({ message: 'No product found with this id '});
      return;
    }

    const product = dbProductData.get({ plain: true });
    res.render('single-product', { product, loggedIn: req.session.loggedIn})
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;