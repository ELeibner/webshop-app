import { Router } from 'express';
import { body } from 'express-validator';
import { addProduct, getProducts } from '../handlers/product';
import validation from '../middlewares/input-validation';

const router = Router();

router.get('/products', getProducts);

router.post(
    '/product',
    body('name').isString(),
    body('description').isString(),
    body('qty').isNumeric(),
    body('picture').isString(),
    validation,
    addProduct
);

export default router;
