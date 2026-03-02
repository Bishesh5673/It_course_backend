import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDb from "./src/db/connect.js";

import userRoutes from "./src/routes/userRouter.js";
import courseRoutes from "./src/routes/courseRouter.js";
import enrollRoutes from "./src/routes/enrollRouter.js";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();
const PORT = Number(process.env.PORT )|| 8000;

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true,
  }),
);
app.use(cookieParser());
app.use("/image",express.static('./public/Images'))

// base routes
app.use('/api/user',userRoutes);
app.use('/api/course',courseRoutes);
app.use('/api/enroll',enrollRoutes);


connectDb()
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

