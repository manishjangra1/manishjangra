import { NODE_ENV } from "../configs/env.js";

const errorMiddleware = (err, req, res, next) => {
  try {
    let error = { ...err };
    error.message = err.message;
    error.statusCode = err.statusCode;
    console.error(error);

    res.status(error.statusCode || 500).json({
      success: false,
      error: error.message || "Internal Server Error",
      stack: NODE_ENV === "production" ? null : err.stack,
    });
  } catch (error) {
    next(error);
  }
};

export default errorMiddleware;
