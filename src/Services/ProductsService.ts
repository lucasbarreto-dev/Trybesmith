import { IProduct } from '../interfaces/Products';
import ProductModel from '../models/Product';
import connection from '../models/connection';

export default class Product {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  async getAll(): Promise<IProduct[]> {
    const products = this.model.getAll();
  
    return products;
  }
}