import styled from 'styled-components';
import BgImage from '../assets/img/bg.png';
import Title from '../components/Title';
import { device } from '../constants/breakpoints';

export const Container = styled.div`
  background-color: ${props => props.theme.mainBackground};
  min-height: 100vh;
  background-image: url(${BgImage});
  font-size: 30px;
  color: ${props => props.theme.titleColor};
  transition: 0.1s;
`
export const CustomTitle = styled(Title)`
  color: #fff;
  &:nth-of-type(1){
    padding-bottom: 40px;
    padding-top: 80px;
  }
  @media ${device.lg}{
    &:nth-of-type(1) {
      padding-bottom: 0px;
      padding-top: 40px;
    }
  }
`
export const Text = styled.p`
  color: rgba(134, 138, 144, 1);
  font-weight: normal;
  font-size: 18px;
  line-height: 23px;
  font-family: 'Biotif';
  padding-top: 20px;
  padding-bottom: 58px;
  @media ${device.lg}{
    padding-bottom: 20px;
  }
`
export const Box = styled.div`
  max-width: 1060px;
  padding: 0 15px;
  padding-top: 40px;
`