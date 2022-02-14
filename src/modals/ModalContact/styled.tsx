import styled from 'styled-components';
import BgImage from '../../assets/img/snowflakeOutline.svg';
import Tabs from '../../components/Tabs';
import Button from '../../components/Button';

export const Container = styled.div`
  position: fixed;
  background: #000000;
  left: 0;
  top: 0;
  min-height: 100%;
  width: 100%;
  z-index:22;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${BgImage});
  background-repeat: no-repeat;
`
export const FormsContainer = styled.div`
  
`
export const Form = styled.form`

`
export const Wrapper = styled.div`
  max-width: 1486px;
  padding: 0 15px;
  width: 100%;
`;

export const Close = styled.button`
  padding: 10px;
  position: absolute;
  background: none;
  border: none !important;
  outline: none ;
  color: white;
  right: 35px;
  top: 35px;
  transition: 0.2s;
  z-index: 1;
  cursor: pointer;
  &:hover{
    color: rgba(216, 148, 119, 1);
  }
`
export const CustomTabs = styled(Tabs)`
  display: flex;
  justify-content: space-between;
  padding-top: 50px;
  padding-bottom: 50px;
  min-height: 765px;
  position: relative;
  &>div {
    width: calc(50% - 125px);
  }
`
export const CustomButton = styled(Button)`
  position: absolute;
  bottom: 70px;
  right: 28%;
`
