import { Router } from 'express';
import { articleController } from '../controllers';
import { validateRequest } from './../middlewares/validateRequest';
import { articleValidators } from '../validators';
import { pagination, validateArticleRequest } from '../middlewares';

const articleRouter = Router();

articleRouter.post(
  '/',
  articleValidators.create,
  validateArticleRequest,
  validateRequest,
  articleController.create,
);

articleRouter.get(
  '/',
  articleValidators.query,
  validateRequest,
  pagination(["category", "tags", "createdAt", "title", "isEditorsPick"]),
  articleController.getAll
);

articleRouter.get(
  '/:id',
  articleController.getOne
);

articleRouter.put(
  '/:id',
  articleValidators.update,
  validateArticleRequest,
  validateRequest,
  articleController.update
);
articleRouter.delete('/:id', articleController.delete);

export { articleRouter };
