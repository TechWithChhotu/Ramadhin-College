/*----------------------Library imports----------------------*/
import { config } from "dotenv";
config();

/*----------------------Custom imports----------------------*/
import app from "./app.js";
import dbConnection from "./config/db.config.js";

const PORT = process.env.PORT || 3001;

/*----------------------App listening----------------------*/
app.listen(PORT, async () => {
  await dbConnection();
  console.log(`server is running on http://localhost:${PORT}`);
});
