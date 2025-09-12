import { Request, Response, NextFunction } from "express";

export const pagination =
	(allowedSortFields: string[]) =>
		(req: Request, _res: Response, next: NextFunction) => {
			let {
				page = "1",
				limit = "10",
				sortBy = "createdAt",
				order = "desc",
			} = req.query as {
				page?: string;
				limit?: string;
				sortBy?: string;
				order?: "asc" | "desc";
			};

			const pageNum = Math.max(parseInt(page, 10) || 1, 1);
			const limitNum = Math.min(Math.max(parseInt(limit, 10) || 10, 1), 100);

			if (!allowedSortFields.includes(sortBy)) {
				sortBy = "createdAt";
			}

			const sortOrder: 1 | -1 = order === "asc" ? 1 : -1;

			req.pagination = {
				page: pageNum,
				limit: limitNum,
				skip: (pageNum - 1) * limitNum,
				sort: { [sortBy]: sortOrder },
			};

			next();
		};