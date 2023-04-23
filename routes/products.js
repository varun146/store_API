const express = require('express');
const router = express.Router();
const { addProduct, getAllProducts, getProduct, deleteProduct, updateProduct } = require('../controllers/products');


router.route('/api/v1/products').get(getAllProducts).post(addProduct);
router.route('/api/v1/products/:id').get(getProduct).patch(updateProduct).delete(deleteProduct);



module.exports = router;