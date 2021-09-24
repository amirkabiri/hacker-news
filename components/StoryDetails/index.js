import WWWIcon from '@/icons/WWWIcon';
import CommentIcon from '@/icons/CommentIcon';
import c from 'classnames';
import Link from 'next/link';
import PropTypes from 'prop-types';

export default function StoryDetails({
  by,
  time,
  url,
  descendants,
  className,
  id,
  ...props
}) {
  return (
    <div
      className={c(
        'flex flex-wrap items-center text-xs text-gray-600',
        className
      )}
      {...props}
    >
      <div className="mr-5 mt-1">
        <span className="mr-1">by</span>
        <span className="text-red-600">{by}</span>
      </div>
      <div className="mr-5 mt-1">{time}</div>
      <div className="mr-5 mt-1 flex items-center">
        <WWWIcon />
        <span className="ml-2">{url}</span>
      </div>

      {id !== undefined && (
        <Link href={`/item/${id}`}>
          <div className="mr-5 mt-1 flex items-center cursor-pointer">
            <CommentIcon />
            <span className="ml-2">{descendants}</span>
          </div>
        </Link>
      )}
      {id === undefined && (
        <div className="mr-5 mt-1 flex items-center">
          <CommentIcon />
          <span className="ml-2">{descendants}</span>
        </div>
      )}
    </div>
  );
}

StoryDetails.propTypes = {
  by: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  descendants: PropTypes.number.isRequired,
  className: PropTypes.string,
  id: PropTypes.number,
};
