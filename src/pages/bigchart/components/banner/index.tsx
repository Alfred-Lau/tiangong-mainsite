import React, { FC } from 'react';
import styles from './index.less';

const Banner: FC = (props) => {
  return (
    <div className={styles.banner}>
      <div className={styles.left}>
        <h3>Build stunning websites & apps.</h3>
        <p>
          Create live segments and target the right people for messages based on
          their behaviors.
        </p>
        <div className={styles.btnGroup}>
          <div className={styles.btn}>快速开始</div>
          <div className={styles.btn}>了解更多</div>
        </div>
      </div>
      <div className={styles.right}>
        <img
          src="https://lazy-minus-your-intelligence.oss-cn-qingdao.aliyuncs.com/ouch.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
