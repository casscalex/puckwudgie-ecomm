const User = require('./User');
const Category = require('./Category');
const Product = require('./Product');


// Products belongsTo Category
Product.belongsTo(Category, {
    foreignKey: 'category_id'
  });

 // Categories have many Products
  Category.hasMany(Product, {
    foreignKey: 'category_id'
  });
  
  // Products belongsTo one user
  Product.belongsTo(User, {
    foreignKey: 'user_id', 
    // onDelete: "SET NULL"
  }) 
  
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

