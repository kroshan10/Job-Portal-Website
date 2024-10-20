import express, { urlencoded } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./utils/db.js"
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applcationRoute from "./routes/application.route.js";

dotenv.config({});

const app = express();

app.get("/home", (req,res) => {
    return res.status(200).json({
        message: "I m coming from backend",
        success: "true"
    })
})

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOption = {
    origin:'http://localhost:5173',
    credentials:true
}

app.use(cors(corsOption));

const PORT = process.env.PORT || 3000;

app.use("/api/v1/user", userRoute);
app.use("/api/v1/company",companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application",applcationRoute);

app.listen(PORT, () => {
    connectDB();
    console.log(`server running at port ${PORT}`);
})