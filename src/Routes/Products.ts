import express from 'express';
import ProductsController from '../Controllers/ProductsController';

const productsRouter = express.Router();

// REQUISITO 01
productsRouter.post('/');

// REQUISITO 02
const productsController = new ProductsController();

productsRouter.get('/', productsController.getAll);

export default productsRouter;
