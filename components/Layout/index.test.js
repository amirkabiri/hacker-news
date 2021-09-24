import Layout, { menuItems } from './index';
import { render, screen } from '@testing-library/react';

describe('Layout', () => {
  test('children are being rendered into layout', () => {
    const text = 'I am a test';
    render(<Layout>{text}</Layout>);

    expect(screen.getByText(text)).toBeInTheDocument();
  });

  test('title is being rendered into layout', () => {
    const title = 'I am the title';
    render(<Layout title={title} />);

    expect(screen.getByText(title)).toBeInTheDocument();
  });

  test('all menu items are being rendered in the layout', () => {
    render(<Layout />);

    for (const item of menuItems) {
      expect(screen.getByText(item.text)).toBeInTheDocument();
    }
  });
});
