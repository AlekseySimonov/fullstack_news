import { Router } from 'express';
import { articleController } from '../controllers';
import { validateRequest } from './../middlewares/validateRequest';
import { articleValidators } from '../validators';

const articleRouter = Router();

articleRouter.post(
  '/',
  articleValidators.create,
  validateRequest,
  articleController.create,
);
articleRouter.get('/', articleController.getAll);
articleRouter.get('/:id', articleController.getOne);
articleRouter.put('/:id', articleController.update);
articleRouter.delete('/:id', articleController.delete);

export { articleRouter };
