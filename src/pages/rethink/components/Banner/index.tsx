import { FC } from 'react';
import styles from './index.less';

interface BannerProps {
  src: string;
}

const Banner: FC<BannerProps> = (props) => {
  const { src } = props;
  return (
    <div className={styles.banner}>
      <img src={src} alt="banner" />
    </div>
  );
};

export default Banner;
