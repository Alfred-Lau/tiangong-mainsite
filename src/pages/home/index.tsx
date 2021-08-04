import { useEffect } from 'react';
import styles from './index.less';
import FirstScreen from './components/FirstScreen';
import LeftMenu from './components/LeftMenu';
import Content from './components/Content';

export default function IndexPage() {
  useEffect(() => {}, []);
  return (
    <div>
      <FirstScreen></FirstScreen>
      <div className={styles.container}>
        <LeftMenu />
        <Content />
      </div>
    </div>
  );
}
