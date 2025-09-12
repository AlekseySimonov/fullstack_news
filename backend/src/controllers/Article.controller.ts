import { NextFunction, Response } from 'express';
import { Article, IArticle } from '../models/Article.model';
import { BaseController } from './Base.controller';
import { SortTypes } from '../types';

class ArticleController extends BaseController<IArticle> {
  constructor() {
    super(Article);
  }
  override getAll = async (req: SortTypes.ArticleRequest, res: Response, next: NextFunction) => {
    try {
      const { page, limit, skip, sort } = req.pagination!;
      const { search, category } = req.query;

      const filter: Record<string, unknown> = {};

      if (category) filter.category = { $regex: `^${category}$`, $options: "i" }

      if (search) {
        filter.$or = [
          { title: { $regex: search, $options: "i" } },
          { category: { $regex: search, $options: "i" } },
          { "content.subtitle": { $regex: search, $options: "i" } },
        ];
      }

      const [data, total] = await Promise.all([
        this.model.find(filter).sort(sort).skip(skip).limit(limit),
        this.model.countDocuments(filter),
      ]);

      return res.json({
        data,
        total,
        page,
        pages: Math.ceil(total / limit),
      });
    } catch (err) {
      next(err);
    }
  };
}

export const articleController = new ArticleController();
