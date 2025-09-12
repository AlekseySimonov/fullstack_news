import { Article, IArticle } from '../models/Article.model';
import { BaseController } from './Base.controller';

class ArticleController extends BaseController<IArticle> {
  constructor() {
    super(Article);
  }
}

export const articleController = new ArticleController();
