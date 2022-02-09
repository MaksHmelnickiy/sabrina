import styled from 'styled-components';
import Button from '../../components/Button';


export const Container = styled.div`
  min-height: calc(100vh - 364px);
  padding-top: 91px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.notFoundIcon};
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
`
export const StyledButton = styled(Button)`
  position: absolute;
  left: 300px;
  bottom: 0;
`