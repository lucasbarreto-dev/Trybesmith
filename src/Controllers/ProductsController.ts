import { Request, Response } from 'express';
import { IProduct } from '../interfaces/Products';
import ProductsService from '../Services/ProductsService';

// REQUISITO 02
export default class ProductsController {
  service: ProductsService;
  
  constructor() {
    this.service = new ProductsService();
  }
  
  getAll = async (_req: Request, res: Response) => {
    const products: Array<IProduct> = await this.service.getAll();
    
    return res.status(200).json(products);
  };
  
  // const getAll = async (_req: Request, res: Response) => {
  //   const products: Array<IProduct> = await service.getAll();
  //   res.status(200).json(products);
  // };
  
  // getAll = async (_req: Request, res: Response) => {
  //   const { status, 
  //     payload }: { status: number, payload: IProduct[] } = await ProductsService.getAll();
  
  //   return res.status(status).json(payload);
  // };
}