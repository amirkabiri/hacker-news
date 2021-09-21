import { useRouter } from 'next/router';
import Layout from '@/components/Layout';

export default function Item() {
  const router = useRouter();
  const { id: ID } = router.query;

  return <Layout></Layout>;
}
