import Enroll from "../models/enrollModel.js";

export const getEnroll = async (req, res) => {
    const { name, email, phone, courseId } = req.body;

  const newEnrollment = new Enroll({
    name,
    email,
    phone,
    courseId,
  });

  await newEnrollment.save();

  res.json({
    message: "Enrollment Successful",
    enrollment: newEnrollment,
  });
};