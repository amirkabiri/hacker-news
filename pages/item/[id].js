import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import getItemByID from '@/network/getItemByID';
import StoryDetails from '@/components/StoryDetails';
import timeAgo from '@/libs/timeAgo';
import React, { useEffect, useState } from 'react';
import Comment from '@/components/Comment';
import CommentLoading from '@/components/CommentLoading';

const LOAD_ITEMS_PER_SCROLL = 10;

export default function Item({ item, loadedKids, unloadedKids }) {
  const router = useRouter();
  const { id: ID } = router.query;
  const [items, setItems] = useState(loadedKids);
  const [unloadedItems, setUnloadedItems] = useState(unloadedKids);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const onScroll = function () {
      const isScrollAtTheBottom =
        window.innerHeight + window.scrollY + 100 >= document.body.offsetHeight;
      if (loading || !isScrollAtTheBottom) return;

      setLoading(true);

      let loadingKids = unloadedItems
        .slice(0, LOAD_ITEMS_PER_SCROLL)
        .map(async (ID) => {
          try {
            return (await getItemByID(ID)).data;
          } catch (e) {
            return null;
          }
        });

      setUnloadedItems((s) => s.slice(LOAD_ITEMS_PER_SCROLL));

      Promise.all(loadingKids).then((kids) => {
        setLoading(false);

        setItems((s) => s.concat(kids.filter((kid) => kid !== null)));
      });
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [loading, unloadedItems]);

  return (
    <Layout>
      <a href={item.url} className="text-gray-800 text-xl font-medium mb-3">
        {item.title}
      </a>
      <StoryDetails
        by={item.by}
        time={timeAgo(item.time * 1000)}
        url={item.url}
        descendants={item.descendants}
        className="mb-16"
      />

      {items.map((item, index) => (
        <Comment className="mb-10" key={item.id} item={item} />
      ))}

      {loading &&
        Array.from(
          { length: Math.min(LOAD_ITEMS_PER_SCROLL, unloadedItems.length) },
          (_, i) => <CommentLoading key={i} />
        )}
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { id: ID } = context.query;
  let item = null;
  let kids = [];

  try {
    const result = await getItemByID(ID);
    item = result.data;

    kids = item.kids;
  } catch (e) {}

  let loadedKids = kids.slice(0, 10).map(async (ID) => {
    try {
      return (await getItemByID(ID)).data;
    } catch (e) {
      return null;
    }
  });

  loadedKids = await Promise.all(loadedKids);

  loadedKids = loadedKids.filter((kid) => kid !== null);

  return {
    props: {
      item,
      loadedKids: loadedKids,
      unloadedKids: kids.slice(10),
    },
  };
}
