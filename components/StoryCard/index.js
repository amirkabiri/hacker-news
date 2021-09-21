import c from 'classnames';
import styles from './index.module.css';

export default function StoryCard({
  descendants,
  title,
  url,
  by,
  time,
  score,
  className,
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
        <svg
          width="11"
          height="6"
          viewBox="0 0 11 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.44142 5.875H9.8086C10.5609 5.875 10.9371 4.96446 10.4063 4.4336L6.22267 0.250003C5.8922 -0.0804657 5.35782 -0.0804657 5.03087 0.250003L0.847276 4.4336C0.312901 4.96446 0.689072 5.875 1.44142 5.875Z"
            fill="#D1D5DB"
          />
        </svg>
        <span className="text-gray-600 mt-3 text-xs">{score}</span>
      </div>
      <div className={styles.cardBody}>
        <p className="text-gray-800 text-sm mb-4">{title}</p>
        <div className="flex items-center text-xs text-gray-600">
          <div className="mr-5">
            <span className="mr-1">by</span>
            <span className="text-red-600">{by}</span>
          </div>
          <div className="mr-5">{time}</div>
          <div className="mr-5 flex items-center">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 7C13 10.3137 10.3137 13 7 13M13 7C13 3.68629 10.3137 1 7 1M13 7H1M7 13C3.68629 13 1 10.3137 1 7M7 13C8.10457 13 9 10.3137 9 7C9 3.68629 8.10457 1 7 1M7 13C5.89543 13 5 10.3137 5 7C5 3.68629 5.89543 1 7 1M1 7C1 3.68629 3.68629 1 7 1"
                stroke="#4B5563"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="ml-2">{url}</span>
          </div>
          <div className="mr-5 flex items-center">
            <svg
              width="14"
              height="12"
              viewBox="0 0 14 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.66667 3.33335H10.3333M3.66667 6.00002H6.33333M7 11.3334L4.33333 8.66669H2.33333C1.59695 8.66669 1 8.06973 1 7.33335V2.00002C1 1.26364 1.59695 0.666687 2.33333 0.666687H11.6667C12.403 0.666687 13 1.26364 13 2.00002V7.33335C13 8.06973 12.403 8.66669 11.6667 8.66669H9.66667L7 11.3334Z"
                stroke="#4B5563"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="ml-2">{descendants}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
