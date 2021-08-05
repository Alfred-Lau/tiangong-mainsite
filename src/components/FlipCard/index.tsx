import styles from './index.less';

export interface FlipCardProps {
  title: string;
  desc: string;
  link: string;
  tags: string[];
  cover: string;
  long?: string;
}

const FlipCard: React.FC<FlipCardProps> = (props: FlipCardProps) => {
  const { title, desc, link, tags = [], cover, long } = props;
  return (
    <div className={styles.flip_card_container}>
      <div className={styles.center}>
        <div className={styles.cover}>
          <img src={cover} alt="cover" className={styles.coverImg} />
        </div>

        <div className={styles.mask}>
          <span className={styles.title}>{title}</span>
          <div className={styles.tags}>
            {tags.map((tag) => {
              return <span className={styles.tag}>{tag}</span>;
            })}
          </div>
          <p className={styles.desc}>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
