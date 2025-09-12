import { Request, Response, NextFunction } from 'express';
import { Model, HydratedDocument } from 'mongoose';

export abstract class BaseController<T> {
  protected model: Model<HydratedDocument<T>>;

  constructor(model: Model<HydratedDocument<T>>) {
    this.model = model;
  }

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const item = new this.model(req.body);
      await item.save();
      return res.status(201).json(item);
    } catch (err) {
      next(err);
    }
  };

  getAll = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.model.find();
      return res.json(data);
    } catch (err) {
      next(err);
    }
  };

  getOne = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const item = await this.model.findById(id);

      if (!item) {
        return res.status(404).json({ message: 'Not found' });
      }

      return res.json(item);
    } catch (err) {
      next(err);
    }
  };

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const item = await this.model.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
      });

      if (!item) {
        return res.status(404).json({ message: 'Not found' });
      }

      return res.json(item);
    } catch (err) {
      next(err);
    }
  };

  delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const item = await this.model.findByIdAndDelete(id);

      if (!item) {
        return res.status(404).json({ message: 'Not found' });
      }

      return res.json({ message: 'Deleted successfully' });
    } catch (err) {
      next(err);
    }
  };
}
