import styled from 'styled-components';
import Button from '../../components/Button';
import { device } from '../../constants/breakpoints';


export const Container = styled.div`
  min-height: 100vh;
  padding-top: 91px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 25px;
  color: ${props => props.theme.notFoundIcon};
  @media ${device.md}{
    padding: 50px 25px;
  }
`
export const Text = styled.div`
  color: ${props => props.theme.logoText};
  margin-left: 7px;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
`
export const Box = styled.div`
  position: relative;
  padding-bottom: 105px;
  & > svg{
    max-width: 100%;
    height: auto;
  }
`
export const StyledButton = styled(Button)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  @media ${device.md}{
    bottom: -30px;
  }
`