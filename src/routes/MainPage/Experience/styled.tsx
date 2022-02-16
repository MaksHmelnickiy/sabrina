import styled from 'styled-components';
import Button from '../../../components/Button';
import Title from '../../../components/Title';
import { device } from '../../../constants/breakpoints';

export const Container = styled.div`
  max-width: 1520px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 214px;
  position: relative;
  padding-bottom: 240px;
  @media ${device.xxl}{
    max-width: 1200px;
    padding-top: 117px;
  }
`
export const StyledButton = styled(Button)`
  position: absolute; 
  left: 181px;
  bottom: 49px;
  & > div {
    color: ${props => props.theme.buttonPrimaryArrow};
  }
`
export const Text = styled.div`
  font-weight: normal;
  font-size: 18px;
  line-height: 23px;
  padding-top: 34px;
  padding-bottom: 38px;
  color: ${props => props.theme.text};
  font-family: 'Biotif';
  max-width: 742px;
  @media ${device.xxl}{
    padding-top: 24px;
  }
`
export const IconWrapper = styled.div`
  color: ${props => props.theme.iconDefault};
  position: absolute;
  right: 76px;
  top: 86px;
  @media ${device.xxl}{
    width: 166px;
    right: 52px;
    top: 38px;
    & svg {
      max-width: 100%;
    }
  }
`
export const CustomTitle = styled(Title)`
  padding-right: 375px;
  @media ${device.xxl}{
    padding-right: 275px;
  }
`