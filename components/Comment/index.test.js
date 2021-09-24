import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Comment from './index';
import timeAgo from '@/libs/timeAgo';

const comment = {
  by: '58x14',
  id: 28638000,
  kids: [28640879, 28638581],
  parent: 28637276,
  text: 'This is such an incredible amount of vulnerable mission-critical data.<p>- all contacts, including 3rd party messaging apps, with metadata (interactions, timestamps, other stats)\n- full address book\n- whether any app is installed\n- SSID of connected wifi<p>and formerly,<p>- medical info\n- device usage\n- screen time\n- device accessories<p>I don&#x27;t keep anything mission critical on mobile, but this is still a gargantuan set of exploits, and each appear extremely straightforward to validate and pay out the security researcher (and maybe even patch). It&#x27;s utterly tragic how Apple (and others) have devolved to become the same monolithic, careless organizations they once displaced.<p>I really, really hope something changes. Soon.',
  time: 1632450603,
  type: 'comment',
};

describe('Comment', () => {
  test('sender name should be in the document', () => {
    render(<Comment item={comment} />);

    expect(screen.getByText(comment.by)).toBeInTheDocument();
  });

  test('time should be converted and be in the document', () => {
    render(<Comment item={comment} />);

    const time = timeAgo(comment.time * 1000);
    expect(screen.getByText(time)).toBeInTheDocument();
  });

  test('replies button should exists', () => {
    render(<Comment item={comment} />);

    const replyButton = screen.getByText(/replies/i);
    expect(replyButton).toBeInTheDocument();
  });

  test('replies button should not exists for comment which has no kids', () => {
    render(<Comment item={{ ...comment, kids: [] }} />);

    const replyButton = screen.queryByText(/replies/i);
    expect(replyButton).toBeNull();
  });
});
