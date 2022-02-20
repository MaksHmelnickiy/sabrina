import styled from 'styled-components';
import { device } from '../../../constants/breakpoints';

interface Props {
  activeTab: boolean
}

export const CustomButton = styled.button<Props>`
  background: none;
  border: none;
  color: ${({ activeTab }) => (activeTab ? `rgba(216, 148, 119, 1)` : ` rgba(91, 98, 107, 1)`)};
  cursor: pointer;
  padding: 0 0 16px 0;
  margin-left: 15px;
  margin-right: 15px;
  font-family: 'Recoleta';
  font-weight: normal;
  font-size: 40px;
  line-height: 120%;
  @media ${device.xxl}{
    font-size: 30px;
  }
  @media ${device.md}{
    
  }
`;
