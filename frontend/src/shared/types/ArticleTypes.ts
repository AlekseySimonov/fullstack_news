import { Response } from './GeneralTypes';

export interface ArticleContentBlock {
	subtitle?: string;
	text: string;
}

export interface Article {
	_id: string;
	title: string;
	category?: string;
	author: string;
	imageUrl?: string;
	content: ArticleContentBlock[];
	tags: string[];
	ticketLink?: string;
	isEditorsPick: boolean;
	createdAt: string;
	updatedAt: string;
}

export type ArticlesResponse = Response<Article[]>