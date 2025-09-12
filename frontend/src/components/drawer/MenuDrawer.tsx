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
import { icons } from "@/shared/assets";
import { links } from "@/shared/links";

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
			className={styles.drawer}
		>
			<Row gutter={64}  className={styles.drawer_row}>
				<Col span={8} className={styles.drawer_logo}>
					<img src={icons.logo} alt="Logo" className={styles.drawer_logo} />
				</Col>

				<Col span={8} className={styles.drawer_left}>
					<ul className={styles.drawer_list}>
						{links.menuLinks.map((link) => (
							<li key={link.title}>
								<a href={link.link}>{link.title}</a>
							</li>
						))}
					</ul>

					<div className={styles.drawer_left__social}>
						<FacebookOutlined />
						<InstagramOutlined />
						<WhatsAppOutlined />
						<TwitterOutlined />
					</div>
				</Col>

				<Col span={8} className={styles.drawer_right}>
					<h4>INFORMATION</h4>
					<ul>
						{links.infoLinks.map((link) => (
							<li key={link.title}>
								<a href={link.link}>{link.title}</a>
							</li>
						))}
					</ul>


					<h4>PARTNERSHIPS</h4>
					<ul>
						{links.partnershipLinks.map((link) => (
							<li key={link.title}>
								<a href={link.link}>{link.title}</a>
							</li>
						))}
					</ul>

					<ul className={styles.drawer_right__policy}>
						{links.policyLinks.map((link) => (
							<li key={link.title}>
								<a href={link.link}>{link.title}</a>
							</li>
						))}
					</ul>

					<div className={styles.drawer_right__subscribe}>
						<Input placeholder="Enter your mail" suffix="→" />
					</div>
				</Col>
			</Row>

			<Button
				type="text"
				icon={<CloseOutlined />}
				onClick={onClose}
				className={styles.drawer_closeBtn}
			/>

		</Drawer>
	);
};

export default MenuDrawer;
