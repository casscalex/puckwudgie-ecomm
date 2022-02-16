const { Product } = require('../models');

const productData = [
  {
    product_name: 'Running Sneakers, 1',
    price: 90.0,
    stock: 25,
    category_id: 1,
    description: 'lorem ipsum',
    img_url: '1.png'
  },
  {
    product_name: 'Running Sneakers, 2',
    price: 90.0,
    stock: 25,
    category_id: 1,
    description: 'lorem ipsum',
    img_url: '2.png'
  },
  {
    product_name: 'Running Sneakers, 3',
    price: 90.0,
    stock: 25,
    category_id: 2,
    description: 'lorem ipsum',
    img_url: '3.png'
  },
  {
    product_name: 'Running Sneakers, 4',
    price: 90.0,
    stock: 25,
    category_id: 2,
    description: 'lorem ipsum',
    img_url: '4.png'
  },
  {
    product_name: 'Running Sneakers, 5',
    price: 90.0,
    stock: 25,
    category_id: 3,
    description: 'lorem ipsum',
    img_url: '5.png'
  },
  {
    product_name: 'Running Sneakers, 6',
    price: 90.0,
    stock: 25,
    category_id: 3,
    description: 'lorem ipsum',
    img_url: '6.png'
  },
  {
    product_name: 'Running Sneakers, 7',
    price: 90.0,
    stock: 25,
    category_id: 2,
    description: 'lorem ipsum',
    img_url: '7.png'
  },
  {
    product_name: 'Running Sneakers, 8',
    price: 90.0,
    stock: 25,
    category_id: 1,
    description: 'lorem ipsum',
    img_url: '8.png'
  }  
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
