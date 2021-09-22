import ContentLoader from 'react-content-loader';

export default function StoryCardLoading() {
  return (
    <ContentLoader viewBox="0 0 360 50" className="mt-4">
      <polygon
        points="30,5 25,10 35,10"
        strokeLinejoin="round"
        fill="none"
        strokeWidth="20"
      />
      <rect x="22" y="24" rx="3" ry="3" width="15" height="6" />
      <rect x="62" y="3" rx="3" ry="3" width="410" height="6" />
      <rect x="62" y="24" rx="3" ry="3" width="50" height="6" />
      <rect x="122" y="24" rx="3" ry="3" width="50" height="6" />
      <rect x="182" y="24" rx="3" ry="3" width="50" height="6" />
      <rect x="242" y="24" rx="3" ry="3" width="50" height="6" />
    </ContentLoader>
  );
}
