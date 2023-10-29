/*----------------------Library imports----------------------*/
import express from "express";
import cookieParser from "cookie-parser";

import router from "./routers/user.routes.js";
import adminRouter from "./routers/admin.router.js";

const app = express();

/*----------------------Middlewares----------------------*/
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api", adminRouter);
app.use("/api", router);

export default app;
