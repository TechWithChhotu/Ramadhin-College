/*----------------------Library imports----------------------*/
import express from "express";
import router from "./routers/user.routes.js";
import cookieParser from "cookie-parser";

const app = express();

/*----------------------Middlewares----------------------*/
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api", router);

export default app;
