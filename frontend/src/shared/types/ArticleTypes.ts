export interface ArticleContentBlock {
	subtitle?: string;
	text: string;
}

export interface Article {
	_id: string;
	title: string;
	category?: string;
	author: string;
	content: ArticleContentBlock[];
	tags: string[];
	ticketLink?: string;
	isEditorsPick: boolean;
	createdAt: string;
	updatedAt: string;
}

export interface ArticlesResponse {
	data: Article[];
	page: number;
	pages: number;
	total: number;
}