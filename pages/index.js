import Logo from '@/components/Logo';
import Menu from '@/components/Menu';
import StoryCard from '@/components/StoryCard';
import getTopStories from '@/api/getTopStories';
import getItemByID from '@/api/getItemByID';
import timeAgo from '@/libs/timeAgo';
import getHostNameOfURL from '@/libs/getHostNameOfURL';
import { useEffect, useState } from 'react';
import retry from '@/libs/retry';

const LOAD_ITEMS_PER_SCROLL = 10;

export default function Top({ storyIDs, preloadedStories }) {
  const [stories, setStories] = useState(preloadedStories);
  const [unloadedStories, setUnloadedStories] = useState(storyIDs);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const onScroll = function () {
      const isScrollAtTheBottom =
        window.innerHeight + window.scrollY + 100 >= document.body.offsetHeight;
      if (loading || !isScrollAtTheBottom) return;

      setLoading(true);

      let loadingStories = unloadedStories
        .slice(0, LOAD_ITEMS_PER_SCROLL)
        .map(async (ID) => {
          try {
            return (await getItemByID(ID)).data;
          } catch (e) {
            return null;
          }
        });

      setUnloadedStories((s) => s.slice(LOAD_ITEMS_PER_SCROLL));

      Promise.all(loadingStories).then((stories) => {
        setLoading(false);

        setStories((s) => s.concat(stories.filter((story) => story !== null)));
      });
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [loading, unloadedStories]);

  return (
    <div className="py-8 container mx-auto flex justify-between">
      <div className="pl-8">
        <Logo />

        <Menu />
      </div>
      <div className="w-3/4">
        <h1 className="text-3xl mb-12 font-bold">Top stories</h1>
        {stories.map((story, index) => (
          <StoryCard
            className="mb-4"
            key={story.id}
            title={story.title}
            score={story.score}
            by={story.by}
            time={timeAgo(story.time * 1000)}
            url={getHostNameOfURL(story.url)}
            descendants={story.descendants}
          />
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  // load top story ID's
  let stories = [];
  try {
    stories = (await getTopStories()).data;
  } catch (e) {
    console.log(e);
  }

  // load details of 10 top stories of the ID list
  let top10Stories = stories.slice(0, LOAD_ITEMS_PER_SCROLL).map(async (ID) => {
    try {
      const result = await retry(getItemByID, [ID])();
      return result.data;
    } catch (e) {
      return null;
    }
  });

  // waiting for stories to be loaded
  top10Stories = await Promise.all(top10Stories);

  // remove that stories that had been faced to error during loading details
  top10Stories = top10Stories.filter((story) => story !== null);

  // rest of the stories
  const restStories = stories.slice(LOAD_ITEMS_PER_SCROLL);

  return {
    props: {
      storyIDs: restStories,
      preloadedStories: top10Stories,
    },
  };
}
