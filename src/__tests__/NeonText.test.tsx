import React from 'react';
import { render } from '@testing-library/react';
import { NeonText } from '../components/NeonText';

describe('NeonText', () => {
  it('renders without crashing', () => {
    const { container } = render(<NeonText text="Hello World" />);
    const element = container.querySelector('h1');
    expect(element).toBeInTheDocument();
  });

  it('renders each character in a span', () => {
    const { container } = render(<NeonText text="Test" />);
    const element = container.querySelector('h1');
    const spans = element?.querySelectorAll('span');
    expect(spans).toHaveLength(8); // 4 chars * 2 nested spans
  });

  it('applies custom style', () => {
    const customStyle = { fontSize: '24px', color: 'red' };
    const { container } = render(<NeonText text="Test" style={customStyle} />);
    const element = container.querySelector('h1');
    expect(element).toHaveStyle({ fontSize: '24px' });
  });

  it('applies custom className', () => {
    const { container } = render(<NeonText text="Test" className="custom-class" />);
    const element = container.querySelector('h1');
    expect(element).toHaveClass('custom-class');
  });
});
