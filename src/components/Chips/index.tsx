import React from 'react';
import { appReactMemo } from '../../hooks';

import {
  StyledButton,
} from './styled';

interface IOption {
  label: string;
  value: string;
}

interface IChipsProps {
  options: IOption[];
  onChange?: (option: IOption | null) => void;
}

const Chips = ({
  options,
  onChange,
}: IChipsProps) => {
  const [value, setValue] = React.useState('');
  console.log(value)
  return (
    <>
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
            selected={option.value === value}
          >
            {option.label}
          </StyledButton>
        );
      })}
    </>
  );
};

export default appReactMemo(Chips);
