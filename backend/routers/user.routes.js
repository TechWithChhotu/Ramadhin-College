import { Router } from "express";
import { signUp, pingPong, signIn } from "../controllers/user.controllers.js";
const router = Router();

router.get("/ping", pingPong);
router.post("/signup", signUp);
router.post("/signin", signIn);

export default router;
