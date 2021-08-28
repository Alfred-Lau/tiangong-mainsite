import { DoubleRightOutlined } from '@ant-design/icons';
import Avatar from '@/components/Avatar';
import React from 'react';
import AOS from 'aos';
import useTypewriter from 'react-typewriter-hook';

import 'aos/dist/aos.css';
import styles from './index.less';

let index = 0;
const MagicOcean = [
  '终于等到你，* *',
  '欢迎访问天工工程化主站',
  '楼主 烽火彼岸，专注前端工程化',
];
const FirstScreen = () => {
  const [magicName, setMagicName] = React.useState('终于等到你，* *');
  const intervalRef = React.useRef({});
  const name = useTypewriter(magicName);
  React.useEffect(() => {
    intervalRef.current = setInterval(() => {
      // index = index + 1 > 2 ? 0 : ++index + 1;
      index = index > 2 ? 0 : ++index;
      setMagicName(MagicOcean[index]);
    }, 3000);
    return function clear() {
      clearInterval(intervalRef.current);
    };
  }, [magicName]);

  //  init aos instance
  React.useEffect(() => {
    AOS.init({
      once: false, // 只展示一次动画
      offset: 50,
      delay: 100,
      duration: 1000,
    });
  }, []);

  return (
    <div className={styles.firstScreen} id="home">
      <div className={styles.center}>
        <Avatar size="large">
          <div className={styles.hello}>{name}</div>
        </Avatar>
      </div>

      <div className={styles.arrow} data-aos="fade-up">
        <DoubleRightOutlined />
      </div>
      <div className={styles.forkme}>
        <img src="" alt="" srcset="" />
      </div>
    </div>
  );
};

export default FirstScreen;
