import { Router } from "express"
import { ArticleController } from "../controllers/index.js"

const articlesRouter = new Router()

articlesRouter.get('/articles', ArticleController.getArticles)
articlesRouter.get('/articles/:id', ArticleController.getArticleById)
articlesRouter.post('/articles', ArticleController.createArticle)
articlesRouter.put('/articles/:id', ArticleController.updateArticle)
articlesRouter.patch("/articles/:id", ArticleController.patchArticle)
articlesRouter.delete('/articles/:id', ArticleController.deleteArticle)

export default articlesRouter