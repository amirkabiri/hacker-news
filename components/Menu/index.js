import c from 'classnames';
import styles from './index.module.css';
import MenuItem from '@/components/MenuItem';
import FireIcon from '@/icons/FireIcon';
import NewspaperIcon from '@/icons/NewspaperIcon';
import ChatIcon from '@/icons/ChatIcon';
import SparklesIcon from '@/icons/SparklesIcon';
import BriefcaseIcon from '@/icons/BriefcaseIcon';

const menuItems = [
  { text: 'Top', icon: FireIcon },
  { text: 'New', icon: NewspaperIcon },
  { text: 'Ask', icon: ChatIcon },
  { text: 'Show', icon: SparklesIcon },
  { text: 'Job', icon: BriefcaseIcon },
];

export default function Menu() {
  return (
    <div className={c('flex flex-col', styles.container)}>
      {menuItems.map((menuItem, index) => (
        <MenuItem
          {...menuItem}
          className="my-8"
          key={index}
          active={menuItem.text === 'Top'}
        />
      ))}
    </div>
  );
}
