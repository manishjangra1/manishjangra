import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    email: String,
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
