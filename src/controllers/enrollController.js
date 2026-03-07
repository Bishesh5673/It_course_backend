import Enroll from "../models/enrollModel.js";

export const createEnroll = async (req, res) => {
  try {
    const { name, email, phone, courseId, userId } = req.body;

    const alreadyEnrolled = await Enroll.findOne({ userId, courseId });
    if (alreadyEnrolled) {
      return res.status(400).json({
        success: false,
        message: "You are already enrolled in this course",
      });
    }

    const enroll = await Enroll.create({
      name,
      email,
      phone,
      courseId,
      userId,
    });

    res.json({
      success: true,
      message: "Enrollment Successful",
      enroll,
    });
  } catch (error) {
    console.log(error); // ✅ log error for debugging
    res.status(500).json({
      success: false,
      message: "Enrollment Failed",
    });
  }
};

export const getUserEnrollments = async (req, res) => {
  try {
    const { userId } = req.params;

    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "User ID missing",
      });
    }

    const enrollments = await Enroll.find({ userId }).populate("courseId");

    res.json({
      success: true,
      enrollments,
    });
  } catch (error) {
    console.log(error); // ✅ log backend error
    res.status(500).json({ message: "Error fetching enrollments" });
  }
};

