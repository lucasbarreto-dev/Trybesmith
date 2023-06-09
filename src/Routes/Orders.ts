import express from 'express';
import OrdersController from '../Controllers/OrdersController';
import checkProductsIds from '../Middlewares/ProductsIds';
import validate from '../auth/Validate';

const ordersRouter = express.Router();

const ordersController = new OrdersController();

// REQUISITO 04
ordersRouter.get('/', ordersController.getAll);

// REQUISITO 08
ordersRouter.post('/', validate, checkProductsIds, ordersController.insert);

export default ordersRouter;
