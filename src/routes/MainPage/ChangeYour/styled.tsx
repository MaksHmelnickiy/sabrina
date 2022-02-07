import React from 'react';
import styled from 'styled-components';
import Button from '../../../components/Button';
import Title  from '../../../components/Title';

export const Container = styled.div`
  max-width: 1520px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 148px 0px 209px 0px;
  position: relative;
`;

export const PartTitle = styled.div`
  text-align: right;
`;
export const Photo = styled.img`
  max-width: calc(50% - 13px);
  &:nth-of-type(2){
    margin-top: 98px;
  }
`;
export const PhotoWrapper = styled.div`
  max-width: 756px;
  width: 100%;
  position: absolute;
  left: 50%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  transform: translateX(-50%);
  top: 0;
`;
export const SvgIcon = styled.div`
  color: ${props => props.theme.iconDefault};
  position: absolute;
  left: 50%;
  margin-left: 19%;
  top: 8px;
`;
export const Text = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  font-family: 'Biotif';
  max-width: 282px;
  text-align: right;
  position: absolute;
  right: 0;
  top: 44%;
  transform: translateY(-50%);
  color: ${props => props.theme.boutiqueText};
`;
export const StyledButton = styled(Button)`
  position: absolute;
  bottom: 20%;
  left: 19%;
  z-index: 2;
`;
export const CustomTitle = styled(Title)`
  position: relative;
  z-index: 1;
`;