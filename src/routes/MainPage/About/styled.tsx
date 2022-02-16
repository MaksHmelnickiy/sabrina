import styled from 'styled-components';
import Button from '../../../components/Button';
import Title from '../../../components/Title';
import { device } from '../../../constants/breakpoints';

export const Container = styled.div`
  max-width: 1520px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  @media ${device.xxl}{
    max-width: 1200px;
  }
`
export const TickerWrapper = styled.div`
	overflow: hidden;
  padding-top: 109px;
  margin: 0 -15px;
  min-height: 435px;
  @media ${device.xxl}{
    padding-top: 130px;
    min-height: 350px;
  }
`
export const TickerText = styled.div`
  font-size: 240px;
  color: ${props => props.theme.ticker};
  text-transform: uppercase;
  @media ${device.xxl}{
    line-height: 1;
  }
`
export const SecondaryTitle = styled(Title)`
  margin-bottom: 38px;
`
export const Flex = styled.div`

`
export const TextContainer = styled.div`
  width: 50%;
  padding-top: 97px;
  padding-right: 135px;
  @media ${device.xxl}{
    padding-right: 0px;
    padding-top: 108px;
  }
`
export const ImageContainer = styled.div`
  width: 50%;
  padding-left: 10px;
  padding-top: 105px;
  @media ${device.xxl}{
    padding-left: 119px;
    padding-top: 98px;
    position: relative;
    padding-bottom: 400px;
  }
`
export const Text = styled.p`
  font-weight: normal;
  font-size: 18px;
  line-height: 23px;
  padding-top: 20px;
  padding-bottom: 20px;
  color: ${props => props.theme.text};
  font-family: 'Biotif';
  &:nth-of-type(1){
    padding-right: 36px;
  }
  @media ${device.xxl}{
    &:nth-of-type(1){
      padding-right: 0px;
    }
  }
`
export const CustomTitle = styled(Title)`
  padding-top: 55px;

`
export const VideoContainer = styled.div`
  position: relative;
  & video {
    max-width: 100%;
  }
  & img {
    max-width: 100%;
    position: absolute;
    top: -100px;
    left: -25px;
  }
  @media ${device.xxl}{
    max-width: 477px;
    position: sticky;
    top: 100px;
    & img {
      max-width: 518px;
      top: -81px;
    }
  }
`
export const StyledButton = styled(Button)`
  position: absolute;
  left: 50%;
  margin-left: -156px;
  bottom: -107px;
  @media ${device.xxl}{
    bottom: -124px;
    left: 60%;
  }
`
export const List = styled.ul`
  margin-top: 200px;
  @media ${device.xxl}{
    position: absolute;
    bottom: 20px;
  }
`
export const Item = styled.li`
  font-weight: normal;
  font-size: 24px;
  line-height: 33px;
  color: ${props => props.theme.list};
  position: relative;
  padding-left: 32px;
  & svg{
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -6.5px;
    width: 13px;
    height: 13px;
    color: ${props => props.theme.marker};
  }
`