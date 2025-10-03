import { Request } from "express";

export interface PaginationQuery {
	page: number;
	limit: number;
	skip: number;
	sort: Record<string, 1 | -1>;
}

declare module "express-serve-static-core" {
	interface Request {
		pagination?: PaginationQuery;
	}
}

export interface ArticleRequest extends Request {
	pagination?: PaginationQuery;
	query: {
		search?: string;
		category?: string;
		page?: string;
		limit?: string;
		sort?: string;
	};
}