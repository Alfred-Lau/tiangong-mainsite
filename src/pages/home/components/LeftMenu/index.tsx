import styles from './index.less';
import { Anchor } from 'antd';
import {
  FundProjectionScreenOutlined,
  HomeOutlined,
  CrownOutlined,
} from '@ant-design/icons';
import Avatar from '@/components/Avatar';

const { Link } = Anchor;

function LeftMenu() {
  return (
    <div className={styles.leftMenu}>
      <Avatar size="small"></Avatar>
      <Anchor className={styles.category}>
        <div className={styles.categoryItem}>
          <HomeOutlined />
          <Link href="#home" title="首页" />
        </div>
        <div className={styles.categoryItem}>
          <CrownOutlined />
          <Link href="#about" title="关于" />
        </div>
        <div className={styles.categoryItem}>
          <FundProjectionScreenOutlined />
          <Link href="#porjects" title="项目" />
        </div>
        <div className={styles.categoryItem}>
          <FundProjectionScreenOutlined />
          <Link href="#tools" title="工具" />
        </div>
        <div className={styles.categoryItem}>
          <FundProjectionScreenOutlined />
          <Link href="#experience" title="经历" />
        </div>
        <div className={styles.categoryItem}>
          <FundProjectionScreenOutlined />
          <Link href="#rethink" title="自悟" />
        </div>
      </Anchor>
      <div className={styles.footer}>
        <div className={styles.share}></div>
        <div className={styles.copytight}>
          ©2020 - 现在 千帐 | Alfred-Lau All rights reserved
        </div>
      </div>
    </div>
  );
}

export default LeftMenu;
