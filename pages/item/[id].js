import { useRouter } from 'next/router';

export default function Item() {
  const router = useRouter();
  const { id: ID } = router.query;

  return <div>{ID}</div>;
}
