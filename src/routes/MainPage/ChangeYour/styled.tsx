import React from 'react';
import styled from 'styled-components';
import Button from '../../../components/Button';
import Title  from '../../../components/Title';
import { device } from '../../../constants/breakpoints';

export const Container = styled.div`
  max-width: 1520px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 148px 0px 209px 0px;
  position: relative;
  @media ${device.xxl}{
   max-width: 1200px; 
   padding: 133px 0 209px 0;
  }
  @media ${device.xl}{
    max-width: 1000px; 
   }
`;

export const PartTitle = styled.div`
  text-align: right;
`;
export const Photo = styled.img`
  max-width: calc(50% - 13px);
  &:nth-of-type(2){
    margin-top: 98px;
  }
  @media ${device.xl}{
    &:nth-of-type(2){
      margin-top: 103px;
    }
    &:nth-of-type(1){
      margin-top: 20px;
    }
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
  @media ${device.xxl}{
    max-width: 716px;
  }
  @media ${device.xl}{
    max-width: 660px;
  }
`;
export const SvgIcon = styled.div`
  color: ${props => props.theme.iconDefault};
  position: absolute;
  left: 50%;
  margin-left: 19%;
  top: 8px;
  & svg{
    max-width: 100%;
  }
  @media ${device.xxl}{
    width: 167px;
    top: -6px;
    margin-left: 9%;
  }
  @media ${device.xl}{
    width: 167px;
    top: -78px;
    margin-left: 0;
    left: 87px;
  }
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
  @media ${device.xxl}{
    max-width: 175px;
    top: 16%;
  }
  @media ${device.xl}{
    max-width: 282px;
    top: 7%;
    right: 17%;
  }
`;
export const StyledButton = styled(Button)`
  position: absolute;
  bottom: 20%;
  left: 19%;
  z-index: 2;
  @media ${device.xxl}{
    left: 13%;
  }
  @media ${device.xl}{
    left: 8%;
  }
`;
export const CustomTitle = styled(Title)`
  position: relative;
  z-index: 1;
  @media ${device.xxl}{
    & div {
      padding-top:23px;
    }
  }
`;