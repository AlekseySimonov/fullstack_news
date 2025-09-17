import { Button, Card, Tag } from "antd"
import styles from "./_eventCard.module.scss"
import { formatDate } from "@/shared/utils"
import { RightCircleOutlined } from '@ant-design/icons'

interface EventCardProps {
	title: string
	ticketLink?: string
	tags?: string[]
	place?: string
	date?: string
}
const EventCard: React.FC<EventCardProps> = ({
	title,
	ticketLink,
	tags,
	place,
	date
}) => {
	return (
		<Card hoverable className={styles.card} classNames={{ body: styles.body }}>
			{tags && <div className={styles.body_tags}>
				{tags.map((tag, key) => (
					<Tag key={key} className={styles.body_tag}>{tag}</Tag>
				))}
			</div>}
			<h3>{title}</h3>
			<div className={styles.btn}>
				<Button className={styles.btnTicket}
					type="default"
					ghost
					block
					href={ticketLink}
					target="_blank"
					rel="noopener noreferrer"
					disabled={!ticketLink}
				>
					By Ticket
				</Button>
				<RightCircleOutlined style={{ fontSize: '40px' }} />
			</div>

			<div className={styles.body_footer}>
				{date && <div className={styles.body_footer__date}>{formatDate(date)}</div>}
				<div className={styles.body_footer__place}>At <strong>{place}</strong></div>
			</div>
		</Card>
	)
}

export default EventCard