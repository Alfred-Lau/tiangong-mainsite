import { FC } from 'react';
import styles from './index.less';
import Nav from '@/pages/travel/components/Nav';
import Banner from '@/pages/travel/components/Banner';
import Layer from '@/pages/travel/components/Layer';

const destinations = [
  {
    id: 1,
    url: '/assets/rome.png',
    address: 'Rome',
    cost: '$15K',
    time: '10 days',
  },
  {
    id: 2,
    url: '/assets/rome.png',
    address: 'Rome',
    cost: '$15K',
    time: '10 days',
  },
  {
    id: 3,
    url: '/assets/rome.png',
    address: 'Rome',
    cost: '$15K',
    time: '10 days',
  },
];

const Travel: FC = () => {
  return (
    <div className={styles.travel}>
      <Nav></Nav>
      <Banner></Banner>
      <Layer title={'We Offer Best Services'} subtitle={'CATEGORY'}>
        <img
          src="/assets/sharding.png"
          alt=""
          width="153px"
          className={styles.img}
        />
        <ul className={styles.images}>
          {[1, 2, 3, 4].map((item) => (
            <li>
              <img
                src={`/assets/best-services-0${item}.png`}
                alt="best-services"
              />
            </li>
          ))}
        </ul>
      </Layer>
      <Layer title={'Top Destinations'} subtitle={'Top Sellings'}>
        <img src="/assets/ring.png" alt="" className={styles.flower} />
        <ul className={styles.dest}>
          {destinations?.map((item) => (
            <li>
              <img src={item.url} alt="best-services" />
              <div className={styles.metadata}></div>
            </li>
          ))}
        </ul>
      </Layer>
    </div>
  );
};

export default Travel;
