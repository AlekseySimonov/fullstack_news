import { Button, Card, Tag } from "antd"
import styles from "./_eventCard.module.scss"
import { formatDate } from "@/shared/utils"
import { RightOutlined } from '@ant-design/icons'
import { EventCardProps } from "../../model/types"

const EventCard: React.FC<EventCardProps> = ({
	title,
	ticketLink,
	tags,
	place,
	date
}) => {
	return (
		<Card hoverable className={styles.card} classNames={{ body: styles.body }}>
			{tags && <div className={styles.tags}>
				{tags.map((tag, key) => (
					<Tag key={key} className={styles.tag}>{tag}</Tag>
				))}
			</div>}
			<h3>{title}</h3>
			<div className={styles.btn}>
				<Button className={styles.btnTicket}
					type="default"
					ghost
					href={ticketLink}
					disabled={!ticketLink}
				>
					By Ticket
				</Button>
				<Button className={styles.btnTicket}
					ghost
					shape="circle"
					href={ticketLink}
					disabled={!ticketLink}
				>
					<RightOutlined />
				</Button>
			</div>

			<div className={styles.body_footer}>
				{date && <div className={styles.body_footer__date}>{formatDate(date)}</div>}
				<div className={styles.body_footer__place}>At <strong>{place}</strong></div>
			</div>
		</Card>
	)
}

export default EventCard