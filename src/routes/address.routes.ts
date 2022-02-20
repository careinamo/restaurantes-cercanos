import { Router } from 'express';

import restaurantsController from '../controllers/restaurants.controller';
import { tokenValidation } from '../libs/verifyToken';

const router = Router();

router.get('/restaurants', tokenValidation, restaurantsController.nearbyRestaurants);

export default router;
