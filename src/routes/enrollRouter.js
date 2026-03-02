import express from 'express'
import { getEnroll } from '../controllers/enrollController.js'
import { authMid } from '../middlewares/authMid.js'

const enrollRouter = express.Router()

enrollRouter.post('/getEnroll' ,authMid, getEnroll)

export default enrollRouter