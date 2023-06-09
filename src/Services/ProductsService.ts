import { IProductService } from '../interfaces/Products';
import ProductModel from '../models/Product';
import connection from '../models/connection';

export default class Product {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  // REQUISITO 01
  insert = async ({ name, amount }: { name: string, amount: string }) => {
    const { insertId } = await this.model.insert({ name, amount });

    return { status: 201, payload: { id: insertId, name, amount } };
  }; 

  // REQUISITO 02
  async getAll(): Promise<IProductService> {
    const products = await this.model.getAll();
  
    return { status: 200, payload: products };
  }
}