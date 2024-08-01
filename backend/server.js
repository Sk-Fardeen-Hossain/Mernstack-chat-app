import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import connectMongodb from "./db/connectMongodb.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json()); //from req.body
app.use(cookieParser());

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);//from auth.routes.js
app.use("/api/users",userRoutes);


// app.get("/",(req,res)=>{
//     res.send("Server is running!!"); //test route http://localhost:5000/
// });


app.listen(PORT, () => {
    connectMongodb();
    console.log(`Server running on port ${PORT}`)
});