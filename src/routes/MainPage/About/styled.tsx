import styled from 'styled-components';
import Button from '../../../components/Button';
import Title from '../../../components/Title';

export const Container = styled.div`
  max-width: 1520px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;

`
export const TickerWrapper = styled.div`
	overflow: hidden;
  padding-top: 109px;
  margin: 0 -15px;
`
export const TickerText = styled.div`
  font-size: 240px;
  color: ${props => props.theme.ticker};
  text-transform: uppercase;
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
`
export const ImageContainer = styled.div`
  width: 50%;
  padding-left: 10px;
  padding-top: 105px;
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
`
export const StyledButton = styled(Button)`
  position: absolute;
  left: 50%;
  margin-left: -156px;
  bottom: -107px;
`
export const List = styled.ul`
  margin-top: 200px;
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