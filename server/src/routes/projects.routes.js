import express from "express";
import { addProject, getProjects } from "../controllers/projects.controller.js";
import { asyncHandler } from "../middlewares/async.middleware.js";

const projectRouter = express.Router();

// @route GET /api/v1/projects
// @desc Get all projects
// @access Public
projectRouter.get("/", asyncHandler(getProjects));

// @route POST /api/v1/projects
// @desc Add a projects
// @access admin
projectRouter.post("/", asyncHandler(addProject));

export default projectRouter;
