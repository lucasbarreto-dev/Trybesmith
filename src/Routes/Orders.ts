import express from 'express';
import OrdersController from '../Controllers/OrdersController';

const ordersRouter = express.Router();

const ordersController = new OrdersController();

// REQUISITO 04
ordersRouter.get('/', ordersController.getAll);

// REQUISITO 08
ordersRouter.post('/');

export default ordersRouter;
