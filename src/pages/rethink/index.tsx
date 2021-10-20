import React, { useState } from 'react';
import moment from 'moment';
import styles from './index.less';
import useParams, { MatchParams } from '@/hooks/useParams';
import { queryBlogDetailById } from '@/services/Blog';

const Rethink: React.FC<MatchParams> = (props) => {
  const { params: { id } = {} } = useParams(props);
  const [detail, setDetail] = useState<MainSiteApi.Blog | undefined>();
  const getBlogDetail = async function (id: number) {
    const ret = await queryBlogDetailById(id);
    setDetail(ret);
  };

  React.useEffect(() => {
    getBlogDetail(id);
  }, []);

  return (
    <div className={styles.rethink}>
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
            dangerouslySetInnerHTML={{ __html: detail?.content }}
          ></article>
        </div>
      </main>
    </div>
  );
};

export default Rethink;
