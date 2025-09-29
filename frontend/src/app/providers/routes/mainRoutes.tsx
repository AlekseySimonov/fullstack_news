import { ContentLayout } from "@/layouts";
import { Spin } from "antd";
import { lazy, Suspense } from "react";
import { Navigate } from "react-router";

const MainPage = lazy(() => import("@/pages").then(module => ({ default: module.MainPage })))

export const mainRoutes = {
	path: "/",
	element: <ContentLayout />,
	children: [
		{ index: true, element: <Navigate to="main" replace /> },
		{ path: "main", element: <MainPage /> },
	],
};