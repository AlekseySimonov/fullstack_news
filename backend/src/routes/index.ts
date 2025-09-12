import { Router } from 'express';
import { articleRouter } from './Article.route';

const router = Router();

router.use('/articles', articleRouter);

export default router;
