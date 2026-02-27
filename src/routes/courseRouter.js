import express from 'express'
import { createCourse, deleteCourse, getCourse, updateCourse } from '../controllers/courseController.js'
import upload from '../middlewares/upload.js'

const courseRouter = express.Router()

courseRouter.post('/createCourse',upload.single('image') ,createCourse)
courseRouter.get('/getCourse' ,getCourse)
courseRouter.put('/updateCourse/:id',updateCourse)
courseRouter.delete('/deleteCourse/:id' ,deleteCourse)

export default courseRouter