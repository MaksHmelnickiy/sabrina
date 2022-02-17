import styled from 'styled-components';
import { device } from '../../constants/breakpoints';

export const ContentContainer = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 155px 15px 0px 15px;
  @media ${device.xxl} {
    padding-top: 172px;
  }
  @media ${device.lg}{
    padding: 182px 50px 0px 50px;
  }
  @media ${device.md}{
    padding: 149px 25px 0px 25px;
    overflow: hidden;
  }
`