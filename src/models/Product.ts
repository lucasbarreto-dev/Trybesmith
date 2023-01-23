import { Pool, RowDataPacket } from 'mysql2/promise';
import { IProduct } from '../interfaces/Products';

export default class Product {
  connection: Pool;

  constructor(conn: Pool) {
    this.connection = conn;
  }

  async getAll(): Promise<IProduct[]> {
    const [products] = await this.connection.execute<IProduct[] & RowDataPacket[]>(
      'SELECT * FROM Trybesmith.products',
    );
    return products as IProduct[];
  }
}