import { FC } from 'react';
import styles from './index.less';

export interface LayoutProps {
  mx: string | number;
}

export interface LayerProps extends Partial<LayoutProps> {
  title: string;
  subtitle: string;
}

const Layer: FC<LayerProps> = (props) => {
  const { children, title, subtitle, mx } = props;
  return (
    <div className={styles.layer}>
      <p className={styles.subtitle}>{subtitle}</p>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Layer;
