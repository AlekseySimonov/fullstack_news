import { Layout } from "antd";
import { contentStyle } from "./contentStyle";
const { Content } = Layout;

const ContentLayout: React.FC = () => (
	<Content style={contentStyle}>Content</Content>
)

export default ContentLayout