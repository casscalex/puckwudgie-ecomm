const router = require('express').Router();
const { Product, Category } = require('../../models');


//get all products
router.get('/',  (req, res) => {
  Product.findAll()
    .then(dbProductData => res.json(dbProductData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//get 1 Product
router.get('/:id',  (req, res) => {
  Product.findOne({
    where: {
      id: req.params.id
    },
  })
  .then(dbProductData => {
    if (!dbProductData) {
      res.status(404).json({ message: 'Product not found!'});
      return;
    }
    res.json(dbProductData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

//create new Product
router.post('/', (req, res) => {
  // check the session
  if (req.session) {
    Product.create({
      product_name: req.body.product_name,
      description: req.body.description,
      img_url: req.body.img_url,
      price: req.body.price,
      stock: req.body.stock,
      category_id: req.body.category_id
    })
      .then(dbProductData => res.json(dbProductData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  }
});

//update a Product
router.put('/:id', (req, res) => {
  User.update({
    category_name: req.body.category_name,
    where: {
      id: req.params.id
    }
  })
  .then(dbProductData => {
    if (!dbProductData[0]) {
      res.status(404).json({ message: 'Product not found!' });
      return;
    }
    res.json(dbProductData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

//delete a Product
router.delete('/:id', (req, res) => {
  Product.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbProductData => {
      if (!dbProductData) {
        res.status(404).json({ message: 'Product not found!' });
        return;
      }
      res.json(dbProductData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


module.exports = router;