import { Request, Response } from 'express';
import { IProduct } from '../interfaces/Products';
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
    const products: Array<IProduct> = await this.service.getAll();
    
    return res.status(200).json(products);
  };
}