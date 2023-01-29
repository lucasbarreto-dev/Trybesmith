import jwt, { Secret, SignOptions } from 'jsonwebtoken';

const secret: Secret = process.env.JWT_SECRET || 'secret';

const config: SignOptions = { expiresIn: '3d', algorithm: 'HS256' };

interface IPayload { id: number }
const tokenize = (payload: IPayload) => jwt.sign(payload, secret, config);

export default tokenize;

// type casting *
