import styled from 'styled-components';

export const Container = styled.div`
  color: ${props => props.theme.logoIcon};
  display: flex;
  align-items: center;
`
export const Item = styled.div`
  color: ${props => props.theme.logoText};
  margin-left: 7px;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
`