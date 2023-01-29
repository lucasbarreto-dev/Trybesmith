import OrderModel from '../models/Order';
// import connection from '../models/connection';
import { IOrderService } from '../interfaces/Orders';

export default class Order {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel();
  }

  // REQUISITO 04
  async getAll(): Promise<IOrderService> {
    const orders = await this.model.getAll();

    return { status: 200, payload: orders };
  }
}