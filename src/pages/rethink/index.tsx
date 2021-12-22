import React, { useState } from 'react';
import moment from 'moment';
import styles from './index.less';
import useParams, { MatchParams } from '@/hooks/useParams';
import { queryBlogDetailById } from '@/services/Blog';
import Banner from './components/Banner';
import Aside from './components/Aside';
import type { Item } from './components/Aside';

const Rethink: React.FC<MatchParams> = (props) => {
  const { params: { id } = {} } = useParams(props);
  const [detail, setDetail] = useState<MainSiteApi.Blog | undefined>();
  const [list, setList] = useState<Item[]>([]);
  const getBlogDetail = async function (id: number) {
    const ret = await queryBlogDetailById(id);
    setDetail(ret);
  };

  React.useEffect(() => {
    getBlogDetail(id);
  }, []);

  return (
    <div className={styles.rethink}>
      <Banner src={'/assets/1.jpg'} />
      <main className={styles.main}>
        <div className={styles.content}>
          <h3 className={styles.title}>{detail?.title}</h3>
          <div className={styles.meta}>
            <span className={styles.author}>{detail?.author}</span>
            <span className={styles['created-time']}>
              {moment(detail?.createdAt).format('YYYY-MM-DD HH:mm:mm')}
            </span>
          </div>
          <p className={styles.description}>{detail?.description}</p>
          <article
            className={styles.article}
            dangerouslySetInnerHTML={{ __html: detail?.content! }}
          ></article>
        </div>
        <Aside list={list} title="热门专题" />
      </main>
    </div>
  );
};

export default Rethink;
