import { ContentLayout } from "@/layouts";
import { lazy } from "react";
import { Navigate } from "react-router";
import { articlesRoutes } from "./articleRoutes";

const MainPage = lazy(() => import("@/pages").then(module => ({ default: module.MainPage })))

export const mainRoutes = {
	path: "/",
	element: <ContentLayout />,
	children: [
		{ index: true, element: <Navigate to="main" replace /> },
		{ path: "main", element: <MainPage /> },
		articlesRoutes,
	],
};