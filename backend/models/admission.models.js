import mongoose, { Schema, model, mongo } from "mongoose";

const admissionShema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    course: {
      type: String,
      enum: ["BCA", "BBA", "BA", "BSC", "IA", "ISC", "MA", "MSC"],
      required: [true, "Course is required"],
    },
    state: {
      type: String,
      required: [true, "State is required"],
    },
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    mob: {
      type: Number,
      required: [true, "Mobile number is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: [true, "This email is associated with another account"],
    },
    aadharNo: {
      type: String,
      required: [true, "Aadhar is required"],
    },
    gender: {
      type: String,
      enum: ["MALE", "FEMALE", "Transgender"],
      required: [true, "Gender is required"],
    },
    fatherName: {
      type: String,
      required: [true, "Father name is required"],
    },
    motherName: {
      type: String,
      required: [true, "Mother name is required"],
    },
    gEmail: {
      type: String,
    },
    gPhone: {
      type: Number,
    },
    address: {
      type: String,
      required: [true, "Address is required"],
    },
    avatar: {
      public_url: {
        type: String,
      },
      secured_url: {
        type: String,
      },
    },
  },

  { timestamps: true }
);

export const Admission = model("Admission", admissionShema);
