const Category = require('./Category');
const Product = require('./Product');
const User = require('./User');

// Products belongsTo Category
Product.belongsTo(Category, {
    foreignKey: 'category_id'
  });

  // Products belongsTo one user
  Product.belongsTo(User, {
    foreignKey: 'product_id', 
    // onDelete: "SET NULL"
  })
  
  // Categories have many Products
  Category.hasMany(Product, {
    foreignKey: 'category_id'
  });
  
  // User have many Products
  User.hasMany(Product, {
    foreignKey: 'user_id'
  });

  // Products 

    module.exports = {
    Product,
    Category,
    User    
  };

