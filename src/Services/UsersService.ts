import { IUser } from '../interfaces/Users';
import UserModel from '../models/User';
import connection from '../models/connection';

export default class User {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  // REQUISITO 03
  insert = async ({ username, vocation, level, password }: IUser) => {
    const { token } = await this.model.insert({ username, vocation, level, password });

    return { status: 201, payload: { token } };
  }; 
}