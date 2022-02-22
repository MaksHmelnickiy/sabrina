import React from 'react';
import Fade from 'react-reveal/Fade';
import type { TButtonTypes } from './types';
import { ICONS_MAP } from '../../constants/icons';
import { PrimaryBtn } from './styles/primary';
import { Secondary } from './styles/secondary';
import { TertiaryBtn } from './styles/tertiary';
import { IconBtn } from './styles/icon';
import { ArrowLongIcon, ArrowShortIcon, Text, ArrowDarkIcon } from './styled';

interface IButtonProps extends React.ComponentProps<'button'> {
  loading?: boolean;
  variant?: TButtonTypes;
  className?: string;
  arrowLong?: boolean;
  arrowShort?: boolean;
  arrowDark?: boolean;
  arrowPosition?: 'top' | 'left' | 'right' | 'bottom';
  onClick?: React.MouseEventHandler<HTMLButtonElement>; 
}

const Button = ({
  children,
  variant,
  className,
  type = 'button',
  disabled,
  onClick,
  arrowLong,
  arrowShort,
  arrowDark,
  arrowPosition,
}: IButtonProps) => {
  const [isAnimateStart, setAnimateStart] = React.useState(false)
  const getBtnComponent = React.useCallback(() => {
    switch (variant) {
      case 'primary':
        return PrimaryBtn;
      case 'tertiary':
        return TertiaryBtn;
      case 'icon':
        return IconBtn;
      case 'secondary':
        return Secondary;
      default:
        return PrimaryBtn;
    }
  }, [variant]);

  const BtnComponent = getBtnComponent();

  return (
    <BtnComponent
        type={type}
        disabled={disabled}
        className={className}
        onClick={onClick}
        arrowLong={arrowLong}
        arrowShort={arrowShort}
        arrowDark={arrowDark}
        arrowPosition={arrowPosition}
        isAnimationStart={isAnimateStart}
      >
        <Fade onReveal={() => setAnimateStart(true)} />
        {arrowLong && 
          <ArrowLongIcon>
            <ICONS_MAP.ArrowLong />
          </ArrowLongIcon>
        }
        {arrowShort && 
          <ArrowShortIcon>
            <ICONS_MAP.ArrowShort />
          </ArrowShortIcon>
        }
        {arrowDark && 
          <ArrowDarkIcon>
              <ICONS_MAP.ArrowDark />
          </ArrowDarkIcon>
        }
          <Text>
            {variant === 'primary' || !variant ? <ICONS_MAP.CircleIcon /> : ''}
            {variant === 'tertiary' && <ICONS_MAP.CircleIcon />}
            {variant === 'secondary' ? <ICONS_MAP.Drawing /> : ''}
            {children && <i>{children}</i>}
          </Text>
    </BtnComponent>
  );
};

export default Button;
