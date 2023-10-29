import { User } from "../models/user.models.js";
// import { Registration } from "../models/admission.registration.models.js";
import { AdmissionRegistration } from "../models/admission.registration.models.js";

const adminDasboard = async (req, res, next) => {
  try {
    const admin = await User.findById(req.user.id);
    const limit = parseInt(req.query.limit, 10);
    const course = req.query.course;

    /*----------------------Validation----------------------*/
    if (!admin) {
      return next(
        new AppError(
          "Admin Dashboard :: Admin doesn`t exist or Your are not admin",
          404
        )
      );
    }
    // || !admin.role === "ADMIN"

    const allAdmissionData = await AdmissionRegistration.find({ course });

    res.status(200).json({
      success: true,
      message: "Admission record fetched successfully",
      allAdmissionData,
    });
  } catch (err) {
    res
      .status(404)
      .json({ success: false, message: "AdminDasboard :: Something wrong!!" });
  }
};

const updateAdmissionConfirmation = async (req, res, next) => {
  try {
    const admin = await User.findById(req.user.id);
    const confirmation = parseInt(req.query.confirmation);
    console.log(
      `confirmation type ${typeof confirmation} and value is ${confirmation}`
    );

    if (confirmation) {
      console.log(` req.user.email: ${req.user.email}`);
      const response = await AdmissionRegistration.findOneAndUpdate(
        { email: req.user.email },
        {
          $set: { confirmation: true },
        }
      );

      res.status(201).json({
        success: true,
        message: "Application accepted successfully",
        response,
      });
    } else {
      console.log("2. =====================");
      const response = await AdmissionRegistration.findOneAndDelete({
        email: req.user.email,
      });
      if (response) {
        res.status(201).json({
          success: true,
          message: "Application rejected successfully",
          response,
        });
      } else {
        res.status(201).json({
          success: true,
          message: "Application accepted failed",
          response,
        });
      }

      console.log("2.@ =====================");
    }
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "updateAdmissionConfirmation :: Something wrong!!",
    });
  }
};

export { adminDasboard, updateAdmissionConfirmation };
