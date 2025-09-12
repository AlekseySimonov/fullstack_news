import { Button, Input, Layout, Menu, MenuProps, Tooltip } from "antd";
import { icons } from "@/shared/assets";
import { MenuOutlined, SearchOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { MenuDrawer } from "@/components";
import styles from "./__headerStyle.module.scss"
import { links } from "@/shared/links";

const { Header } = Layout;

const HeaderLayout: React.FC = () => {
	const [open, setOpen] = useState(false);
	const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1100);

	useEffect(() => {
		const handleResize = () => setIsDesktop(window.innerWidth > 1100);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const menuItems = links.menuLinks.map((link) => ({
		key: link.link,
		label: link.title
	}));

	return (
		<Header className={styles.header}>
			<div className={styles.header_logo}>
				<img src={icons.logo} alt="logo" />
			</div>

			{isDesktop && (
				<div className={styles.header_navitems}>
					<Menu
						mode="horizontal"
						items={menuItems}
						overflowedIndicator={null}
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