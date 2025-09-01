import { Layout } from "antd";
import { contentStyle } from "./contentStyle";
import { MainPage } from "@/pages";
const { Content } = Layout;

const ContentLayout: React.FC = () => (
	<Content style={contentStyle}>
		<MainPage/>
	</Content>
)

export default ContentLayout