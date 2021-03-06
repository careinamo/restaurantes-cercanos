import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export interface IPayload {
  _id: string;
  iat: number;
}

export const tokenValidation = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.header('auth-token');
    if (!token) return res.status(401).json('Access Denied');
    const payload = jwt.verify(token, 'qwertyuiopasdfghjkl') as IPayload;
    console.log(['tumadre', payload]);
    /* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
    req.userId = payload._id;
    return next();
  } catch (e) {
    return res.status(400).send('Invalid Token');
  }
};
