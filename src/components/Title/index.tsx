import React from 'react';
import { Container } from './styled';

export interface ITitleProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  color?: string;
  children: React.ReactNode;
  className?: string;
}

const Title = ({ children, variant, color, className}: ITitleProps) => {

  return (
    <Container as={variant} variant={variant} className={className} color={color}>
      {children}
    </Container>
  );
};
export default Title;