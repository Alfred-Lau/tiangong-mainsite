import React from 'react';
import classnames from 'classnames';
import MediaQuery from 'react-responsive';
import styles from './index.less';
import { MIN_WIDTH } from '@/constants/varibles';

export interface AvatarProps {
  size: 'large' | 'small';
}

const Avatar: React.FC<AvatarProps> = function Avatar(props) {
  const { size, children } = props;

  return (
    <div className={styles.avatar}>
      <MediaQuery minWidth={MIN_WIDTH}>
        <>
          <img
            src="assets/avatar.png"
            alt="avatar"
            className={`${styles.avatar} ${
              size === 'large' ? styles.large : styles.small
            }`}
          />
          {size === 'large' ? (
            <h4 className={styles.largeTitle}>应有语的主站</h4>
          ) : (
            <h4 className={styles.avatarTitle}>应有语的主站</h4>
          )}
          <div className={styles.hello}>{children}</div>
        </>
      </MediaQuery>
      <MediaQuery maxWidth={MIN_WIDTH - 1}>
        <>
          <img
            src="assets/avatar.png"
            alt="avatar"
            className={`${styles.avatar} ${
              size === 'large' ? styles.large : styles.small
            }`}
          />
          {size === 'large' ? (
            <h4 className={styles.largeTitle}>应有语的主站</h4>
          ) : (
            <h4 className={styles.avatarTitle}>应有语的主站</h4>
          )}
          <div className={styles.hello}>{children}</div>
        </>
      </MediaQuery>
    </div>
  );
};

export default Avatar;
