/*----------------------Library Import----------------------*/
import { Router } from "express";

/*----------------------Custom imports----------------------*/
import {
  signUp,
  pingPong,
  signIn,
  getUser,
} from "../controllers/user.controllers.js";
// import { admission } from "../controllers/admission.controllers.js";
import upload from "../middlewares/multer.middlewares.js";
import isLoggedIn from "../middlewares/auth.middleware.js";
import {
  admissionRegistration,
  admission,
} from "../controllers/admission.controllers.js";

/*----------------------all routes----------------------*/
const router = Router();

router.get("/ping", pingPong);
router.get("/profile", isLoggedIn, getUser);
router.post("/signup", signUp);
router.post("/signin", signIn);
router.post("/admission", isLoggedIn, upload.single("avatar"), admission);
router.get(
  "/registration/admission",
  isLoggedIn,
  upload.single("avatar"),
  admissionRegistration
);

export default router;
