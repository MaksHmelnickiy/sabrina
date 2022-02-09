import styled from 'styled-components';
import Title from '../../../components/Title';

export const Container = styled.div`
  max-width: 1520px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 180px;
  position: relative;
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
`

export const CustomTitle = styled(Title)`
  padding-right: 375px;
`
export const TickerWrapper = styled.div`
	overflow: hidden;
  padding-top: 100px;
  margin: 0 -15px;
  padding-bottom: 228px;
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
`
export const BrandContainer = styled.div`
  display: flex;
`