export interface Response<T> {
	data: T;
	page: number;
	pages: number;
	total: number;
}