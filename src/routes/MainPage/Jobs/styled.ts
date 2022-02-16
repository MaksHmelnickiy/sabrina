import styled from 'styled-components';
import Button from '../../../components/Button';
import Title from '../../../components/Title';
import BgImage from '../../../assets/img/jobsPhoto.png';
import { device } from '../../../constants/breakpoints';

export const Container = styled.div`
  max-width: 1520px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  display: flex;
  justify-content: space-between;
  padding-bottom: 220px;
  @media ${device.xxl}{
    max-width: 1200px;
    padding-bottom: 153px;
  }
  @media ${device.xl}{
    max-width: 1000px;
    padding-bottom: 153px;
  }
`
export const StyledButton = styled(Button)`
  position: relative; 
  margin-top: 138px;
  z-index: 1;
  & i {
    max-width: 80px;
  }
  & > div {
    color: ${props => props.theme.buttonSecondaryArrow};
  }
  @media ${device.xxl}{
    margin-top: 14px;
    & > div {
      transform: rotate(-48deg);
      position: absolute;
      left: 87%;
      top: 14%;
    }
  }
`
export const Text = styled.div`
  font-weight: normal;
  font-size: 18px;
  line-height: 23px;
  padding-top: 20px;
  padding-bottom: 38px;
  color: ${props => props.theme.text};
  font-family: 'Biotif';
  max-width: 290px;
  @media ${device.xxl}{
    padding-top: 11px;
    padding-bottom: 11px;
  }
`
export const CustomTitle = styled(Title)`

`
export const Description = styled.div`
  color: ${props => props.theme.titleH4};
  font-weight: normal;
  font-size: 24px;
  line-height: 33px;
  
  display: block;
  max-width: 520px;
  position: relative;
  z-index: 1;
  padding-top: 41px;
  @media ${device.xxl}{
    padding-top: 0px;
    margin-top: 91px;
  }
`
export const Image = styled.div`
  width: calc(50% - 91px);
  background: url(${BgImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  @media ${device.xxl}{
    background-position: top;
    width: calc(50% - 118px);
    position: relative;
  }
  @media ${device.xl}{
    background-position: center;
    width: calc(40% - 40px);
    position: relative;

  }
`
export const TitleBox = styled.div`
  width: 22.5%;
  @media ${device.xxl}{
    width: 25%;
  }
  @media ${device.xl}{
    width: 30%;
  }
`
export const DescriptionBox = styled.div`
  width: 27.5%;
  padding-left:52px; 
  position: relative;
  & > svg {
    color: ${props => props.theme.iconDefault};
    display: block;
    margin-left: 10px;
  }
  @media ${device.xxl}{
    width: 25%;
    padding-left:15px;

    & > svg {
      width: 182px;
      height: 163px;
      position: absolute;
      top: 0;
      left: 47%; margin-left: -90px;
    }
  }
  @media ${device.xl}{
    width: 30%;
  }
` 