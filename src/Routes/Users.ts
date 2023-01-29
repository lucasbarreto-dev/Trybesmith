import express from 'express';
import UsersController from '../Controllers/UsersController';
import validate from '../Middlewares/User';

const userRouter = express.Router();

const usersController = new UsersController();

// REQUISITO 03
userRouter.post('/', validate, usersController.insert);

export default userRouter;
