import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    techStack: [String],
    image: String, // URL or base64 (better to use a cloud service later)
    github: String,
    live: String,
  },
  { timestamps: true }
);

const Project = new mongoose.model("Project", projectSchema);
export default Project;
