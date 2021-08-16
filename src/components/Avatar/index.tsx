import classnames from 'classnames';
import styles from './index.less';

export interface AvatarProps {
  size: 'large' | 'small';
}

function Avatar(props: AvatarProps) {
  const { size } = props;

  return (
    <div className={styles.avatar}>
      <img
        src="assets/avatar.png"
        alt="avatar"
        className={`${styles.avatar} ${
          size === 'large' ? styles.large : styles.small
        }`}
      />
      {size === 'large' ? (
        <h4 className={styles.largeTitle}>工程化悟道</h4>
      ) : (
        <h4 className={styles.avatarTitle}>工程化悟道</h4>
      )}
    </div>
  );
}

export default Avatar;
