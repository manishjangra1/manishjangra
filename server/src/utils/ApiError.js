class ApiError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode || 500;
  }
}

export default ApiError;
