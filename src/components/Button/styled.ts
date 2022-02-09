import React from 'react';
import styled from 'styled-components';

export interface IButtonBaseProps extends React.ComponentProps<'button'> {
  endIcon?: React.ReactElement;
  startIcon?: React.ReactElement;
  arrowPosition?: 'top' | 'left' | 'right' | 'bottom';
  arrowLong?: boolean;
  arrowShort?: boolean;
  arrowDark?: boolean;
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
  & * {
    pointer-events: none;
  }
`;

export const ArrowLongIcon = styled.div`
  position: absolute;
  z-index: 1;
`
export const ArrowShortIcon = styled.div`
  
`
export const Text = styled.span`

`
export const ArrowDarkIcon = styled.div`
  z-index: 1;
`