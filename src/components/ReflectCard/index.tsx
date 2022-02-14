import styles from './index.less';
import React from 'react';

export interface ReflectCardProps {
  title: string;
  desc: string;
  link: string;
  tags: string[];
  cover: string;
  style?: React.CSSProperties;
}

const ReflectCard: React.FC<ReflectCardProps> = (props: ReflectCardProps) => {
  const { title, desc, link, tags = [], cover, ...restProps } = props;
  const goto = () => {
    window.open(link);
  };
  return (
    <div className={styles.flip_card_container} {...restProps} onClick={goto}>
      <div className={styles.center}>
        <div className={styles.cover}>
          <img src={cover} alt="cover" className={styles.coverImg} />
        </div>
        <div className={styles.content}>
          <h4 className={styles.title}>{title}</h4>
          <p className={styles.desc}>{desc}</p>
          <div className={styles.tags}>
            {tags.map((tag) => {
              return <span className={styles.tag}>{tag}</span>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReflectCard;
