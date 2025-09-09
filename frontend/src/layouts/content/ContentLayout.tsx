import { Layout } from "antd";
import { contentStyle } from "./contentStyle";
import { Outlet } from "react-router";

const { Content } = Layout;

const ContentLayout: React.FC = () => (
	<Content style={contentStyle}>
		<Outlet />
	</Content>
)

export default ContentLayout