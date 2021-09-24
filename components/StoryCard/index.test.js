import { render, screen } from '@testing-library/react';
import StoryCard from './index';
import timeAgo from '@/libs/timeAgo';

const story = {
  by: 'jayhoon',
  descendants: 268,
  id: 28637276,
  kids: [
    28638000, 28638075, 28638111, 28640634, 28641079, 28640612, 28637956,
    28639676, 28637937, 28638586, 28640281, 28638505, 28639784, 28638957,
    28638261, 28638842, 28639881, 28638975, 28639273, 28638349, 28638864,
    28639287, 28639605, 28639849, 28640036,
  ],
  score: 1273,
  time: timeAgo(1632443311 * 1000),
  title: 'Disclosure of three 0-day iOS vulnerabilities',
  type: 'story',
  url: 'https://habr.com/en/post/579714/',
};

describe('StoryCard', () => {
  beforeEach(() => {
    render(<StoryCard {...story} />);
  });

  test('title exists', () => {
    expect(screen.getByText(story.title)).toBeInTheDocument();
  });

  test('score exists', () => {
    expect(screen.getByText(story.score)).toBeInTheDocument();
  });
});
