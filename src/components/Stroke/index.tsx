import * as React from 'react';
import Fade from 'react-reveal/Fade';
import { ICONS_MAP } from '../../constants/icons';
import { Container } from './styled';

export interface IStroke {
  className?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  delay?: string;
  zIndex?: string;
  rotate?: number;
}

const Stroke = ({
  className,
  top,
  left,
  right,
  bottom,
  delay,
  zIndex,
  rotate
}: IStroke) => {
  const [isAnimateStart, setAnimateStart] = React.useState(false)

  return (
    <Container 
      className={className} 
      isAnimationStart={isAnimateStart}
      top={top || 'auto'}
      left={left || 'auto'}
      right={right || 'auto'}
      bottom={bottom || 'auto'}
      delay={delay || '0.5s'}
      zIndex={zIndex || '-1'}
      rotate={rotate || 0}
    >
      <Fade onReveal={() => setAnimateStart(true)} />
      <ICONS_MAP.Decor />
    </Container>
  );
};
export default Stroke;