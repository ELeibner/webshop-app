import { RequestHandler } from 'express';
import { Product } from '../database/product';

export const getProducts: RequestHandler = async (req, res) => {
    const products = await Product.find();

    res.status(200).json(products);
};

export const addProduct: RequestHandler = async (req, res) => {
    const product = await Product.create({
        name: req.body.name,
        description: req.body.description,
        qty: req.body.qty,
        picture: req.body.picture
    });

    res.status(200).json(product);
};
