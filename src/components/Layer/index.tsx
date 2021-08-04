import classnames from 'classnames';
import styles from './index.less';

export interface LayerProps {
  title: string;
  subtitle: string;
}

function Layer(props: LayerProps) {
  const { children, title, subtitle } = props;
  return (
    <div className={styles.layer}>
      <div className={styles.title}>
        <span className={styles.main}>{title}</span>
        <span className={styles.sub}>{subtitle}</span>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}

export default Layer;
