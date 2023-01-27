import express from 'express';
import UsersController from '../Controllers/UsersController';

const userRouter = express.Router();

const usersController = new UsersController();

// REQUISITO 03
userRouter.post('/', usersController.insert);

export default userRouter;
