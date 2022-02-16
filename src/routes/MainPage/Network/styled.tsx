import styled from 'styled-components';
import Title from '../../../components/Title';
import { device } from '../../../constants/breakpoints';

export const Container = styled.div`
  max-width: 1520px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 180px;
  position: relative;
  @media ${device.xxl}{
    max-width: 1200px;
    padding-top: 160px;
  }
  @media ${device.xl}{
    max-width: 1000px;
    padding-top: 168px;
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
  max-width: 422px;
  @media ${device.xxl}{
    padding-top: 10px;
  }
  @media ${device.xl}{
    padding-top: 25px;
  }
`

export const CustomTitle = styled(Title)`
  padding-right: 375px;
`
export const TickerWrapper = styled.div`
	overflow: hidden;
  padding-top: 100px;
  margin: 0 -15px;
  padding-bottom: 228px;
  @media ${device.xxl}{
    padding-top: 50px;
    padding-bottom: 162px;
  }
  @media ${device.xl}{
    padding-top: 40px;
    padding-bottom: 136px;
  }
`
export const TickerText = styled.div`
  font-size: 240px;
  color: ${props => props.theme.ticker};
  text-transform: uppercase;
`
export const Brand = styled.div`
  position: relative;
  width: 327px;
  height: 338px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 80px;
  margin-right: 80px;
  color: ${props => props.theme.brand};
  & svg {
    &:nth-of-type(1){
      position: absolute;
      left: 0;
      color: ${props => props.theme.brandCircle};
      top: 0;
      width: 100%;
      height: 100%;
    }
  }
  @media ${device.xxl}{
    width: 290px;
    height: 300px;
    & svg {
      &:nth-of-type(2){
        transform: scale(0.8);
      }
    }
  }
  @media ${device.xl}{
    width: 220px;
    height: 226px;
    margin-left: 50px;
    margin-right: 50px;
    & svg {
      &:nth-of-type(2){
        transform: scale(0.6);
      }
    }
  }
`
export const BrandContainer = styled.div`
  display: flex;
`