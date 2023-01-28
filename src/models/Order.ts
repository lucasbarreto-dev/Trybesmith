import { Pool, RowDataPacket } from 'mysql2/promise';
import { IOrder } from '../interfaces/Orders';

export default class Product {
  connection: Pool;

  constructor(conn: Pool) {
    this.connection = conn;
  }

  async getAll(): Promise<IOrder[]> {
    const [orders] = await this.connection.execute<IOrder[] & RowDataPacket[]>(
      `SELECT 
        o.id AS id, 
        o.user_id AS userId,
        JSON_ARRAYAGG(p.id) AS productsIds
      FROM 
        Trybesmith.orders AS o
          INNER JOIN
        Trybesmith.products AS p
          ON o.id = p.order_id
        GROUP BY o.id`,
    );
    return orders as IOrder[];
  }
}