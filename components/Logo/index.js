import React from 'react';
import Link from 'next/link';
import styles from './index.module.css';
import c from 'classnames';

export default function Logo({ className, ...props }) {
  return (
    <Link href="/">
      <div
        className={c('cursor-pointer flex items-center', className)}
        {...props}
      >
        <span
          className={c(
            styles.icon,
            'text-2xl flex justify-center items-center text-white mr-4'
          )}
        >
          Y
        </span>
        <h1 className={c(styles.h1, 'text-base')}>Hacker News</h1>
      </div>
    </Link>
  );
}
