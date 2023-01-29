import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
// import CustomRequest from '../interfaces/Request';

const { verify } = jwt;

require('dotenv/config');

const secret: string = process.env.JWT_SECRET || 'secret';

const validate = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const verification = verify(token, secret) as any;
    req.user = verification;

    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

export default validate;
