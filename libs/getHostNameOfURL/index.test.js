import getHostNameOfURL from './index';

describe('getHostNameOfURL', () => {
  it('should return akdev.ir', () => {
    const url = 'https://akdev.ir/dfasdfsadfasdf';
    expect(getHostNameOfURL(url)).toEqual('akdev.ir');
  });

  it('should return www.akdev.ir', () => {
    const url = 'https://www.akdev.ir/dfasdfsadfasdf';
    expect(getHostNameOfURL(url)).toEqual('www.akdev.ir');
  });
});
