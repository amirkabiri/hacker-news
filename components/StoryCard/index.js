import c from 'classnames';
import styles from './index.module.css';
import TriangleUpIcon from '@/icons/TriangleUpIcon';
import StoryDetails from '@/components/StoryDetails';
import getHostNameOfURL from '@/libs/getHostNameOfURL';
import PropTypes from 'prop-types';

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
        'p-8 flex flex-row items-center bg-white rounded shadow',
        className
      )}
      {...props}
    >
      <div className="flex flex-col items-center">
        <TriangleUpIcon />
        <span className="text-gray-600 mt-3 text-xs">{score}</span>
      </div>
      <div className={styles.cardBody}>
        <a href={url} className="text-gray-800 text-sm mb-3 cursor-pointer">
          {title}
        </a>
        <StoryDetails
          id={id}
          by={by}
          time={time}
          url={getHostNameOfURL(url)}
          descendants={descendants}
        />
      </div>
    </div>
  );
}

StoryCard.propTypes = {
  descendants: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  by: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  className: PropTypes.string,
  id: PropTypes.number,
};
