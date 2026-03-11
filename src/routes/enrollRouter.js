import express from 'express'
import { createEnroll, getAllEnrollments, getUserEnrollments } from '../controllers/enrollController.js'
import { authMid } from '../middlewares/authMid.js'

const enrollRouter = express.Router()

enrollRouter.post('/createEnroll' , createEnroll)
enrollRouter.get("/user/:userId", getUserEnrollments);
enrollRouter.get("/admin/enrollments", getAllEnrollments);


export default enrollRouter