import { Request, Response } from 'express';
import axios from 'axios';

const nearbyRestaurants = async (req: Request, res: Response): Promise<Response | void> => {
  try {
    const data = await axios.get('https://62129e1ef43692c9c6ef5301.mockapi.io/data');
    console.log(data);
    return res.json(data);
  } catch (e) {
    return res.json(e);
  }
};

export default {
  nearbyRestaurants,
};
