import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import tokenize from '../auth/tokenize';
import { ILogin, IUser } from '../interfaces/Users';

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

  // REQUISITO 05
  getUser = async ({ username, password }: ILogin) => {
    const [[user]] = await this.connection.execute<RowDataPacket[] & ResultSetHeader[]>(`
      SELECT * FROM Trybesmith.users WHERE username = ? AND password = ?
    `, [username, password]);
     
    return user;
  };
}
