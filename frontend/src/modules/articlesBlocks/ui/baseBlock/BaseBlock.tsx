import { Button } from "antd"
import styles from "./_baseBlock.module.scss"
import { ReactNode } from "react"

interface BaseBlockProps {
	title?: string
	children?: ReactNode
	blockHref?: string
}

const BaseBlock: React.FC<BaseBlockProps> = ({
	title,
	children,
	blockHref
}) => {

	return (
		<div className={styles.block}>
			<div className={styles.block_header}>
				<h3>{title}</h3>
				<Button type="default" href={blockHref}>View all</Button>
			</div>
			{children}
		</div>
	)
}

export default BaseBlock