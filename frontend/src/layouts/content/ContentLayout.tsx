import { Layout } from "antd";
import { Outlet } from "react-router";
import styles from "./_contentLayout.module.scss"

const { Content } = Layout;

const ContentLayout: React.FC = () => (
	<Content className={styles.content}>
		<Outlet />
	</Content>
)

export default ContentLayout