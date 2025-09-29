import { Flex, Layout } from "antd";
import { HeaderLayout } from "../../header";
import { RouterProvider } from "react-router";
import { FooterLayout } from "../../footer";
import styles from "./_base.module.scss"
import { appRouter } from "@/app/providers";
import { Suspense } from "react";
import { Loader } from "@/components/loader";

export const Base: React.FC = () => {

	return ((
		<Flex gap="middle" wrap>
			<Layout className={styles.layout}>
					<HeaderLayout />
					<Suspense fallback={<Loader/>}>
						<RouterProvider router={appRouter} />
						<FooterLayout />
					</Suspense>
			</Layout>
		</Flex>
	))
}