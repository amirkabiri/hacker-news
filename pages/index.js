import Logo from '../components/Logo';
import Menu from '@/components/Menu';

export default function Home() {
  return (
    <div className="py-8 container mx-auto flex justify-between">
      <div className="pl-8">
        <Logo />

        <Menu />
      </div>
      <div className="w-3/4">
        <h1 className="text-3xl font-bold">Top stories</h1>
      </div>
    </div>
  );
}
