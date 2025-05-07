import { Request, Response, NextFunction } from "express";

class ErrorHandler extends Error {
  public statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;

    // Restore prototype chain
    Object.setPrototypeOf(this, ErrorHandler.prototype);
  }
}

export const errorMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  err.message ||= "Internal Server Error";
  err.statusCode ||= 500;

  if (err.code === 11000) {
    err = new ErrorHandler(
      `Duplicate ${Object.keys(err.keyValue)} Entered`,
      400
    );
  }

  if (err.name === "JsonWebTokenError") {
    err = new ErrorHandler("Json Web Token is invalid, Try again!", 400);
  }

  if (err.name === "TokenExpiredError") {
    err = new ErrorHandler("Json Web Token is expired, Try again!", 400);
  }

  if (err.name === "CastError") {
    err = new ErrorHandler(`Invalid ${err.path}`, 400);
  }

  const errorMessage =
    err.errors && typeof err.errors === "object"
      ? Object.values(err.errors)
          .map((e: any) => e.message)
          .join(" ")
      : err.message;

  res.status(err.statusCode).json({
    success: false,
    message: errorMessage,
  });
};

export default ErrorHandler;
