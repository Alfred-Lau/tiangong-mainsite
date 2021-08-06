import styles from './index.less';
import useParams from '@/hooks/useParams';

export default function Rethink(props) {
  const match = useParams(props);

  console.log(match);

  return (
    <div className={styles.rethink}>
      <main className={styles.main}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
        aliquid cum. Distinctio animi dolorum voluptas corrupti velit autem,
        nisi earum repudiandae aliquid dignissimos numquam accusantium tenetur
        doloribus deleniti sapiente? Excepturi!
      </main>
    </div>
  );
}
