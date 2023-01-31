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

  // REQUISITO 08
  insertAndUpdate = async (userId: number, productIds: number[]) => {
    // const checkIds = productIds.some((e) => typeof e !== typeof 1);
  
    // if (checkIds) {
    //   return { status: 422, payload: { message: 'productIds must include only numbers' } };
    // }

    const { orderId } = await this.model.insert(userId);
    await this.model.update(orderId, productIds);

    return { status: 201, payload: { id: userId, productIds } };
  };
}