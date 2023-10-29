/*----------------------Library Import----------------------*/
import { Router } from "express";

import isLoggedIn from "../middlewares/auth.middleware.js";
import {
  adminDasboard,
  updateAdmissionConfirmation,
} from "../controllers/admin.controller.js";

/*----------------------Custom imports----------------------*/

/*----------------------all routes----------------------*/
const adminRouter = Router();

adminRouter.get("/admin/submited/admission", isLoggedIn, adminDasboard);
adminRouter.get(
  "/admin/admission/confirmation",
  isLoggedIn,
  updateAdmissionConfirmation
);

export default adminRouter;
