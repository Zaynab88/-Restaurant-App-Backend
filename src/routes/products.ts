import express from 'express'
import { Product } from '../entities/Product';


const router = express.Router();


//get products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        return res.json(products);
    }
    catch (error) {
        console.log(error)
    }
})





export { router as productsRouter }
