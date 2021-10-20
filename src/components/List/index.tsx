import styles from './index.less';
import React from 'react';
import { history } from 'umi';
import { BookOutlined } from '@ant-design/icons';

export interface ListProps {
  data: ItemProps[];
  showMore?: boolean;
}

export type ItemProps = Partial<MainSiteApi.Blog>;

function Item({ item }) {
  const { title, description, author, createdAt } = item;

  const openLink = React.useCallback((item) => {
    const { id, link } = item;
    if (id !== null) {
      history.push(`/rethink/${id}`);
    } else if (!id && link) {
      window.open(link);
    } else {
      console.error('not exist');
    }
  }, []);
  return (
    <div className={styles.item} onClick={() => openLink(item)}>
      <div className={styles.titleWrapper}>
        <BookOutlined className={styles.icon} />
        <h4 className={styles.title}>{title}</h4>
      </div>

      <p className={styles.info}>
        <a className={styles.author}>{author}</a>
        <span className={styles.created_at}>{createdAt}</span>
      </p>
      <p className={styles.description}>{description}</p>
    </div>
  );
}

function List(props: ListProps) {
  const { data = [], showMore } = props;

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
