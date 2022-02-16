const sequelize = require("../config/connection");

const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');
const seedUsers = require("./user-seeds");

const seedAll = async () => {
  await sequelize.sync({ force: false });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedProducts();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');
  
  process.exit(0);
};

seedAll();
