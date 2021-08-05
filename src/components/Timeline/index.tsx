import classnames from 'classnames';
import styles from './index.less';

export interface TimelineProps {
  timelines: object[];
}

function Timeline(props: TimelineProps) {
  const { timelines } = props;

  return <div className={styles.timeline}>timeline</div>;
}

export default Timeline;
