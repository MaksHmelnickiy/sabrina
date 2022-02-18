import styled from 'styled-components';
import BgImage from '../../assets/img/snowflakeOutline.svg';

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
