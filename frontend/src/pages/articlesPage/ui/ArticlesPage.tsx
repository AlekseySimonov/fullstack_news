import { ArticleCard } from "@/components";
import { useArticles } from "@/shared/api";
import { useNavigate, useParams } from "react-router";
import styles from "./_articlesPage.module.scss"


const ArticlesPage: React.FC = () => {
	const navigate = useNavigate()
	const { category } = useParams<{ category: string }>();
	const { data: articles = [] } = useArticles({ category });
	if (!articles || !articles.length) return null
	return (
		<section className={styles.page}>
			<h3>{category?.toUpperCase()}</h3>
			<div className={styles.page_cards}>
				{articles.map(article => (
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
		</section>
	)
};

export default ArticlesPage