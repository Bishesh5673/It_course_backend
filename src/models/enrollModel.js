import mongoose from "mongoose";

const enrollSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  enrolledAt: {
    type: Date,
    default: Date.now,
  },
});

// Prevent duplicate enrollments
enrollSchema.index({ userId: 1, courseId: 1 }, { unique: true });

const Enroll = mongoose.model("Enroll", enrollSchema);
export default Enroll;
