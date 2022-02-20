import { Request, Response } from 'express';

export default function index(req: Request, res: Response): Response {
  return res.json('Welcome to the Api');
}
