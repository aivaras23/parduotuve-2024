import express from 'express';
import { AuthController } from '../controllers/auth.controller';

const authRouter=express.Router();

authRouter.post('/signin', AuthController.signIn);
authRouter.post('/login', AuthController.login);

export{authRouter};