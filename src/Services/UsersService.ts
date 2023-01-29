import { IUser, ILogin } from '../interfaces/Users';
import UserModel from '../models/User';
import connection from '../models/connection';
import tokenize from '../auth/tokenize';

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
  
  // REQUISITO 05
  login = async ({ username, password }: ILogin) => {
    const user = await this.model.getUser({ username, password });

    if (!user) {
      return { status: 401, payload: { message: 'Username or password invalid' } };
    }

    const token = tokenize({ id: user.id });

    return { status: 200, payload: { token } };
  };
}