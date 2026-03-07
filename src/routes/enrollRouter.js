import express from 'express'
import { createEnroll, getUserEnrollments } from '../controllers/enrollController.js'
import { authMid } from '../middlewares/authMid.js'

const enrollRouter = express.Router()

enrollRouter.post('/createEnroll' , createEnroll)
enrollRouter.get("/user/:userId", getUserEnrollments);

export default enrollRouter