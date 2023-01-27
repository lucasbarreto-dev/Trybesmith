import { Request, Response } from 'express';
import ProductsService from '../Services/ProductsService';

// REQUISITO 01
export default class ProductsController {
  service: ProductsService;
  
  constructor() {
    this.service = new ProductsService();
  }

  insert = async (req: Request, res: Response) => {
    const { status, payload } = await this.service.insert(req.body);
    
    return res.status(status).json(payload);
  };
  
  // REQUISITO 02
  getAll = async (_req: Request, res: Response) => {
    const { status, payload } = await this.service.getAll();
    
    return res.status(status).json(payload);
  };
}