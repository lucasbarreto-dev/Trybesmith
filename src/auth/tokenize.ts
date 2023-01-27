import jwt, { Secret, SignOptions } from 'jsonwebtoken';

const secret: Secret = process.env.JWT_SECRET || 'secret';

const config: SignOptions = { expiresIn: '3d', algorithm: 'HS256' };

const tokenize = (payload: { id: number }) => jwt
  .sign(payload, secret, config);

export default tokenize;

// type casting *
