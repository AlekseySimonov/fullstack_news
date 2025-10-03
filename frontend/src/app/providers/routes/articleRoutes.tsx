import { lazy } from "react";
import { Navigate } from "react-router";
import { ArticleLayout } from "@/layouts"

const ArticlesPage = lazy(() => import("@/pages").then(module => ({ default: module.ArticlesPage })))
const EditorPage = lazy(() => import("@/pages").then(module => ({ default: module.EditorPage })))
const Article = lazy(() => import("@/pages").then(module => ({ default: module.Article })))

export const articlesRoutes = {
	path: "/articles",
	element: <ArticleLayout />,
	children: [
		{ index: true, element: <Navigate to="all" replace /> },
		{ path: ":category", element: <ArticlesPage /> },
		{ path: "view/:id", element: <Article /> },
		{ path: "editor", element: <EditorPage /> },
		{ path: "editor/:id", element: <EditorPage /> },
	],
};