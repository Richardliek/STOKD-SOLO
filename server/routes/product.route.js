const productController = require('../controllers/product.controller');

// this are event listeners
module.exports = function (app) {
  app.get('/api/products', productController.getAllProd);
  app.post('/api/products/new', productController.createProd);
  app.get('/api/products/:id', productController.getProd);
  app.put('/api/products/:id/edit', productController.updateProd);
  app.delete('/api/products/:id/delete', productController.deleteProd);
};

