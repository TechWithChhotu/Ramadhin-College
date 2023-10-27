import mongoose, { Schema, model, mongo } from "mongoose";
const date = new Date();

const examSchema = new Schema(
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
    semester: {
      type: Number,
      required: [true, "Semester is required"],
    },
    rollNo: {
      type: Number,
      required: [true, "Roll number is required"],
      unique: [true, "this roll number is already taken"],
    },
    collegeName: {
      type: String,
      required: [true, "Home College is required"],
    },
    examCenter: {
      type: String,
      required: [true, "Center of examination is required"],
    },
    registrationNo: {
      type: Number,
      required: [true, "Registration number is required"],
    },
    registrationYear: {
      type: Number,
      required: [true, "Registration year is required"],
    },
    examinatinYear: {
      type: Number,
      default: date.getFullYear(),
    },
  },
  { timestamps: true }
);

export const AdmitCard = model("AdmitCard", examSchema);
