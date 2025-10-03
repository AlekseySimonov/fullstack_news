import { Router } from 'express';
import { articleRouter } from './Article.route';
import { uploadRouter } from './Upload.route';

const router = Router();

router.use('/articles', articleRouter);
router.use('/', uploadRouter);

export default router;
