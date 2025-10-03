import { Button, Card, Empty, Tag } from "antd"
import { ArticleCardProps } from './../../model/types';
import styles from "./_horizontalCard.module.scss"
import { formatDate } from "@/shared/utils";
import { useBreakpoint } from "@/shared/hooks";

const HorizontalCard: React.FC<ArticleCardProps> = (props) => {
	const bp = useBreakpoint()
	const renderCover = () => {
		return props.image ? (
			<img
				className={styles.card_img}
				alt="cover"
				src={props.image}
			/>
		) : (
			<Empty
				image={Empty.PRESENTED_IMAGE_DEFAULT}
				styles={{ image: { height: '100%', marginTop: 'auto' } }}
				className={styles.card_img}
				description={false}
			/>
		);
	};

	const firstContent = props.content && props.content.length > 0 ? props.content[0] : null;

	return (
		<Card
			hoverable
			className={styles.card}
			classNames={{ body: styles.card_body }}
			onClick={props.onCardClick}
		>
			{renderCover()}
			<div className={styles.card_content}>
					{props.tags && <div className={styles.tags}>
						{props.tags.map((tag, key) => (
							<Tag key={key} className={styles.tag}>{tag}</Tag>
						))}
					</div>}
					<h3>{props.title}</h3>
					<div className={styles.card_footer}>
						{props.date && <div className={styles.card_footer__date}>{formatDate(props.date)}</div>}
						<div className={styles.card_footer__author}>By <strong>{props.author}</strong></div>
					</div>
			</div>
			{firstContent && bp === "desktop" && (
				<div className={styles.card_text}>
					{firstContent.subtitle && <h4>{firstContent.subtitle}</h4>}
					<p>{firstContent.text}</p>
					<Button type="default" style={{ width: 'max-content'}}>Read more</Button>
				</div>
			)}
		</Card>
	)
}

export default HorizontalCard
