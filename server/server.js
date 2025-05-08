import express from "express";
import { PORT } from "./src/configs/env.js";
import projectRouter from "./src/routes/projects.routes.js";
import connectDB from "./src/db/mongoDB.js";
import contactRouter from "./src/routes/contact.routes.js";
import errorMiddleware from "./src/middlewares/error.middleware.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/projects", projectRouter);
app.use("/api/v1/contact", contactRouter);

app.use(errorMiddleware);

app.listen(PORT, async () => {
  console.log(`Portfolio Server started on http://localhost:${PORT}`);
  await connectDB();
});
