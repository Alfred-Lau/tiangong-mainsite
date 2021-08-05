import styles from './index.less';

export interface ListProps {
  data: object[];
}

function List(props: ListProps) {
  return <div className={styles.list}>list</div>;
}

export default List;
