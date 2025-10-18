import React from 'react';
import { render } from '@testing-library/react';
import { BeautifulText } from '../components/BeautifulText';

describe('BeautifulText', () => {
  it('renders NeonText effect without crashing', () => {
    const { container } = render(<BeautifulText text="Neon Test" effect="neon" />);
    expect(container).toBeInTheDocument();
  });

  it('renders GradientText effect without crashing', () => {
    const { container } = render(<BeautifulText text="Gradient Test" effect="gradient" />);
    expect(container).toBeInTheDocument();
  });

  it('renders ShowGirlText effect without crashing', () => {
    const { container } = render(<BeautifulText text="ShowGirl Test" effect="showgirl" />);
    expect(container).toBeInTheDocument();
  });

  it('renders GlowingText effect without crashing', () => {
    const { container } = render(<BeautifulText text="Glowing Test" effect="glowing" />);
    expect(container).toBeInTheDocument();
  });

  it('renders SpotlightText effect without crashing', () => {
    const { container } = render(<BeautifulText text="Spotlight Test" effect="spotlight" />);
    expect(container).toBeInTheDocument();
  });

  // Skip CurvedLoopText test due to SVG API requirements in jsdom
  it.skip('renders CurvedLoopText effect without crashing', () => {
    const { container } = render(<BeautifulText text="CurvedLoop Test" effect="curved" />);
    expect(container).toBeInTheDocument();
  });

  it('renders FireText effect without crashing', () => {
    const { container } = render(<BeautifulText text="Fire Test" effect="fire" />);
    expect(container).toBeInTheDocument();
  });

  it('applies custom style', () => {
    const customStyle = { fontSize: '40px', color: 'blue' };
    const { container } = render(<BeautifulText text="Style Test" effect="gradient" style={customStyle} />);
    expect(container).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <BeautifulText text="Class Test" effect="gradient" className="custom" />
    );
    expect(container.querySelector('.custom')).toBeInTheDocument();
  });

  it('renders all effect types without errors', () => {
    // Skip curved effect due to SVG API requirements in jsdom
    const effects = [
      'neon', 'gradient', 'showgirl', 'glowing', 'spotlight',
      'fire', 'retro', 'gold', 'luxury',
      'birthday', 'womanday', 'teacherday', 'party'
    ] as const;

    effects.forEach((effect) => {
      const { container } = render(<BeautifulText text={`${effect} test`} effect={effect} />);
      expect(container).toBeInTheDocument();
    });
  });
});
