import { Request, Response } from 'express';
import UsersService from '../Services/UsersService';

export default class UserController {
  service: UsersService;

  constructor() {
    this.service = new UsersService();
  }

  insert = async (req: Request, res: Response) => {
    const { status, payload } = await this.service.insert(req.body);
    
    return res.status(status).json(payload);
  };
}