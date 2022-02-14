import React from 'react';
import { ICONS_MAP } from '../../constants/icons';
import { Container, CustomTextarea, Label } from './styled';

interface ITextarea {
  className?: string;
  name?: string;
  label?: string;
}

const Textarea = ({className,name,label}:ITextarea): React.ReactElement => {
  return (
    <Container className={className} spy={true} smooth={true} to='main'>
        <Label>{label}</Label>
        <CustomTextarea name={name} />
    </Container>
  );
};

export default Textarea;
