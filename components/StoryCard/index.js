import c from 'classnames';
import styles from './index.module.css';
import Link from 'next/link';
import TriangleUpIcon from '@/icons/TriangleUpIcon';
import WWWIcon from '@/icons/WWWIcon';
import CommentIcon from '@/icons/CommentIcon';
import StoryDetails from '@/components/StoryDetails';

export default function StoryCard({
  descendants,
  title,
  url,
  by,
  time,
  score,
  className,
  id,
  ...props
}) {
  return (
    <div
      className={c(
        'p-8 flex flex-row items-center bg-white rounded shadow overflow-hidden',
        className
      )}
      {...props}
    >
      <div className="flex flex-col items-center">
        <TriangleUpIcon />
        <span className="text-gray-600 mt-3 text-xs">{score}</span>
      </div>
      <div className={styles.cardBody}>
        <div className="text-gray-800 w-max-content text-sm mb-4 cursor-pointer">
          <Link href={`/item/${id}`}>{title}</Link>
        </div>
        <StoryDetails by={by} time={time} url={url} descendants={descendants} />
      </div>
    </div>
  );
}
