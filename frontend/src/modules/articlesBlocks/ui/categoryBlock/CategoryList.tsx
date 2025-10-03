import { ArticleCard } from '@/components'
import React from 'react'
import styles from "./_categoryBlock.module.scss"
import { useArticles } from '@/shared/api'
import BaseBlock from '../baseBlock/BaseBlock'
import { useNavigate } from 'react-router'
interface CategoryListProps {
	title: string,
	category: string,
}
const CategoryList: React.FC<CategoryListProps> = ({ title, category }) => {
	const navigate = useNavigate()

	const { data: articles = [] } = useArticles({ category });

	return (
			<BaseBlock title={title} blockHref={`articles/${category}`}>
				<div className={styles.content}>
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
			</BaseBlock>
	)
}

export default CategoryList