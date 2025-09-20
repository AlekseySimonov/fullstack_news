import { Card, Empty, Tag } from 'antd';
import styles from "./_articleCard.module.scss"
import { formatDate } from '@/shared/utils';
import { ArticleCardProps } from '../../model/types';

const ArticleCard: React.FC<ArticleCardProps> = (props) => {
  const renderCover = () => {
    if (props.size === 'sm') return null;
    return props.image ? (
      <img
        className={`${styles.card_img} ${styles.card_img__cover}`}
        alt="cover"
        src={props.image}
      />
    ) : (
      <Empty
        image={Empty.PRESENTED_IMAGE_DEFAULT}
        styles={{ image: { height: 240 } }} 
        description={false}
      />
    );
  };

  return (
    <Card
      hoverable
      className={`${styles.card} ${styles[`card_${props.size}`]}`}
      cover={renderCover()}
      classNames={{ body: styles.card_body }}
    >
      {props.tags && <div className={styles.tags}>
        {props.tags.map((tag, key) => (
          <Tag key={key} className={styles.tag}>{tag}</Tag>
        ))}
      </div>}
      <h3>{props.title}</h3>
      <div className={styles.card_footer}>
        {props.date && <div className={styles.card_footer__date}>{formatDate(props.date)}</div>}
        <div className={styles.card_footer__author}>By <strong>{props.author}</strong></div>
      </div>
    </Card>
  )
}

export default ArticleCard
