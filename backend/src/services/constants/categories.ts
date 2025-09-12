export const CATEGORIES = [
	'Features',
	'Pop Culture',
	'Design',
	'Fashion',
	'Music',
	'Events',
	'Shop',
] as const;

export type Category = (typeof CATEGORIES)[number];