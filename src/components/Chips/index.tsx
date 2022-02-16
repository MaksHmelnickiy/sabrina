import React from 'react';
import { appReactMemo } from '../../hooks/useMemo';

import {
  StyledButton,
  Container,
  Label
} from './styled';

export interface IOption {
  text: string;
  value: string;
}

interface IChipsProps {
  options: IOption[];
  className?: string;
  onChange?: (option: IOption | null) => void;
  label?: string;
}

const Chips = ({
  options,
  onChange,
  className,
  label,
}: IChipsProps) => {
  const [value, setValue] = React.useState('');
  return (
    <Container className={className}>
      <Label>{label}</Label>
      {options.map((option, index) => {
        const onClick = () => {
          if (option.value === value) {
            onChange?.(null);
            setValue('');
          } else {
            onChange?.(option);
            setValue(option.value);
          }
        };
        return (
          <StyledButton
            key={index}
            onClick={onClick}
            type='button'
            selected={option.value === value}
          >
            {option.text}
          </StyledButton>
        );
      })}
    </Container>
  );
};

export default appReactMemo(Chips);
