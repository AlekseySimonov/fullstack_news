export interface BaseCardProps {
	title: string;
	tags?: string[];
	date?: string;
}

export interface ArticleCardProps extends BaseCardProps {
	image?: string
	author?: string
	size?: 'sm' | 'md' | 'lg'
}

export interface ImageCardProps extends BaseCardProps {
	image?: string;
	author?: string;
}

export interface EventCardProps extends BaseCardProps {
	ticketLink?: string
	place?: string
}