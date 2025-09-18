import { Button, Typography } from "antd"
import styles from "./_baseBlock.module.scss"
import { ReactNode } from "react"

interface BaseBlockProps {
	title: string
	children?: ReactNode
}

const BaseBlock: React.FC<BaseBlockProps> = ({
	title,
	children
}) => {
	const { Title } = Typography

	return (
		<div className={styles.block}>
			<div className={styles.block_header}>
				<Title level={3}>{title}</Title>
				<Button type="default">View all</Button>
			</div>
			{children}
		</div>

	)
}

export default BaseBlock