import { Request, Response } from 'express';
import Service from '../Services/UsersService';

export default class UserController {
  service: Service;

  constructor() {
    this.service = new Service();
  }

  insert = async (req: Request, res: Response) => {
    const { status, payload } = await this.service.insert(req.body);
    
    return res.status(status).json(payload);
  };

  login = async (req: Request, res: Response) => {
    const { status, payload } = await this.service.login(req.body);
    
    return res.status(status).json(payload);
  };
}