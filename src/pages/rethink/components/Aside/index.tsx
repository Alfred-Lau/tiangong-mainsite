import { FC } from 'react';
import styles from './index.less';

export interface Item {
  id: number;
  title: string;
}

interface AsideProps {
  list: Item[];
  title: string;
}

const Aside: FC<AsideProps> = (props) => {
  const { title, list } = props;
  return (
    <div className={styles.aside}>
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.list}>
        {list.map((item) => (
          <li key={item.id}>
            <div className={styles.item}>{item.title}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Aside;
