import express from 'express';
import ProductsController from '../Controllers/ProductsController';

const productsRouter = express.Router();

const productsController = new ProductsController();

// REQUISITO 01
productsRouter.post('/', productsController.insert);

// REQUISITO 02
productsRouter.get('/', productsController.getAll);

export default productsRouter;
