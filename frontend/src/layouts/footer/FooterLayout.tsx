import { Col, Row } from "antd";
import styles from "./_footer.module.scss"
import { links } from "@/shared/links";

const FooterLayout: React.FC = () => {
	return (
		<div className={styles.footer}>
			<Row gutter={64} className={styles.footer_row}>
				<Col className={styles.footer_left}>
					<h1>Wild, <br /> Wired & <br />World</h1>
					<p>An Inspiring Hub for the Creative Community,
						Curating the Best in Culture, Style,
						and Innovation for a Connected Generation.
					</p>
					<div className={styles.footer_left__bottom}>
						WWW © 2024 All Rights Reserved
					</div>
				</Col>

				<Col flex="1">
					<Row gutter={64} className={styles.footer_right}>
						<div className={styles.footer_column}>
							<h4>CATEGORIES</h4>
							<ul className={styles.footer_list}>
								{links.menuLinks.map((link) => (
									<li key={link.title}>
										<a href={link.link}>{link.title}</a>
									</li>
								))}
							</ul>
						</div>

						<div className={styles.footer_column} >
							<h4>INFORMATION</h4>
							<ul className={styles.footer_list}>
								{links.infoLinks.map((link) => (
									<li key={link.title}>
										<a href={link.link}>{link.title}</a>
									</li>
								))}
							</ul>
						</div>

						<div className={styles.footer_column}>
							<h4>PARTNERSHIPS</h4>
							<ul className={styles.footer_list}>
								{links.partnershipLinks.map((link) => (
									<li key={link.title}>
										<a href={link.link}>{link.title}</a>
									</li>
								))}
							</ul>
						</div>

						<div className={styles.footer_column}>
							<h4>SOCIAL</h4>
							<ul className={styles.footer_list}>
								{links.socialLinks.map((link) => (
									<li key={link.title}>
										<a href={link.link}>{link.title}</a>
									</li>
								))}
							</ul>
						</div>
					</Row>
				</Col>

			</Row>
		</div>
	);
}

export default FooterLayout