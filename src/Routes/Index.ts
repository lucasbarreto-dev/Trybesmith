import express from 'express';

import productsRouter from './Products';
import userRouter from './Users';
import ordersRouter from './Orders';
import loginRouter from './Login';

const router = express.Router();

router.use('/products', productsRouter);
router.use('/users', userRouter);
router.use('/orders', ordersRouter);
router.use('/login', loginRouter);

export default router;
