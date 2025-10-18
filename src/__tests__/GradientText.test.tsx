import React from 'react';
import { render, screen } from '@testing-library/react';
import { GradientText } from '../components/GradientText';

describe('GradientText', () => {
  it('renders text correctly', () => {
    render(<GradientText text="Gradient Test" />);
    expect(screen.getByText('Gradient Test')).toBeInTheDocument();
  });

  it('renders without crashing', () => {
    const { container } = render(<GradientText text="Test" />);
    expect(container).toBeInTheDocument();
  });

  it('applies custom style', () => {
    const customStyle = { fontSize: '32px' };
    const { container } = render(<GradientText text="Test" style={customStyle} />);
    const element = container.querySelector('div');
    expect(element).toHaveStyle({ fontSize: '32px' });
  });

  it('applies custom className', () => {
    const { container } = render(<GradientText text="Test" className="gradient-custom" />);
    const element = container.querySelector('div.gradient-custom');
    expect(element).toBeInTheDocument();
  });
});
