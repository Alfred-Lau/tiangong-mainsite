import styles from './index.less';

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
  const { title } = item;
  return <div>{title}</div>;
}

function List(props: ListProps) {
  const { data, showMore } = props;
  return (
    <div className={styles.list}>
      {data.map((item, index) => {
        return <Item item={item} key={index} />;
      })}
    </div>
  );
}

export default List;
