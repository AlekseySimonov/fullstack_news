import { AutoComplete, Button, Input, Layout, Menu, MenuProps, Drawer, Row, Col } from "antd";
import { headerStyle } from "./headerStyle";
import { icons } from "@/UI/assets";
import {CloseOutlined, MenuOutlined} from "@ant-design/icons";
import { useState } from "react";
import { MenuDrawer } from "@/components";
const { Header } = Layout;

const items: MenuProps['items'] = [
	{ key: '/features', label: 'FEATURES' },
	{ key: '/pop-culture', label: 'POP CULTURE' },
	{ key: '/design', label: 'DESIGN' },
	{ key: '/fashion', label: 'FASHION' },
	{ key: '/music', label: 'MUSIC' },
	{ key: '/events', label: 'EVENTS' },
];

const HeaderLayout: React.FC = () => {
	const [open, setOpen] = useState(false);
	return (<Header style={headerStyle}>
		<img src={icons.logo} alt="#" />
		<AutoComplete
			classNames={{ popup: { root: 'certain-category-search-dropdown' } }}
			popupMatchSelectWidth={500}
			style={{ width: 250 }}
		>
			<Input.Search
				placeholder="Type keywords..."
				allowClear
				size="large"
				style={{ width: '300px' }}
			/>
		</AutoComplete>

		<Menu
			mode="horizontal"
			items={items}
		/>
		<Button type="primary">
			Sign in
		</Button>

		<Button
			type="text"
			icon={<MenuOutlined />}
			onClick={() => setOpen(true)}
			// className={styles["menu-btn"]}
		/>

			<MenuDrawer open={open} onClose={() => setOpen(false)} />
	</Header>)
}

export default HeaderLayout