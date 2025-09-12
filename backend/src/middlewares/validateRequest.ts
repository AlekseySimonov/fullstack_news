import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import { ApiError } from '../utils';

export const validateRequest = (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw ApiError.badRequest('Validation error', errors.array());
  }
  next();
};
