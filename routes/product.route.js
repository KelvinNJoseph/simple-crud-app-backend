const express = require('express');
const router = express.Router();
const Product = require('../models/product.model');
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/product.controller');


router.get('/', getProducts);

router.get('/:id', getProduct)

router.post('/', createProduct);

router.put('/:id', updateProduct);

router.delete('/:id', deleteProduct);



module.exports = router;