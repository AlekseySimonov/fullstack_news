import { Layout, Menu } from "antd";
import { headerStyle } from "./headerStyle";
const { Header } = Layout;

const navItems = ['FEATURES', 'POP CULTURE', 'DESIGN', 'FASHION', 'MUSIC', 'EVENTS', 'SHOP']
const items = navItems.map((item, index) => ({
	key: String(index + 1),
	label: item,
}));

const HeaderLayout: React.FC = () => (
	<Header style={headerStyle}>
		<Menu
			mode="horizontal"
			// defaultSelectedKeys={['2']}
			items={items}
			style={{ flex: 1, minWidth: 0, display: 'block'}}
		/>
	</Header>
)

export default HeaderLayout