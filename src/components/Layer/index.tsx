import styles from './index.less';

export interface LayerProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

function Layer(props: LayerProps) {
  const { children, title, subtitle } = props;
  return (
    <div className={styles.layer}>
      <div className={styles.title}>
        <div className={styles.main}>{title}</div>
        <div className={styles.sub}>{subtitle}</div>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}

export default Layer;
