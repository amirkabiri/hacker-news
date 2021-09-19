import React from 'react';
import c from 'classnames';

export default function MenuItem({ icon, text, active, className, ...props }) {
  const Icon = icon;

  return (
    <div
      className={c('flex items-center cursor-pointer', className)}
      {...props}
    >
      <Icon
        className={c({
          'text-red-600': active,
          'text-gray-500': !active,
        })}
      />

      <h2
        className={c('ml-4', {
          'font-bold': active,
          'text-gray-800': active,
          'text-gray-500': !active,
        })}
      >
        {text}
      </h2>
    </div>
  );
}
