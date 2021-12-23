import { FC } from 'react';
import styles from './index.less';
import Nav from '@/pages/Travel/components/Nav';
import Banner from '@/pages/Travel/components/Banner';

const Travel: FC = () => {
  return (
    <div className={styles.travel}>
      <Nav></Nav>
      <Banner></Banner>
    </div>
  );
};

export default Travel;
