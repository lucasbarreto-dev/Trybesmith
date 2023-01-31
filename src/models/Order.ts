import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { IOrder } from '../interfaces/Orders';
import conn from './connection';

export default class Product {
  public connection = conn;
  
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

  // REQUISITO 08 
  insert = async (userId: number) => {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(`
      INSERT INTO Trybesmith.orders (user_id) VALUES (?)
    `, [userId]);

    return { orderId: insertId };
  };

  update = async (orderId: number, productsIds: number[]): Promise<void> => {    
    await Promise.all(productsIds.map((productId) => this.connection.execute<ResultSetHeader>(`
        UPDATE Trybesmith.products SET order_id = ? WHERE id = ?
      `, [orderId, productId])));
  };
}
