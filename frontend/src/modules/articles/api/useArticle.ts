import { fetcher } from "@/shared/api";
import { Article, ArticlesResponse } from "@/shared/types";
import { useQuery } from "@tanstack/react-query";

interface UseArticlesProps {
	category?: string;
	limit?: number;
	page?: number;
}
export function useArticles({ category, limit = 6, page = 1 }: UseArticlesProps = {}) {
	return useQuery<Article[], Error>({
		queryKey: ["articles", category, limit, page],

		queryFn: async () => {
			const queryParams = new URLSearchParams();
			if (category) queryParams.append("category", category);
			if (limit) queryParams.append("limit", limit.toString());
			if (page) queryParams.append("page", page.toString());

			const res = await fetcher<ArticlesResponse>(`/articles?${queryParams.toString()}`);
			return res.data;
		},
	});
}