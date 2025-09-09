declare module '*.module.scss' {
	const classes: { [key: string]: string }
	export default classes
}

declare module '*.webp'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.svg'

declare global {
	interface Window {
		__TANSTACK_QUERY_CLIENT__:
		import("@tanstack/query-core").QueryClient;
	}
}