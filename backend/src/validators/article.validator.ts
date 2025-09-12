import { body, param } from 'express-validator';
import { CONSTANTS } from '../services';

const baseRules = {
  title: body('title')
    .isString()
    .withMessage('Title must be a string')
    .isLength({ min: 3 })
    .withMessage('Title must be at least 3 characters long'),

  author: body('author')
    .isString()
    .withMessage('Author must be a string')
    .notEmpty()
    .withMessage('Author is required'),

  category: body('category')
    .optional()
    .isIn(CONSTANTS.CATEGORIES)
    .isString()
    .withMessage('Category must be a string'),

  description: body('description')
    .isArray({ min: 1 })
    .withMessage('Description must be a non-empty array'),

  content: body('content')
    .isArray({ min: 1 })
    .withMessage('Content must be a non-empty array')
    .custom((value) => {
      if (!Array.isArray(value)) throw new Error('Content must be an array');
      value.forEach((block, i) => {
        if (typeof block.text !== 'string' || block.text.trim() === '') {
          throw new Error(`Content[${i}].text is required`);
        }
      });
      return true;
    }),

  tags: body('tags')
    .optional()
    .isArray()
    .withMessage('Tags must be an array of strings')
    .custom((arr) => arr.every((t: unknown) => typeof t === 'string'))
    .withMessage('Each tag must be a string'),

  ticketLink: body('ticketLink')
    .optional()
    .isURL()
    .withMessage('ticketLink must be a valid URL'),

  isEditorsPick: body('isEditorsPick')
    .optional()
    .isBoolean()
    .withMessage('isEditorsPick must be a boolean'),
};

export const createArticleValidator = [
  baseRules.title,
  baseRules.author,
  baseRules.category,
  baseRules.description,
  baseRules.content,
  baseRules.tags,
  baseRules.ticketLink,
  baseRules.isEditorsPick,
];

export const updateArticleValidator = [
  param('id').isMongoId().withMessage('Invalid article id'),
  baseRules.title.optional(),
  baseRules.author.optional(),
  baseRules.category.optional(),
  baseRules.description.optional(),
  baseRules.content.optional(),
  baseRules.tags.optional(),
  baseRules.ticketLink.optional(),
  baseRules.isEditorsPick.optional(),
];
