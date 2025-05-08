import mongoose from "mongoose";
import { MONGO_URI, NODE_ENV } from "../configs/env.js";

if (!MONGO_URI) {
  throw new Error("Please define valid MONGO_URI");
}
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log(`Connected to the database in ${NODE_ENV} mode`);
  } catch (error) {
    console.error(`Error connecting to database`);
    process.exit(1);
  }
};

export default connectDB;
