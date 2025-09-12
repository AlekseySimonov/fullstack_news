import {
  createArticleValidator as create,
  updateArticleValidator as update,
  articleQueryValidator as query,
} from './article.validator';
export const articleValidators = {
  create,
  update,
  query,
};
