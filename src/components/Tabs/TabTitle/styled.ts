import styled from 'styled-components';

interface Props {
  activeTab: boolean
}

export const CustomButton = styled.button<Props>`
  background: none;
  border: none;
  color: ${({ activeTab }) => (activeTab ? `rgba(216, 148, 119, 1)` : ` rgba(91, 98, 107, 1)`)};
  cursor: pointer;
  padding: 0 0 16px 0;
  margin-left: 27px;
  margin-right: 27px;
  font-family: 'Recoleta';
  font-weight: normal;
  font-size: 40px;
  line-height: 120%;
`;
