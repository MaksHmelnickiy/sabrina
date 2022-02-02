import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  color: ${props => props.theme.logoIcon};
  display: flex;
  align-items: center;
`
export const Text = styled.div`
  color: ${props => props.theme.logoText};
  margin-left: 7px;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
`