import { Pool, ResultSetHeader } from 'mysql2/promise';
import tokenize from '../auth/tokenize';
import { IUser } from '../interfaces/Users';

export default class User {
  connection: Pool;

  constructor(conn: Pool) {
    this.connection = conn;
  }

  // REQUISITO 03
  async insert({ username, vocation, level, password }: IUser) {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(`
      INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)
      `, [username, vocation, level, password]);

    const token = tokenize({ id: insertId });

    return { token };
  }
}