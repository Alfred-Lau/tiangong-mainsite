import { FC } from 'react';
import { Row, Col } from 'antd';
import MediaQuery from 'react-responsive';
import styles from './index.less';
import H5Responsive from '@/pages/responsive/h5';
import { MIN_WIDTH } from '@/constants/varibles';
import Banner from './components/banner';
import Header from './components/header';

function Introduction() {
  return (
    <div className={styles.introduction}>
      <div className={styles.container}>
        <Row gutter={1}>
          <Col span={12}>
            <div>
              <h3>What is it about?</h3>
              <p>
                Building a website for a startup that looks amazing is not a
                rocket science anymore.
              </p>
            </div>
          </Col>
          <Col span={12}>
            <div>
              <h3>Who is it for?</h3>
              <p>
                Startups, small companies and teams, entrepreneurs and web
                developers.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

function Brands() {
  return (
    <div className={styles.brands}>
      <ul>
        {[
          'https://lazy-minus-your-intelligence.oss-cn-qingdao.aliyuncs.com/Bitmap%202.png',
          'https://lazy-minus-your-intelligence.oss-cn-qingdao.aliyuncs.com/Bitmap%203.png',
          'https://lazy-minus-your-intelligence.oss-cn-qingdao.aliyuncs.com/Bitmap%204.png',
          'https://lazy-minus-your-intelligence.oss-cn-qingdao.aliyuncs.com/Bitmap%205.png',
          'https://lazy-minus-your-intelligence.oss-cn-qingdao.aliyuncs.com/Bitmap%206.png',
          'https://lazy-minus-your-intelligence.oss-cn-qingdao.aliyuncs.com/Bitmap.png',
        ].map((brand) => {
          return (
            <li>
              <img src={brand} alt="" />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const Responsive: FC = (props) => {
  return (
    <>
      <MediaQuery minWidth={MIN_WIDTH}>
        <div className={styles.responsive}>
          <Header />
          <Banner />
        </div>
        <Introduction />
        <Brands />
      </MediaQuery>
      <MediaQuery maxWidth={MIN_WIDTH - 1}>
        <H5Responsive />
      </MediaQuery>
    </>
  );
};

export default Responsive;
