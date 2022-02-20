import { Router } from 'express';
import authController from '../controllers/auth.controller';

const router = Router();

router.route('/signUp').post(authController.signUp);
router.route('/signIn').post(authController.signIn);

export default router;
