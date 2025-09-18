import { Card, Empty, Tag } from 'antd';
import styles from "./_articleCard.module.scss"
import { formatDate } from '@/shared/utils';
import { ArticleCardProps } from '../../model/types';

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  image,
  tags,
  author,
  date,
  size = 'md'
}) => {
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
      {tags && <div className={styles.tags}>
        {tags.map((tag, key) => (
          <Tag key={key} className={styles.tag}>{tag}</Tag>
        ))}
      </div>}
      <h3>{title}</h3>
      <div className={styles.card_footer}>
        {date && <div className={styles.card_footer__date}>{formatDate(date)}</div>}
        <div className={styles.card_footer__author}>By <strong>{author}</strong></div>
      </div>
    </Card>
  )
}

export default ArticleCard
