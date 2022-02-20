import { Router } from 'express';
import userController from '../controllers/user.controller';
import { tokenValidation } from '../libs/verifyToken';

const router = Router();

router.get('/profile', tokenValidation, userController.profile);

export default router;
