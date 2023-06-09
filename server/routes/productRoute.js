import express from 'express'
import { createProducts, deleteProduct, getAllProducts, productDetails, productUpdate } from '../controllers/productController.js'
const router = express.Router()

router.get('/products', getAllProducts)
router.post('/product/new', createProducts)
router.put('/product/:id', productUpdate)
router.delete('/product/:id', deleteProduct)
router.get('/product/:id',productDetails)

export const product = router