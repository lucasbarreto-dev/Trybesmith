import { Request, Response } from 'express';
import OrdersService from '../Services/OrdersService';

export default class OrdersController {
  service: OrdersService;

  constructor() {
    this.service = new OrdersService();
  }

  // REQUISITO 04
  getAll = async (_req: Request, res: Response) => {
    const { status, payload } = await this.service.getAll();

    return res.status(status).json(payload);
  };

  // REQUISITO 08
  insert = async (req: Request, res: Response) => {
    const { id } = req.user;
    const { productsIds } = req.body;
    
    const { status, payload } = await this.service.insertAndUpdate(id, productsIds);

    return res.status(status).json(payload);
  };
}
