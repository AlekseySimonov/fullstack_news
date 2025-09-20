import { Button, Card, Tag } from "antd"
import styles from "./_eventCard.module.scss"
import { formatDate } from "@/shared/utils"
import { RightOutlined } from '@ant-design/icons'
import { EventCardProps } from "../../model/types"

const EventCard: React.FC<EventCardProps> = (props) => {
	return (
		<Card hoverable className={styles.card} classNames={{ body: styles.body }}>
			{props.tags && <div className={styles.tags}>
				{props.tags.map((tag, key) => (
					<Tag key={key} className={styles.tag}>{tag}</Tag>
				))}
			</div>}
			<h3>{props.title}</h3>
			<div className={styles.btn}>
				<Button className={styles.btnTicket}
					type="default"
					ghost
					href={props.ticketLink}
					disabled={!props.ticketLink}
				>
					By Ticket
				</Button>
				<Button className={styles.btnTicket}
					ghost
					shape="circle"
					href={props.ticketLink}
					disabled={!props.ticketLink}
				>
					<RightOutlined />
				</Button>
			</div>

			<div className={styles.body_footer}>
				{props.date && <div className={styles.body_footer__date}>{formatDate(props.date)}</div>}
				<div className={styles.body_footer__place}>At <strong>{props.place}</strong></div>
			</div>
		</Card>
	)
}

export default EventCard