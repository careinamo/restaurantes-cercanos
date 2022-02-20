import { Request, Response } from 'express';
import User from '../models/User';

const profile = async (req: Request, res: Response): Promise<Response | void> => {
  const user = await User.findById(req.userId, { password: 0 });
  if (!user) {
    return res.status(404).json('No User found');
  }
  return res.json(user);
};

export default {
  profile,
};
