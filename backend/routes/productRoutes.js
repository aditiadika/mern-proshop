import express from 'express';
const router = express.Router();
import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

// @description     Fetch all product
// @description     Get /api/products
// @access          Public
router.get(
	'/',
	asyncHandler(async (req, res) => {
		const products = await Product.find({});
		res.json(products);
	})
);

// @description     Fetch single product
// @description     Get /api/products/:id
// @access          Public
router.get(
	'/:id',
	asyncHandler(async (req, res) => {
		const product = await Product.findById(req.params.id);

		if (product) {
			res.json(product);
		} else {
			res.status(404).json({ message: 'Product not found' });
		}
	})
);

export default router;
