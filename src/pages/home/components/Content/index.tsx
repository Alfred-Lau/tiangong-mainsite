import styles from './index.less';
import Layer from '@/components/layer';

function Content() {
  return (
    <div className={styles.content}>
      <Layer title="Content" subtitle="我是子标题">
        我是子内容
      </Layer>
    </div>
  );
}

export default Content;
