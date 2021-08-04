import styles from './index.less';
import Avatar from '@/components/Avatar';

const FirstScreen = () => {
  return (
    <div className={styles.firstScreen}>
      <div className={styles.center}>
        <Avatar size="large" />
      </div>
    </div>
  );
};

export default FirstScreen;
