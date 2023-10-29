import jwt from "jsonwebtoken";
import AppError from "../utils/error.utils.js";

const isLoggedIn = (req, res, next) => {
  try {
    const { rdc } = req.cookies;
    if (!rdc) {
      return next(new AppError("UnAuthenticated, please login first", 404));
    }

    const data = jwt.verify(rdc, process.env.JWT_SECRET);
    req.user = data;
    next();
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Authentication :: Something went wrong!!",
    });
  }
};

export default isLoggedIn;
