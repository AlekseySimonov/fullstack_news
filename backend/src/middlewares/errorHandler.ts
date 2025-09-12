import { Request, Response, NextFunction } from 'express';
import { ApiError } from '../utils';
import mongoose from 'mongoose';

export const errorHandler = (
  err: unknown,
  req: Request,
  res: Response,
  _next: NextFunction,
) => {
  console.error('Error:', err);

  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({
      message: err.message,
      ...(err.details ? { details: err.details } : {}),
    });
  }

  if (err instanceof mongoose.Error.ValidationError) {
    return res.status(400).json({
      message: 'Validation error',
      details: Object.values(err.errors).map((e) => e.message),
    });
  }

  return res.status(500).json({
    message: 'Unexpected error',
    error: err instanceof Error ? err.message : String(err),
  });
};
