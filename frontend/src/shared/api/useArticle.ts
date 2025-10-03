import { fetcher } from "@/shared/api";
import { useQuery } from "@tanstack/react-query";
import { Article, ArticlesResponse } from "../types";

interface UseArticlesProps {
	category?: string;
	limit?: number;
	page?: number;
	sort?: number;
}
export function useArticles({ category, limit = 6, page = 1, sort = 1 }: UseArticlesProps = {}) {
	return useQuery<Article[], Error>({
		queryKey: ["articles", category, limit, page, sort],

		queryFn: async () => {
			const queryParams = new URLSearchParams();
			if (category) queryParams.append("category", category);
			if (limit) queryParams.append("limit", limit.toString());
			if (page) queryParams.append("page", page.toString());
			if (sort) queryParams.append("sort", sort.toString());

			const res = await fetcher<ArticlesResponse>(`/articles?${queryParams.toString()}`);
			return res.data;
		},
	});
}