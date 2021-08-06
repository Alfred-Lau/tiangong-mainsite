import styles from './index.less';
import React from 'react';
import { BookOutlined } from '@ant-design/icons';

export interface ListProps {
  data: ItemProps[];
  showMore?: boolean;
}

export interface ItemProps {
  key: number;
  title: string;
  description: string;
  link: string;
  created_at: string;
  author: string;
}

function Item({ item }) {
  const { title, description, link, author, created_at } = item;

  const openLink = React.useCallback(
    (link: string) => {
      if (link) {
        window.open(link);
      }
    },
    [link],
  );
  return (
    <div className={styles.item} onClick={() => openLink(item.link)}>
      <div className={styles.titleWrapper}>
        <BookOutlined className={styles.icon} />
        <h4 className={styles.title}>{title}</h4>
      </div>

      <p className={styles.info}>
        <a className={styles.author}>{author}</a>
        <span className={styles.created_at}>{created_at}</span>
      </p>
      <p className={styles.description}>{description}</p>
    </div>
  );
}

function List(props: ListProps) {
  const { data, showMore } = props;
  return (
    <div className={styles.list}>
      {data.map((item, index) => {
        return <Item item={item} key={index} />;
      })}
      {showMore && <div className={styles.more}>更多</div>}
    </div>
  );
}

export default List;
