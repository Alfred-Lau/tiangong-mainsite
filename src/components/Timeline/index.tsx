import styles from './index.less';

export interface TimelineItem {
  id: number;
  title: string;
  duration: string;
  content: string;
  tag: string;
}

export interface Timeline {
  timelines: TimelineItem[];
}

function Timeline(props: Timeline) {
  const { timelines = [] } = props;

  return (
    <div className={styles.timelineContainer}>
      {timelines.map((item) => {
        return (
          <div className={styles.timeline}>
            <div className={styles.titleWrapper}>
              <div className={styles.title}>{item.title}</div>
              <div className={styles.duration}>{item.duration}</div>
            </div>
            <div className={styles.content}>{item.content}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Timeline;
