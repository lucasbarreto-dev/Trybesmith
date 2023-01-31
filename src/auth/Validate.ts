import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
// import CustomRequest from '../interfaces/Request';

const { verify } = jwt;

require('dotenv/config');

const secret: string = process.env.JWT_SECRET || 'secret';

const validate = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const verification = verify(token, secret) as any;
    // console.log(verification);
    
    req.user = verification;

    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export default validate;
