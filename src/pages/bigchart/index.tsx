import { FC } from 'react';
import { Row, Col } from 'antd';
import MediaQuery from 'react-responsive';
import styles from './index.less';
import H5Responsive from '@/pages/responsive/h5';
import { MIN_WIDTH } from '@/constants/varibles';
import Banner from './components/banner';
import Header from './components/header';

function Introductions() {
  return (
    <div>
      <Row gutter={1}>
        <Col>
          <div>
            <h3>title</h3> <p>desc</p>
          </div>{' '}
        </Col>
        <Col>
          <div>
            <h3>title</h3> <p>desc</p>
          </div>{' '}
        </Col>
      </Row>
    </div>
  );
}

const Video: FC = (props) => {
  return (
    <>
      <MediaQuery minWidth={MIN_WIDTH}>
        <div className={styles.responsive}>
          <Header />
          <Banner />
        </div>
        <Introductions />
      </MediaQuery>
      <MediaQuery maxWidth={MIN_WIDTH - 1}>
        <H5Responsive />
      </MediaQuery>
    </>
  );
};

export default Video;
