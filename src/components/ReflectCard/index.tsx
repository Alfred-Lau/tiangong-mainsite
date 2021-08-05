import styles from './index.less';

export interface ReflectCardProps {
  title: string;
  desc: string;
  link: string;
  tags: string[];
  cover: string;
}

const ReflectCard: React.FC<ReflectCardProps> = (props: ReflectCardProps) => {
  const { title, desc, link, tags = [], cover } = props;
  return (
    <div className={styles.flip_card_container}>
      <div className={styles.center}>
        <div className={styles.cover}>
          <img src={cover} alt="cover" className={styles.coverImg} />
        </div>
        <div className={styles.content}>
          <h4 className={styles.title}>{title}</h4>
          <p className={styles.desc}>{desc}</p>
          <div className={styles.tags}>
            {tags.map((tag) => {
              return <span className={styles.tag}>{tag}</span>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReflectCard;
