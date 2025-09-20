import { Button } from "antd"
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

	return (
		<div className={styles.block}>
			<div className={styles.block_header}>
				<h3>{title}</h3>
				<Button type="default">View all</Button>
			</div>
			{children}
		</div>
	)
}

export default BaseBlock