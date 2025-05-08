import express from "express";
import { submitContact } from "../controllers/contact.controller.js";
import { asyncHandler } from "../middlewares/async.middleware.js";

const contactRouter = express.Router();

// @route POST /api/v1/contact
// @desc Posting a contact form
// @access public
contactRouter.post("/", asyncHandler(submitContact));

export default contactRouter;
