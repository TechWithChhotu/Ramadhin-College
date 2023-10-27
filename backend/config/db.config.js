import mongoose from "mongoose";

const dbConnection = async () => {
  const { connection } = await mongoose.connect(process.env.MONGO_URI);
  if (connection) {
    console.log("connection established successfully");
  } else {
    console.log("connection failed to established");
  }
};

export default dbConnection;
