import React from 'react';
import styled from 'styled-components';

export interface IButtonBaseProps extends React.ComponentProps<'button'> {
  endIcon?: React.ReactElement;
  startIcon?: React.ReactElement;
  sizeIcon?: number;
  arrowPosition?: 'top' | 'left' | 'right' | 'bottom';
}

export const DefaultBtnStyles = styled.button<IButtonBaseProps>`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  cursor: pointer;
  width: 100%;
`;

export const ArrowLongIcon = styled.div`
  position: absolute;
  z-index: 1;
`
export const ArrowShortIcon = styled.div`
  
`
export const Text = styled.span`

`