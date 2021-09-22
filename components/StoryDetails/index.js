import WWWIcon from '@/icons/WWWIcon';
import CommentIcon from '@/icons/CommentIcon';
import c from 'classnames';

export default function StoryDetails({
  by,
  time,
  url,
  descendants,
  className,
  ...props
}) {
  return (
    <div
      className={c('flex items-center text-xs text-gray-600', className)}
      {...props}
    >
      <div className="mr-5">
        <span className="mr-1">by</span>
        <span className="text-red-600">{by}</span>
      </div>
      <div className="mr-5">{time}</div>
      <div className="mr-5 flex items-center">
        <WWWIcon />
        <span className="ml-2">{url}</span>
      </div>
      <div className="mr-5 flex items-center">
        <CommentIcon />
        <span className="ml-2">{descendants}</span>
      </div>
    </div>
  );
}
