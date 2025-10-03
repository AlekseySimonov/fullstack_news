import { HorizontalCard } from "@/components"
import { useArticles } from '@/shared/api'
import BaseBlock from "../baseBlock/BaseBlock"
import styles from "./_editorsBlock.module.scss"
import { useNavigate } from "react-router"

interface EditorsBlockProps {
	title: string,
	category?: string,
}
const EditorsBlock: React.FC<EditorsBlockProps> = ({ title, category }) => {
	const navigate = useNavigate();
	const { data: articles = [] } = useArticles({ category });

	return (
		<div className={styles.block}>
			<BaseBlock title={title} blockHref={`articles/${category}`}>
				{articles.map(article => (
					<HorizontalCard
						key={article._id}
						title={article.title}
						author={article.author}
						date={article.updatedAt}
						image={article.imageUrl}
						tags={article.tags}
						content={article.content}
						onCardClick={() => navigate(`/articles/${articles[0]._id}`)}
					/>
				))}
			</BaseBlock>
		</div>
	)
}

export default EditorsBlock