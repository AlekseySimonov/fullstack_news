import React from "react";
import { Drawer, Row, Col, Button, Input, Divider } from "antd";
import {
	FacebookOutlined,
	InstagramOutlined,
	TwitterOutlined,
	WhatsAppOutlined,
	CloseOutlined,
} from "@ant-design/icons";
import styles from "./_drawer.module.scss";

interface MenuDrawerProps {
	open: boolean;
	onClose: () => void;
}

const MenuDrawer: React.FC<MenuDrawerProps> = ({ open, onClose }) => {
	return (
		<Drawer
			placement="left"
			closable={false}
			onClose={onClose}
			open={open}
			width="100%"
			style={{overflow: "hidden"}}
			className={styles.drawer}
		>
			<Row gutter={64} style={{overflow: "hidden"}}>
				<Col span={12} className={styles["menu-left"]}>
					<ul className={styles["menu-list"]}>
						<li>FEATURES</li>
						<li>POP CULTURE </li>
						<li>DESIGN </li>
						<li>FASHION</li>
						<li>MUSIC</li>
						<li>EVENTS </li>
						<li>SHOP</li>
					</ul>

					<div className={styles.social}>
						<FacebookOutlined />
						<InstagramOutlined />
						<WhatsAppOutlined />
						<TwitterOutlined />
					</div>
				</Col>

				<Divider
					type="vertical"
					style={{ height: "100%", position: "absolute", left: "50%" ,width: "2px"}}
				/>

				<Col span={12} className={styles["menu-right"]}>
					<h4>INFORMATION</h4>
					<ul>
						<li>ABOUT US</li>
						<li>CONTACT US</li>
						<li>CAREERS</li>
					</ul>

					<h4>PARTNERSHIPS</h4>
					<ul>
						<li>COMMUNITY</li>
						<li>ADVERTISING</li>
						<li>MEDIA PARTNER</li>
					</ul>

					<ul className={styles.policy}>
						<li>PRIVACY POLICY</li>
						<li>TERMS AND CONDITIONS</li>
					</ul>

					<div className={styles.subscribe}>
						<Input placeholder="Enter your mail" suffix="→" />
					</div>
				</Col>
			</Row>

			<Button
				type="text"
				icon={<CloseOutlined />}
				onClick={onClose}
				className={styles["close-btn"]}
			/>

		</Drawer>
	);
};

export default MenuDrawer;
