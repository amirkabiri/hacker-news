import timeAgo from '@/libs/timeAgo';
import c from 'classnames';
import styles from './index.module.css';
import { useState } from 'react';
import getItemByID from '@/network/getItemByID';
import RepliesIcon from '@/icons/RepliesIcon';
import PropTypes from 'prop-types';

export default function Comment({ item, className, ...props }) {
  const [kids, setKids] = useState([]);
  const [showReplies, setShowReplies] = useState(false);

  const toggleReplies = async () => {
    // if replies had been loaded before, just toggle them
    if (kids.length) {
      return setShowReplies((a) => !a);
    }

    // otherwise load them first
    let loadingKids = item.kids.map(async (ID) => {
      try {
        const result = await getItemByID(ID);
        return result.data;
      } catch (e) {
        return null;
      }
    });

    loadingKids = await Promise.all(loadingKids);

    loadingKids = loadingKids.filter((kid) => kid !== null);

    setKids(loadingKids);
    setShowReplies(true);
  };

  return (
    <div className={c(className)} {...props}>
      <div className="flex text-gray-600 items-center text-xs mb-3">
        <h3 className="font-semibold mr-4">
          {item.deleted !== undefined ? 'Deleted Message' : ''}
          {item.by}
        </h3>
        <time dateTime="2021-02-14 22:32">{timeAgo(item.time * 1000)}</time>
      </div>
      <div
        data-testid="text"
        className={c('text-sm text-gray-800', styles.text)}
        dangerouslySetInnerHTML={{ __html: item.text }}
      />
      {item.kids && item.kids.length && (
        <div
          onClick={toggleReplies}
          className="flex items-center mt-4 cursor-pointer"
        >
          <RepliesIcon />
          <span className="ml-2 text-gray-600 font-medium text-xs">
            replies...
          </span>
        </div>
      )}

      {showReplies && (
        <div className="border-l-2 border-gray-500 pl-6">
          {kids.map((kid, index) => (
            <Comment
              key={kid.id}
              item={kid}
              className={'mt-' + (index === 0 ? 6 : 10)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

Comment.propTypes = {
  item: PropTypes.object.isRequired,
  className: PropTypes.string,
};
