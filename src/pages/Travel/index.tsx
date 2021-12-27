import { FC } from 'react';
import styles from './index.less';
import Nav from '@/pages/Travel/components/Nav';
import Banner from '@/pages/Travel/components/Banner';
import Layer from '@/pages/Travel/components/Layer';

const Travel: FC = () => {
  return (
    <div className={styles.travel}>
      <Nav></Nav>
      <Banner></Banner>
      <Layer title={'We Offer Best Services'} subtitle={'CATEGORY'}>
        我是核心类
      </Layer>
    </div>
  );
};

export default Travel;
