import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDb from "./src/db/connect.js";

import userRoutes from "./src/routes/userRouter.js";
import courseRoutes from "./src/routes/courseRouter.js";

const app = express();
dotenv.config();
const PORT = Number(process.env.PORT )|| 8000;


app.use(cors());
app.use(express.json());
app.use("/image",express.static('./public/Images'))

// base routes
app.use('/api/user',userRoutes);
app.use('/api/course',courseRoutes);


connectDb()
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

