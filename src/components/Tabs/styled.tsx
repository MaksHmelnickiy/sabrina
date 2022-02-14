import styled from 'styled-components';
import Title from '../Title';

export const Container = styled.div`

`;

export const Wrapper = styled.div`
  overflow: hidden;
`;
export const CustomTitle = styled(Title)`
  color: white;
  margin-bottom: 20px;
  text-transform: uppercase;
`
export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -27px 24px -27px;
  position: relative;
  padding-left: 149px;
`;
export const Text = styled.div`
  font-family: 'Biotif';
  font-style: normal;
  font-weight: 450;
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 80px;
  color: #696E76;
`
export const IconBox = styled.div`
  position: absolute;
  pointer-events: none;
  left: 27px;
  top: -12px;
`
