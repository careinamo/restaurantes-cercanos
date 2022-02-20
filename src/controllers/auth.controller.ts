import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import User, { IUser } from '../models/User';

const signUp = async (req: Request, res: Response): Promise<Response | void> => {
  const emailExists = await User.findOne({ email: req.body.email });
  if (emailExists) return res.status(400).json('Email already exists');

  try {
    const newUser: IUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    newUser.password = await newUser.encrypPassword(newUser.password);
    const savedUser = await newUser.save();

    const token: string = jwt.sign({ _id: savedUser.id }, 'qwertyuiopasdfghjkl', {
      expiresIn: 60 * 60 * 24,
    });

    return res.header('auth-token', token).json(savedUser);
  } catch (e) {
    return res.status(400).json(e);
  }
};

const signIn = async (req: Request, res: Response): Promise<Response | void> => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) return res.status(400).json('Email or Password is wrong');
  const correctPassword = await user.validatePassword(req.body.password, user.password);

  if (!correctPassword) return res.status(400).json('Invalid Password');

  const token: string = jwt.sign({ _id: user.id }, 'qwertyuiopasdfghjkl');
  return res.header('auth-token', token).json(token);
};

export default {
  signUp,
  signIn,
};
