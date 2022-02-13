const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Men',
  },
  {
    category_name: 'Women',
  },
  {
    category_name: 'Kids',
  }  
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
