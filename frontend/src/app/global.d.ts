declare module '*.module.scss' {
	const classes: { [key: string]: string }
	export default classes
}

declare module '*.svg' {
	const content: string;
	export default content;
}

declare global {
	interface Window {
		__TANSTACK_QUERY_CLIENT__:
		import("@tanstack/query-core").QueryClient;
	}
}