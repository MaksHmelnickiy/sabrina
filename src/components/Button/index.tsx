import React from 'react';
import type { TButtonTypes } from './types';
import { ICONS_MAP } from '../../constants/icons';
import { PrimaryBtn } from './styles/primary';
import { Secondary } from './styles/secondary';
import { DangerBtn } from './styles/danger';
import { TertiaryBtn } from './styles/tertiary';
import { TransparentBtn } from './styles/transparent';
import { IconBtn } from './styles/icon';
import { IconSolid } from './styles/iconSolid';
import { ArrowLongIcon, ArrowShortIcon, Text, ArrowDarkIcon } from './styled';

interface IButtonProps extends React.ComponentProps<'button'> {
  loading?: boolean;
  variant?: TButtonTypes;
  className?: string;
  arrowLong?: boolean;
  arrowShort?: boolean;
  arrowDark?: boolean;
  arrowPosition?: 'top' | 'left' | 'right' | 'bottom';
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

  const getBtnComponent = React.useCallback(() => {
    switch (variant) {
      case 'primary':
        return PrimaryBtn;
      case 'danger':
        return DangerBtn;
      case 'tertiary':
        return TertiaryBtn;
      case 'transparent':
        return TransparentBtn;
      case 'icon':
        return IconBtn;
      case 'iconSolid':
        return IconSolid;
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
      >
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
