import Project from "../models/project.model.js";

export const addProject = async (req, res, next) => {
  const project = new Project(req.body);
  await project.save();
  res.status(201).json({
    success: true,
    message: "Project created successfully",
    data: { project },
  });
};

export const getProjects = async (req, res, next) => {
  const projects = await Project.find();
  return res
    .status(200)
    .json({ success: true, message: "Projects loaded", data: { projects } });
};
