import { Router } from 'express';
import { articleController } from '../controllers';
import { validateRequest } from './../middlewares/validateRequest';
import { articleValidators } from '../validators';
import { validateArticleRequest } from '../middlewares';

const articleRouter = Router();

articleRouter.post(
  '/',
  articleValidators.create,
  validateArticleRequest,
  validateRequest,
  articleController.create,
);
articleRouter.get('/', articleController.getAll);
articleRouter.get('/:id', articleController.getOne);
articleRouter.put(
  '/:id',
  articleValidators.update,
  validateArticleRequest,
  validateRequest,
  articleController.update
);
articleRouter.delete('/:id', articleController.delete);

export { articleRouter };
