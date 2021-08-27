import styles from './index.less';
import { Anchor } from 'antd';
import MediaQuery from 'react-responsive';
import { MIN_WIDTH } from '@/constants/varibles';
import {
  FundProjectionScreenOutlined,
  HomeOutlined,
  CrownOutlined,
} from '@ant-design/icons';
import Avatar from '@/components/Avatar';

const { Link } = Anchor;

function LeftMenu() {
  const renderPcComponent = () => {
    return (
      <div className={styles.leftMenu}>
        <Anchor className={styles.category}>
          <Avatar size="small"></Avatar>

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
            <Link href="#projects" title="项目" />
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
          <div className={styles.categoryItem}>
            <FundProjectionScreenOutlined />
            <Link
              href="http://docs.lazy-minus-your-intelligence.com"
              title="天工"
              target="_blank"
            />
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
  };

  return (
    <>
      <MediaQuery minWidth={MIN_WIDTH}>{renderPcComponent()}</MediaQuery>
    </>
  );
}

export default LeftMenu;
