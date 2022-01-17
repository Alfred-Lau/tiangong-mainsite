import { FC, useCallback, useEffect, useState } from 'react';
import styles from './index.less';
import { queryTags } from '@/services/Tag';
import { useHistory } from 'umi';

const Aside: FC = (props) => {
  const [tags, setTags] = useState<MainSiteApi.TagItem[]>([]);
  const history = useHistory();

  useEffect(() => {
    queryTags().then((res) => {
      setTags(res);
    });
  }, []);

  const gotoTagPage = useCallback((id: number) => {
    history.push(`/tag/${id}`);
  }, []);

  return (
    <div className={styles.aside}>
      <h3 className={styles.title}>热门专题</h3>
      <ul className={styles.list}>
        {tags.map((item) => (
          <li key={item.id} onClick={() => gotoTagPage(item.id)}>
            <div className={styles.item}>
              <img src="/assets/tagscard.png" alt="" />
              <div className={styles.tagTitleWrapper}>
                <h3>{item.title}</h3>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Aside;
