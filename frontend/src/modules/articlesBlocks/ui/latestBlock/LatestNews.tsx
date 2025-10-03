import styles from "./_latestNews.module.scss"
import { ArticleCard, HorizontalCard, ImageCard } from "@/components"
import { useArticles } from "@/shared/api"
import BaseBlock from "../baseBlock/BaseBlock"
import { useBreakpoint } from "@/shared/hooks"
import { useNavigate } from "react-router"

interface LatestNewsProps {
	title: string,
	category?: string,
}

const LatestNews: React.FC<LatestNewsProps> = ({ title, category }) => {
	const navigate = useNavigate()

	const { data: articles } = useArticles() ?? []
	const bp = useBreakpoint()

	if (!articles || !articles.length) return null

	if (bp === 'tablet' || bp === 'mobile') return (
		<BaseBlock title={title} blockHref={'articles/'}>
			{articles.map(article => (
				<HorizontalCard
					key={article._id}
					title={article.title}
					author={article.author}
					date={article.updatedAt}
					tags={article.tags}
					onCardClick={() => navigate(`/articles/${article._id}`)}
				/>
			))}
		</BaseBlock>
	)

	return (
		<BaseBlock title={title}>
			<div className={styles.start}>
				<ImageCard
					key={articles[0]._id}
					title={articles[0].title}
					author={articles[0].author}
					image={articles[0].imageUrl}
					date={articles[0].updatedAt}
					tags={articles[0].tags}
					onCardClick={() => navigate(`/articles/${articles[0]._id}`)}
				/>
				<div className={styles.start__list}>
					{articles.slice(0, 3).map(article => (
						<ArticleCard
							key={article._id}
							title={article.title}
							author={article.author}
							date={article.updatedAt}
							tags={article.tags}
							size='sm'
							onCardClick={() => navigate(`/articles/${articles[0]._id}`)}
						/>
					))}
				</div>
			</div>
			<div className={styles.end}>
				{articles.slice(3, 6).map(article => (
					<ArticleCard
						key={article._id}
						title={article.title}
						author={article.author}
						date={article.updatedAt}
						tags={article.tags}
						image={article.imageUrl}
						size='md'
						onCardClick={() => navigate(`/articles/${articles[0]._id}`)}
					/>
				))}
			</div>
		</BaseBlock>
	)
}

export default LatestNews