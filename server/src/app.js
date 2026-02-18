import 'dotenv/config';
import express from "express";
import complaintsRoutes from "./routes/complaints.routes.js";
import { connectToMongo } from "./db/connect.js";
import cors from "cors";

const app = express();
const PORT = 5000;

await connectToMongo();

app.use(express.json());
app.use(cors());

app.use("/api/complaints", complaintsRoutes);

app.use("/api/admin", complaintsRoutes);

app.get("/", (req, res) => {
  res.send("The app is running");
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT${PORT}`);
});
