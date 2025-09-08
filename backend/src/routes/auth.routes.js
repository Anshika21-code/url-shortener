import express from 'express';
import { register_user, login_user } from '../controller/auth.controller.js';
import wrapAsync from '../utils/tryCatchWrapper.js';

const router = express.Router();

router.post("/register", wrapAsync(register_user));
router.post("/login", wrapAsync(login_user));

export default router;