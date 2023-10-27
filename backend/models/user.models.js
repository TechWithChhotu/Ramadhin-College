import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: [true, "User already exist with this email"],
    },
    muid: {
      type: String,
    },
    password: {
      type: String,
      required: [true, "password is required"],
      select: false,
    },
    role: {
      type: String,
      default: "Student",
    },
  },
  { timestamps: true }
);

/*----------------------Password Encryption----------------------*/
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next;
  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods = {
  comparePassword: async function (painTextPassword) {
    return await bcrypt.compare(painTextPassword, this.password);
  },
  generateJWT: async function () {
    return await jwt.sign(
      {
        id: this.id,
        email: this.email,
        role: this.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: 604800,
      }
    );
  },
};

export const User = mongoose.model("User", userSchema);
