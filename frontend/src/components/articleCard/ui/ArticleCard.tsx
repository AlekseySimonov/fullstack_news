import { Card, Empty, Tag } from 'antd';
import styles from "./_articleCard.module.scss"
import { formatDate } from '@/shared/utils';

interface ArticleCardProps {
  title: string
  image?: string
  tags?: string[]
  author?: string
  updateDate?: string
  size?: 'sm' | 'md' | 'lg'
}
const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  image,
  tags,
  author,
  updateDate,
  size = 'md'
}) => {
  const { Meta } = Card;
  const renderCover = () => {
    if (size === 'sm') return null;
    return image ? (
      <img
        className={`${styles.card_img} ${styles.card_img__cover}`}
        alt="cover"
        src={image}
      />
    ) : (
      <Empty
        image={Empty.PRESENTED_IMAGE_DEFAULT}
        imageStyle={{ height: 240 }}
        description={false}
      />
    );
  };

  return (
    <Card
      hoverable
      className={`${styles.card} ${styles[`card_${size}`]}`}
      cover={renderCover()}
      classNames={{ body: styles.card_body }}
    >
      {tags && <div className={styles.card_tags}>
        {tags.map((tag, key) => (
          <Tag key={key}>{tag}</Tag>
        ))}
      </div>}
      <h3>{title}</h3>
      <div className={styles.card_footer}>
        {updateDate && <div className={styles.card_footer__date}>{formatDate(updateDate)}</div>}
        <div className={styles.card_footer__author}>By <strong>{author}</strong></div>
      </div>
    </Card>
  )
}

export default ArticleCard
