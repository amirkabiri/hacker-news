import ContentLoader from 'react-content-loader';
import React from 'react';

export default function CommentLoading() {
  return (
    <ContentLoader viewBox="0 0 360 50" className="mb-10">
      <rect x="0" y="3" rx="3" ry="3" width="50" height="6" />
      <rect x="60" y="3" rx="3" ry="3" width="50" height="6" />
      <rect x="0" y="20" rx="3" ry="3" width="410" height="6" />
      <rect x="0" y="37" rx="3" ry="3" width="410" height="6" />
    </ContentLoader>
  );
}
