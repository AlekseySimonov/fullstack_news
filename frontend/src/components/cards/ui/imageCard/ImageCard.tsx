import { Card, Empty, Tag } from "antd"
import styles from "./_imageCard.module.scss"
import { formatDate } from "@/shared/utils"
import { ImageCardProps } from "../../model/types";

const renderCover = (image: string | undefined) => {
	if (!image) {
		return (
			<div className={styles.card_img__wrapper}>
				<Empty
					image={Empty.PRESENTED_IMAGE_DEFAULT}
					styles={{ image: { height: '100%' } }}
					description={false}
					className={`${styles.card_img} ${styles.card_img__cover}`}
				/>
				<div className={styles.card_img__overlay} />
			</div>
		);
	}

	return (
		<div className={styles.card_img__wrapper}>
			<img
				className={`${styles.card_img} ${styles.card_img__cover}`}
				alt="cover"
				src={image}
			/>
			<div className={styles.card_img__overlay} />
		</div>
	);
};
const ImageCard: React.FC<ImageCardProps> = (props) => {
	return (
		<Card
			hoverable
			className={styles.card}
			classNames={{ body: styles.body }}
			onClick={props.onCardClick}
		>
			{renderCover(props.image)}
			<div className={styles.card_content}>
				{props.tags && (
					<div className={styles.tags}>
						{props.tags.map((tag, key) => (
							<Tag key={key} className={styles.tag}>{tag}</Tag>
						))}
					</div>
				)}

				<h3>{props.title}</h3>

				<div className={styles.body_footer}>
					{props.date && <div className={styles.body_footer__date}>{formatDate(props.date)}</div>}
					<div className={styles.body_footer__place}>By <strong>{props.author}</strong></div>
				</div>
			</div>
		</Card>
	)
}

export default ImageCard