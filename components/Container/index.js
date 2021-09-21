import c from 'classnames';

export default function Container({ children, className, ...props }) {
  return (
    <div
      className={c(
        'py-8 px-0 md:px-24 container mx-auto flex justify-between',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
