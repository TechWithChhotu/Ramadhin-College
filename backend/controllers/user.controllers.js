import { User } from "../models/user.models.js";
import AppError from "../utils/error.utils.js";
import { Admission } from "../models/admission.models.js";

const pingPong = (req, res) => {
  res.send("pong");
};

/*======================SignUp======================*/
const signUp = async (req, res, next) => {
  try {
    const { name, email, muid, password } = req.body;

    /*----------------------Data Valigation----------------------*/
    if (!name || !email || !password) {
      res.status(400).json({
        success: false,
        message: "SignUp :: Error: name, email and password are required",
      });
    }

    /*----------------------UserCreation----------------------*/
    const newUser = await User.create({
      name,
      email,
      muid,
      password,
    });

    /*----------------------If user not exist----------------------*/
    if (!newUser) {
      res.status(400).json({
        success: false,
        message: "SignUp :: Error: failed to create user",
      });
    }

    /*----------------------Set Cookies with jwt----------------------*/
    const token = await newUser.generateJWT();
    res.cookie("rdc", token);

    /*----------------------Response With Success----------------------*/
    newUser.password = undefined;
    res.status(200).json({
      success: true,
      message: "SignUp :: SignUp successfully",
      data: newUser,
    });
  } catch (e) {
    res.status(503).json({
      success: false,
      message: `SignUp :: Error: ${e.message}`,
    });
  }
};

/*======================SignIn======================*/
const signIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    /*----------------------Data Valigation----------------------*/
    if (!email || !password) {
      return next(new AppError("All fields are required", 404));
    }

    /*----------------------user & validation----------------------*/
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return next(new AppError("SignIn :: user not found", 404));
    }
    if (!user.comparePassword(password)) {
      return next(new AppError("SignIn :: please enter valid password", 404));
    }

    /*----------------------Set Cookies with jwt----------------------*/
    const token = await user.generateJWT();
    res.cookie("rdc", token);

    /*----------------------Response With Success----------------------*/
    user.password = undefined;
    res.status(200).json({
      success: true,
      message: "SignUp :: SignUp successfully",
      data: user,
    });
  } catch (err) {
    res
      .status(503)
      .json({ success: false, message: `SignIn :: Error: ${err.message}` });
  }
};

const getUser = async (req, res, next) => {
  try {
    const userExist = await User.findById(req.user.id);

    if (!userExist) {
      return next(new AppError("Profile :: User doesn`t exist", 404));
    }

    const userAdmissionData = await Admission.find({ email: userExist.email });

    if (userAdmissionData) {
      res.status(200).json({
        success: true,
        message: "get user profile successfully",
        data: userAdmissionData,
      });
    } else {
      res.status(200).json({
        success: true,
        message: "get user profile successfully",
        data: userExist,
      });
    }
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Profile :: Something wrong!!",
    });
  }
};
export { pingPong, signUp, signIn, getUser };
