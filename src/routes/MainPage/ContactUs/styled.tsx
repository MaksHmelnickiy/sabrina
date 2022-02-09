import styled from 'styled-components';
import Button from '../../../components/Button';
import Title from '../../../components/Title';
import BgImage from '../../../assets/img/man.png';

export const Container = styled.div`
  max-width: 1520px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 107px;
  position: relative;
  padding-bottom: 0px;
`
export const StyledButton = styled(Button)`
  position: absolute; 
  right: 17%;
  bottom: -109px;
  z-index: 1;
  & i {
    max-width: 80px;
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
  max-width: 404px;
`

export const CustomTitle = styled(Title)`
  padding-right: 510px;
`
export const Box = styled.div`
  position: absolute;
  right: 0;
  top: 150px;
  max-width: 420px;
  text-align: right;
  padding-top: 104px;
  & > svg {
    position: absolute;
    color: ${props => props.theme.iconDefault};
    max-width: 170px;
    height: 170px;
    width: 100%;
    left: 69px;
    top: 27px;
    opacity: 0.7;
  }
`
export const Description = styled.div`
  color: ${props => props.theme.titleH4};
  font-weight: normal;
  font-size: 24px;
  line-height: 33px;
  padding-left: 41px; 
  display: block;
  max-width: 320px;
  margin-left: auto;
  position: relative;
  z-index: 1;
`
export const BoxText = styled(Text)`
  max-width: 420px;
  padding-top: 30px;
`
export const Image = styled.div`
  height: 686px;
  background: url(${BgImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  margin: 0 -15px;
  margin-top: -196px;
  position: relative;
`