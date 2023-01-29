import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { IProduct } from '../interfaces/Products';

export default class Product {
  connection: Pool;

  constructor(conn: Pool) {
    this.connection = conn;
  }

  // REQUISITO 01 
  async insert({ name, amount }: { name: string, amount: string }) {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(`
      INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)
      `, [name, amount]);
    
    return { insertId, name, amount };
  }

  // REQUISITO 02
  async getAll(): Promise<IProduct[]> {
    const [products] = await this.connection.execute<IProduct[] & RowDataPacket[]>(
      'SELECT * FROM Trybesmith.products',
    );
    return products as IProduct[];
  }
}