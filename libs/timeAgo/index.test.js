import timeAgo from './index';

describe('timeAgo', () => {
  it('should return 3 seconds ago', () => {
    expect(timeAgo(Date.now() - 3000)).toEqual('3 seconds ago');
  });

  it('should return 8 minutes ago', () => {
    expect(timeAgo(Date.now() - 60 * 1000 * 8)).toEqual('8 minutes ago');
  });

  it('should return 10 hours ago', () => {
    expect(timeAgo(Date.now() - 60 * 60 * 1000 * 10)).toEqual('10 hours ago');
  });

  it('should return 2 months ago', () => {
    expect(timeAgo(Date.now() - 60 * 60 * 1000 * 24 * 31 * 2)).toEqual(
      '2 months ago'
    );
  });

  it('should return 7 years ago', () => {
    expect(timeAgo(Date.now() - 60 * 60 * 1000 * 24 * 31 * 12 * 7)).toEqual(
      '7 years ago'
    );
  });
});
