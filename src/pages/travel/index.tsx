import { FC } from 'react';
import styles from './index.less';
import Nav from '@/pages/travel/components/Nav';
import Banner from '@/pages/travel/components/Banner';
import Layer from '@/pages/travel/components/Layer';

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
