import mongoose from "mongoose";

const enrollSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
  },
  enrolledAt: {
    type: Date,
    default: Date.now,
  },
});

const Enroll = mongoose.model("Enroll", enrollSchema);
export default Enroll;
