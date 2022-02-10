import React, { FC } from 'react';
import styles from './index.less';

const Banner: FC = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerWrapper}>
        <div className={styles.info}>
          <p>Best Destinations around the world</p>
          <h3>Travel, enjoy and live a new and full life</h3>
          <p>
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>
          <button>Find out more</button>
          <span>
            <img src="/assets/play.png" alt="play" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
