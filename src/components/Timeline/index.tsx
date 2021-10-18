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

function TimeLineItem(props: TimelineItem) {
  const { title, duration, content, tag } = props;
  return (
    <div className={styles.timelineWrapper}>
      <div className={styles.timeline}>
        <div className={styles.titleWrapper}>
          <div className={styles.title}>{title}</div>
          <div className={styles.duration}>{duration}</div>
        </div>
        <div className={styles.content}>{content}</div>
      </div>
    </div>
  );
}

function Timeline(props: Timeline) {
  const { timelines = [] } = props;

  return (
    <div className={styles.timelineContainer}>
      {timelines.map((item) => {
        return <TimeLineItem {...item} key={item.id} />;
      })}
    </div>
  );
}

export { TimeLineItem };
export default Timeline;
