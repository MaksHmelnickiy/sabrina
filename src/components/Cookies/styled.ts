import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  background: #000000;
  left: 0;
  bottom: 0;
  right: 0;
  z-index:32;
  padding: 35px 15px;
`
export const Wrapper = styled.div`
  max-width: 1550px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Text = styled.div`
  color: #A1A2AC;
  font-weight: normal;
  font-size: 18px;
  line-height: 180%;
  font-family: 'Biotif';
  margin-left: 23px;
  max-width: 733px;
`
export const Policy = styled.button`
  padding: 0;
  background: none;
  border: none;
  display: inline;
  color: #fff;
  font-weight: normal;
  font-size: 18px;
  line-height: 180%;
  font-family: 'Biotif';
  transition: 0.2s;
  cursor: pointer;
  &:hover{
    color: #D89477;
  }
`
export const Flex = styled.div`
  display: flex;
  align-items: center;
  margin-right: 30px;
`
export const Button = styled.button`
  border: 1px solid #D89477;
  border-radius: 88px;
  color: #D89477;
  font-family: 'Biotif';
  background: none;
  font-weight: 600;
  font-size: 20px;
  transition: 0.2s;
  height: 80px;
  max-width: 320px;
  width: 100%;
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    border-color: #fff;
    color: #fff;
  }
`