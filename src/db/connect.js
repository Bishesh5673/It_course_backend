import mongoose from "mongoose";
const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/It_mgmt");
    console.log("Database is Connected Successfully!");
  } catch (error) {
    console.log("Error while connecting database", error);
  }
};
export default connectDb;