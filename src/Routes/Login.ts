import express from 'express';
import UserController from '../Controllers/UsersController';
import validation from '../Middlewares/Login';

const loginRouter = express.Router();

const userController = new UserController();

// REQUISITO 05
loginRouter.post('/', validation, userController.login);

export default loginRouter;
