import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import db from '../db';
export interface AuthRequest extends Request {
  user?: any;
}

export const authMiddleware = async (req: AuthRequest, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];
  try {
    const decoded: any = jwt.verify(token || '', process.env.JWT_SECRET!);
    req.user = await db('users').where({ id: decoded.userId }).first();
    next();
  } catch (e) {
    res.status(401).json({ error: 'Unauthorized' });
  }
};
