import { Card, Tag } from 'antd';
import styles from "./_articleCard.module.scss"
import { images } from '@/shared/assets';

interface ArticleCardProps {
  title: string
  image?: string
  tags?: string[]
  author?: string
  updateDate?: string
}
const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  image,
  tags,
  author,
  updateDate
}) => {
  const { Meta } = Card;
  return (
    <Card
      hoverable
      className={styles.card}
      cover={
        <img
          className={`${styles.card_img} ${image ? styles.card_img__cover : styles.card_img__scaleDown
            }`}
          alt="cover"
          src={image || images.emptyImage}
        />
      }
      classNames={{
        body: styles.card_body
      }}
    >
      {tags && <div className={styles.card_tags}>
        {tags.map((tag, key) => (
          <Tag key={key}>{tag}</Tag>
        ))}
      </div>}
      <h3>{title}</h3>
      <div className={styles.card_footer}>
        <div className={styles.card_footer__date}>{updateDate}</div>
        <div className={styles.card_footer__author}>By <strong>{author}</strong></div>
      </div>
    </Card>
  )
}

export default ArticleCard
