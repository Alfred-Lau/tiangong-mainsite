import React from 'react';
import { Tooltip } from 'antd';
import styles from './index.less';

function TooltipContent() {
  return (
    <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur at
      cupiditate doloremque explicabo fugit in, inventore iure laudantium
      maiores numquam pariatur possimus quia quibusdam quis recusandae sint
      suscipit veniam voluptatem.
    </div>
  );
}

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img
          src="https://lazy-minus-your-intelligence.oss-cn-qingdao.aliyuncs.com/logo.png"
          alt=""
        />
      </div>
      <div className={styles.navs}>
        <ul>
          <li>Home</li>
          <li>Stories</li>

          <li>
            <Tooltip title={TooltipContent} color={'#000'} key={'color'}>
              Library
            </Tooltip>
          </li>
          <li>Get Started</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
