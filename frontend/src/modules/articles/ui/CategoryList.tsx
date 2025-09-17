import { ArticleCard } from '@/components'
import React from 'react'
import styles from "./_categoryBlock.module.scss"
import { Button, Typography } from 'antd'
import { useArticles } from '../api'
interface CategoryListProps {
	title: string,
	category: string,
}
const CategoryList: React.FC<CategoryListProps> = ({ title, category }) => {
	const { Title } = Typography;

	const { data: articles } = useArticles({category}) ?? []

	if (!articles) return null

	return (
		<div className={styles.block}>
			<div className={styles.block_header}>
				<Title level={3}>{title}</Title>
				<Button type="default">View all</Button>
			</div>
			<div className={styles.block_content}>
				{articles.map(article => (
					<ArticleCard
						key={article._id}
						title={article.title}
						author={article.author}
						updateDate={article.updatedAt}
						tags={article.tags}
						size='md'
					/>
				))}
			</div>
		</div>
	)
}

export default CategoryList