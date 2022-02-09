import styled from 'styled-components';
import Button from '../../../components/Button';
import Title from '../../../components/Title';
import BgImage from '../../../assets/img/jobsPhoto.png';

export const Container = styled.div`
  max-width: 1520px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  padding-bottom: 0px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 220px;
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
`
export const Image = styled.div`
  width: calc(50% - 91px);
  background: url(${BgImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`
export const TitleBox = styled.div`
  width: 22.5%;
`
export const DescriptionBox = styled.div`
  width: 27.5%;
  padding-left:52px; 
  & > svg {
    color: ${props => props.theme.iconDefault};
    display: block;
    margin-left: 10px;
  }
` 