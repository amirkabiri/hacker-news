import StoryDetails from './index.js';
import { fireEvent, render, screen } from '@testing-library/react';
import timeAgo from '@/libs/timeAgo';
import getHostNameOfURL from '@/libs/getHostNameOfURL';
import { Router } from 'next/router';

const story = {
  by: 'AKDEV',
  time: timeAgo(1632489455497),
  url: getHostNameOfURL('https://hacker.akdev.ir/item/28613099'),
  descendants: 171,
  id: 28613099,
};

describe('StoryDetails', () => {
  for (const prop in story) {
    if (prop === 'id') continue;

    test(`${prop} prop exists`, () => {
      render(<StoryDetails {...story} />);

      expect(screen.getByText(story[prop])).toBeInTheDocument();
    });
  }
});
