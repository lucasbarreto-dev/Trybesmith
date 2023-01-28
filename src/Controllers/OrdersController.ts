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
}