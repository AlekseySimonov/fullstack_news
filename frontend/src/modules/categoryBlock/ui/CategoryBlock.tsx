import { ArticleCard } from '@/components'
import React from 'react'
import styles from "./_categoryBlock.module.scss"
import { Button, Typography } from 'antd'
interface CategoryBlockProps {
	title: string
}
const CategoryBlock: React.FC<CategoryBlockProps> = ({ title }) => {
	const { Title } = Typography;

	return (
		<div className={styles.block}>
			<div className={styles.block_header}>
				<Title level={3}>{title}</Title>
				<Button type="default">View all</Button>
			</div>
			<div className={styles.block_content}>
				<ArticleCard title="Lorem..." author="John Collins" updateDate="01.02.2004" tags={['tag 1', 'tag 2', 'tag 3', 'tag 4']}/>
				<ArticleCard title="Lorem..." author="John Collins" updateDate="01.02.2004" tags={['tag 1', 'tag 2', 'tag 3', 'tag 4']}/>
				<ArticleCard title="Lorem..." author="John Collins" updateDate="01.02.2004" tags={['tag 1', 'tag 2', 'tag 3', 'tag 4']}/>
				<ArticleCard title="Lorem..." author="John Collins" updateDate="01.02.2004" tags={['tag 1', 'tag 2', 'tag 3', 'tag 4']}/>
				<ArticleCard title="Lorem..." author="John Collins" updateDate="01.02.2004" tags={['tag 1', 'tag 2', 'tag 3', 'tag 4']}/>
				<ArticleCard title="Lorem..." author="John Collins" updateDate="01.02.2004" tags={['tag 1', 'tag 2', 'tag 3', 'tag 4']}/>
			</div>
		</div>
	)
}

export default CategoryBlock