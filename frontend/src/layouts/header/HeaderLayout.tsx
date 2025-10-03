import { Button, Layout, Menu, Tooltip } from "antd";
import { icons } from "@/shared/assets";
import { MenuOutlined, SearchOutlined } from "@ant-design/icons";
import { useState } from "react";
import { MenuDrawer } from "@/components";
import styles from "./__headerStyle.module.scss"
import { links } from "@/shared/links";
import { useBreakpoint } from "@/shared/hooks";
import { useNavigate } from "react-router";

const { Header } = Layout;

const HeaderLayout: React.FC = () => {
	const [open, setOpen] = useState(false);
	const navigate = useNavigate()
	const bp = useBreakpoint();

	const menuItems = links.menuLinks.map((link) => ({
		key: link.link,
		label: link.title,
		onClick: () => navigate(link.link),
	}));

	return (
		<Header className={styles.header}>
			<div className={styles.header_logo} onClick={() => navigate('/')}>
				<img src={icons.logo} alt="logo" />
			</div>

			{bp !== "mobile" && (
				<div className={styles.header_navitems}>
					<Menu
						mode="horizontal"
						items={menuItems}
						overflowedIndicator={null}
						selectedKeys={[location.pathname]}
					/>
				</div>
			)}

			<div className={styles.header_actions}>
				<Tooltip title="search">
					<Button shape="circle" type="text" icon={<SearchOutlined />} />
				</Tooltip>

				<Button type="primary" danger>
					Sign in
				</Button>

				<Button
					type="text"
					icon={<MenuOutlined />}
					onClick={() => setOpen(true)}
				/>
				<MenuDrawer open={open} onClose={() => setOpen(false)} />
			</div>
		</Header>
	);
};

export default HeaderLayout;