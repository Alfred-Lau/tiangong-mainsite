import React, { useCallback } from 'react';
import { Button } from 'antd';
import styles from './index.less';

export interface FlipCardProps {
  title: string;
  desc: string;
  link: string;
  tags: string[];
  cover: string;
  long?: string;
  website?: string;
}

const FlipCard: React.FC<FlipCardProps> = (props: FlipCardProps) => {
  const { title, desc, link, tags = [], cover, long, website } = props;
  const openInGitHub = useCallback(() => window.open(link), [link]);
  const goToWebsite = useCallback(() => window.open(website), [website]);
  return (
    <div className={styles.flip_card_container}>
      <div className={styles.center}>
        <div className={styles.cover}>
          <img src={cover} alt="cover" className={styles.coverImg} />
        </div>

        <div className={styles.mask}>
          <span className={styles.title}>{title}</span>
          <div className={styles.tags}>
            {tags.map((tag) => {
              return (
                <span className={styles.tag} key={tag}>
                  {tag}
                </span>
              );
            })}
          </div>
          <p className={styles.desc}>{desc}</p>
          <div className={styles.operations}>
            <Button onClick={goToWebsite} type={'primary'}>
              浏览项目
            </Button>
            <Button onClick={openInGitHub} type={'primary'}>
              查看代码
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
