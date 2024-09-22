import express from 'express'
import { authUser,regUser,logUser } from '../controller/userAuth.js'

export const route = express.Router();

route.post('/register',regUser)
route.post('/login',authUser)
route.post('/logout',logUser)