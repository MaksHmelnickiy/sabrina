import styled from 'styled-components';

interface IModalProps {
  isShow: boolean;
}

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
export const Box = styled.div`
  width: calc(50% - 125px);
`