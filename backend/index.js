/*----------------------Library imports----------------------*/
import { v2 } from "cloudinary";
import { config } from "dotenv";
config();

/*----------------------Custom imports----------------------*/
import app from "./app.js";
import dbConnection from "./config/db.config.js";

/*----------------------Cloudinary configuration----------------------*/
v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const PORT = process.env.PORT || 3001;

/*----------------------App listening----------------------*/
app.listen(PORT, async () => {
  await dbConnection();
  console.log(`server is running on http://localhost:${PORT}`);
});
