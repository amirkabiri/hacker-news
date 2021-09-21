import Logo from '@/components/Logo';
import Menu from '@/components/Menu';
import styles from './index.module.css';
import c from 'classnames';

export default function Sidebar() {
  return (
    <div className={c(styles.container, 'py-8')}>
      <Logo />

      <Menu />
    </div>
  );
}
