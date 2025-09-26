import { Request, Response, NextFunction } from 'express';
import { CATEGORIES } from '../services';

export const validateArticleRequest = (req: Request, res: Response, next: NextFunction) => {
	const { category, ticketLink } = req.body;

	if (category && CATEGORIES.includes(category)) {
		return res.status(400).json({
			message: `Invalid category. Must be one of: ${CATEGORIES.join(', ')}`,
		});
	}

	if (category?.toLowerCase() === 'events') {
		if (!ticketLink || typeof ticketLink !== 'string' || !/^https?:\/\/.+/.test(ticketLink)) {
			return res.status(400).json({
				message: 'ticketLink is required and must be a valid URL for events',
			});
		}
	}

	next();
};