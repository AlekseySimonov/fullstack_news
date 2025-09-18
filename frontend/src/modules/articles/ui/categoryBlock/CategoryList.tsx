import { ArticleCard } from '@/components'
import React from 'react'
import styles from "./_categoryBlock.module.scss"
import { useArticles } from '../../api'
import BaseBlock from '../baseBlock/BaseBlock'
interface CategoryListProps {
	title: string,
	category: string,
}
const CategoryList: React.FC<CategoryListProps> = ({ title, category }) => {

	const { data: articles } = useArticles({ category }) ?? []
	if (!articles || !articles.length) return null

	return (
			<BaseBlock title={title}>
				<div className={styles.content}>
					{articles.map(article => (
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
			</BaseBlock>
	)
}

export default CategoryList