import React from 'react';
import type { TButtonTypes } from './types';
import { ICONS_MAP } from '../../constants/icons';
import { PrimaryBtn } from './styles/primary';
import { Secondary } from './styles/secondary';
import { DangerBtn } from './styles/danger';
import { LightBtn } from './styles/light';
import { TransparentBtn } from './styles/transparent';
import { IconBtn } from './styles/icon';
import { IconSolid } from './styles/iconSolid';
import { ArrowLongIcon, ArrowShortIcon, Text } from './styled';

interface IButtonProps extends React.ComponentProps<'button'> {
  loading?: boolean;
  variant?: TButtonTypes;
  className?: string;
  sizeIcon?: number;
  arrowLong?: boolean;
  arrowShort?: boolean;
  arrowPosition?: 'top' | 'left' | 'right' | 'bottom';
}

const Button = ({
  children,
  variant,
  className,
  type = 'button',
  disabled,
  sizeIcon,
  onClick,
  arrowLong,
  arrowShort,
}: IButtonProps) => {

  const getBtnComponent = React.useCallback(() => {
    switch (variant) {
      case 'primary':
        return PrimaryBtn;
      case 'danger':
        return DangerBtn;
      case 'light':
        return LightBtn;
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
        sizeIcon={sizeIcon}
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
        <Text>
          <ICONS_MAP.CircleIcon />
          {children && <i>{children}</i>}
        </Text>
    </BtnComponent>
  );
};

export default Button;