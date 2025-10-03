import { Spin } from "antd"
import styles from "./_loader.module.scss"

const Loader: React.FC = () => {

	return (
		<div className={styles.loader}>
			<div className={styles.loader_spin}>
				<Spin />
			</div>
		</div>
	)
}

export default Loader