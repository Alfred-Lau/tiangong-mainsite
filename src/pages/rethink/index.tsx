import React from 'react';
import styles from './index.less';
import useParams, { MatchParams } from '@/hooks/useParams';

const Rethink: React.FC<MatchParams> = (props) => {
  const [currentId, setCurrentId] = React.useState(() => {
    const { params: { id } = {} } = useParams(props);
    return id;
  });

  React.useEffect(() => {}, [currentId]);

  return (
    <div className={styles.rethink}>
      <main className={styles.main}>{currentId}</main>
    </div>
  );
};

export default Rethink;
