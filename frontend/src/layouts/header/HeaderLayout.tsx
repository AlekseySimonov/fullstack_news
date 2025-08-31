import { Layout } from "antd";
import { headerStyle } from "./headerStyle";
const { Header } = Layout;

const HeaderLayout: React.FC = () => (
	<Header style={headerStyle}>Header</Header>
)

export default HeaderLayout