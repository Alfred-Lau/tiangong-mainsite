import { FC, useEffect, useState } from 'react';
import styles from './index.less';
import { queryTags } from '@/services/Tag';

const Aside: FC = (props) => {
  const [tags, setTags] = useState<MainSiteApi.TagItem[]>([]);

  useEffect(() => {
    queryTags().then((res) => {
      setTags(res);
    });
  }, []);

  return (
    <div className={styles.aside}>
      <h3 className={styles.title}>热门专题</h3>
      <ul className={styles.list}>
        {tags.map((item) => (
          <li key={item.id}>
            <div className={styles.item}>
              <h3>{item.title}</h3>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Aside;
