import styled from 'styled-components';
import { device } from '../../constants/breakpoints';
import Title from '../Title';

export const Container = styled.div`

`;

export const Wrapper = styled.div`
  overflow: hidden;
`;
export const CustomTitle = styled(Title)`
  margin-bottom: 20px;
  color: white;
  text-transform: uppercase;
  @media ${device.md} {
    font-size: 50px;
  }
`
export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -27px 24px -27px;
  position: relative;
  padding-left: 149px;
  @media ${device.xl}{
    padding-left: 70px;
  }
  @media ${device.md}{
    padding-left: 0;
    margin: 0 -15px 24px -15px;
  }
`;
export const Text = styled.div`
  font-family: 'Biotif';
  font-style: normal;
  font-weight: 450;
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 80px;
  color: #696E76;
  @media ${device.md}{
    margin-bottom: 28px;
  }
`
export const IconBox = styled.div`
  position: absolute;
  pointer-events: none;
  left: 27px;
  top: -12px;
  @media ${device.xl}{
    width: 40px;
    & svg {
      max-width: 100%;
    }
  }
  @media ${device.md}{
    display: none;
  }
`
