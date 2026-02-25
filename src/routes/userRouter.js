import express from 'express'
import { getMe, login, logout, register } from '../controllers/userController.js'
import { authMid } from '../middlewares/authMid.js'
import upload from '../middlewares/upload.js'


const userRouter = express.Router()

userRouter.post('/register',upload.single('image') ,register)
userRouter.post('/login' ,login)
userRouter.get('/logout' ,logout)
userRouter.get('/getMe' ,authMid, getMe)

export default userRouter;