import c from 'classnames';
import styles from './index.module.css';
import Logo from '@/components/Logo';
import FireIcon from '@/icons/FireIcon';
import NewspaperIcon from '@/icons/NewspaperIcon';
import ChatIcon from '@/icons/ChatIcon';
import SparklesIcon from '@/icons/SparklesIcon';
import BriefcaseIcon from '@/icons/BriefcaseIcon';
import MenuItem from '@/components/MenuItem';

const menuItems = [
  { text: 'Top', icon: FireIcon },
  { text: 'New', icon: NewspaperIcon },
  { text: 'Ask', icon: ChatIcon },
  { text: 'Show', icon: SparklesIcon },
  { text: 'Job', icon: BriefcaseIcon },
];

export default function Layout({ children, title }) {
  return (
    <div className="py-0 md:py-8 px-4 md:px-24 container mx-auto flex flex-col md:flex-row justify-between">
      <div>
        <div className={c(styles.sidebar, 'py-8')}>
          <Logo />

          <div
            className={c(
              styles.menu,
              'flex flex-wrap justify-between flex-row md:flex-col'
            )}
          >
            {menuItems.map((menuItem, index) => (
              <MenuItem
                {...menuItem}
                className="my-8"
                key={index}
                active={menuItem.text === 'Top'}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="md:w-3/4 w-full">
        {title && <h1 className="text-3xl mb-12 font-bold">{title}</h1>}
        {children}
      </div>
    </div>
  );
}
