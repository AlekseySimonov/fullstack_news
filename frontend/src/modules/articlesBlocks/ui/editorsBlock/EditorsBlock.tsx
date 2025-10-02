import { HorizontalCard } from "@/components"
import { useArticles } from "../../api"
import BaseBlock from "../baseBlock/BaseBlock"
import styles from "./_editorsBlock.module.scss"

interface EditorsBlockProps {
	title: string,
	category?: string,
}
const EditorsBlock: React.FC<EditorsBlockProps> = ({ title, category }) => {
	const { data: articles = [] } = useArticles({ category });

	return (
		<div className={styles.block}>
			<BaseBlock title={title} >
				{articles.map(article => (
					<HorizontalCard
						key={article._id}
						title={article.title}
						author={article.author}
						date={article.updatedAt}
						image={article.imageUrl}
						tags={article.tags}
						content={article.content}
					/>
				))}
			</BaseBlock>
		</div>
	)
}

export default EditorsBlock