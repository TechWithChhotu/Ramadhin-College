import AppError from "../utils/error.utils.js";
import { User } from "../models/user.models.js";
import { AdmissionRegistration } from "../models/admission.registration.models.js";
import { Admission } from "../models/admission.models.js";
import cloudinary from "cloudinary";

/*======================Admission Registration Controller======================*/
const admissionRegistration = async (req, res, next) => {
  try {
    const {
      course,
      state,
      name,
      mob,
      email,
      aadharNo,
      gender,
      fatherName,
      motherName,
      gEmail,
      gPhone,
      address,
    } = req.body;

    /*----------------------Data Validation----------------------*/
    if (
      !course ||
      !state ||
      !name ||
      !mob ||
      !email ||
      !aadharNo ||
      !gender ||
      !fatherName ||
      !motherName ||
      !address
    ) {
      return next(new AppError("All * marked fields are required"));
    }

    const newUser = await User.findOne({ email });
    if (!newUser) {
      return next(new AppError("Account doesn`t exist with this email"));
    }

    const newAdmission = await AdmissionRegistration.create({
      course,
      state,
      name,
      mob,
      email,
      aadharNo,
      gender,
      fatherName,
      motherName,
      gEmail,
      gPhone,
      address,
      avatar: {
        public_id: email,
        secure_url:
          "https://th.bing.com/th?id=OIP.ppA1G-rWjeWfY_508DrdRAHaHb&w=249&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
      },
    });

    if (!newAdmission) {
      return next(
        new AppError("Admission :: fail to process, please try agian")
      );
    }

    /*----------------------upload avatar----------------------*/
    if (req.file) {
      try {
        const result = await cloudinary.v2.uploader.upload(req.file.path, {
          folder: "rdc", // Save files in a folder named lms
          width: 250,
          height: 250,
          gravity: "faces", // This option tells cloudinary to center the image around detected faces (if any) after cropping or resizing the original image
          crop: "fill",
        });

        if (result) {
          newAdmission.avatar.public_id = result.public_id;
          newAdmission.avatar.secure_url = result.secure_url;
        }
      } catch (err) {
        new AppError(`file not uploaded please try again, ERROR: ${err}`, 500);
      }
    }
    await newAdmission.save();

    res.status(201).json({
      success: true,
      message: "data received",
      data: newAdmission,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: `Admission :: ERROR: ${error.message}`,
    });
  }
};

/*======================Admission Controller======================*/
const admission = async (req, res, next) => {
  try {
    const userEmail = req.user.email;

    const response = await AdmissionRegistration.findOne({ email: userEmail });
    const {
      course,
      state,
      name,
      mob,
      email,
      aadharNo,
      gender,
      fatherName,
      motherName,
      gEmail,
      gPhone,
      address,
    } = response;

    const newUser = await User.findOne({ email });
    if (!newUser) {
      return next(new AppError("Account doesn`t exist with this email"));
    }

    const newAdmission = await Admission.create({
      course,
      state,
      name,
      mob,
      email,
      aadharNo,
      gender,
      fatherName,
      motherName,
      gEmail,
      gPhone,
      address,
      avatar: {
        public_id: response.avatar.public_id,
        secure_url: response.avatar.secure_url,
      },
    });

    if (!newAdmission) {
      return next(
        new AppError("Admission :: fail to process, please try agian")
      );
    }

    res.status(201).json({
      success: true,
      message: "data received",
      data: newAdmission,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: `Admission :: ERROR: ${error.message}`,
    });
  }
};

export { admissionRegistration, admission };
