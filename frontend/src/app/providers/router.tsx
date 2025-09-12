import { createBrowserRouter, Navigate } from "react-router";
import { Spin } from "antd";
import { mainRoutes } from "./routes";
import { Suspense } from 'react';

export const appRouter = createBrowserRouter([
	mainRoutes,
	{
		path: "*",
		element: (
			<Suspense fallback= {< Spin />} >
				<Navigate to="/" replace />
			</Suspense>
		),
	},
]
);