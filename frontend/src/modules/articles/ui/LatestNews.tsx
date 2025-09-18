import { Button } from "antd"
import Title from "antd/es/typography/Title"
import styles from "./_latestNews.module.scss"
import { useArticles } from "../api"
import { ArticleCard, ImageCard } from "@/components"

interface LatestNewsProps {
	title: string,
	category?: string,
}

const LatestNews: React.FC<LatestNewsProps> = ({ title, category }) => {

	const { data: articles } = useArticles() ?? []

	if (!articles) return null

	return (
		<div className={styles.block}>
			<div className={styles.block_header}>
				<Title level={3}>{title}</Title>
				<Button type="default">View all</Button>
			</div>
			<div>
				<div className={styles.block_start}>
					<ImageCard
						key={articles[0]._id}
						title={articles[0].title}
						author={articles[0].author}
						date={articles[0].updatedAt}
						tags={articles[0].tags}
					/>
					<div className={styles.block_start__list}>
						{articles.slice(0, 3).map(article => (
							<ArticleCard
								key={article._id}
								title={article.title}
								author={article.author}
								date={article.updatedAt}
								tags={article.tags}
								size='sm'
							/>
						))}
					</div>
				</div>
				<div className={styles.block_end}>
					{articles.slice(3, 6).map(article => (
						<ArticleCard
							key={article._id}
							title={article.title}
							author={article.author}
							date={article.updatedAt}
							tags={article.tags}
							size='md'
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default LatestNews