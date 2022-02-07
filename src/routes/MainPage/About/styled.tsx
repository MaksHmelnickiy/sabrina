import styled from 'styled-components';
import Title from '../../../components/Title';

export const Container = styled.div`
  max-width: 1550px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;

`
export const TickerWrapper = styled.div`
	overflow: hidden;
	width: 100%;
  padding-top: 109px;
`
export const CustomTitle = styled.div`
  font-size: 240px;
  color: ${props => props.theme.ticker};
  text-transform: uppercase;
`
export const SecondaryTitle = styled(Title)`

`
export const Flex = styled.div`

`
export const TextContainer = styled.div`

`
export const ImageContainer = styled.div`

`