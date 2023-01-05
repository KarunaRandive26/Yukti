const express = require('express');
const router = express.Router();
require('../database/connection');

const products = require("../model/productSchema");
router.get('/products', (req, res) => {
    res.send('products');
});
module.exports = router
//add Product


