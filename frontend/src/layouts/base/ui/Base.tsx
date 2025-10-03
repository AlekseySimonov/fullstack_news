import { Flex, Layout } from "antd";
import { HeaderLayout } from "../../header";
import { FooterLayout } from "../../footer";
import styles from "./_base.module.scss"
import { Suspense, useState } from "react";
import { Loader } from "@/components/loader";
import { ContentLayout } from "@/layouts/content";

export const Base: React.FC = () => {
	const [contentReady, setContentReady] = useState(false);

	return ((
		<Flex gap="middle" wrap>
			<Layout className={styles.layout}>
				<HeaderLayout />
				<Suspense fallback={<Loader />}>
					<ContentLayout />
				</Suspense>
				<FooterLayout />
			</Layout>
		</Flex>
	))
}