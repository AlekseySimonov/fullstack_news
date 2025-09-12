import { QueryClient } from "@tanstack/react-query";

export const fetcher = async <T>(url: string, options?: RequestInit): Promise<T> => {
	const response = await fetch(`${process.env.API_URL}${url}`, {
		...options,
	});

	if (!response.ok) {
		throw new Error(`Error ${response.status}`);
	}
	return response.json();
};

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: 1,
			refetchOnWindowFocus: false,
		},
	},
});

