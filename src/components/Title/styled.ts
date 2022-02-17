import styled from 'styled-components';
import { device } from '../../constants/breakpoints';
export interface ITitle{
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  color?: string
}



export const Container = styled.div<ITitle>`
  ${props => {
    switch (props.variant) {
      case 'h1':
        return `
          font-weight: 500;
          font-size: 200px;
          line-height: 120%;
          color: ${props.color ? props.color : props.theme.titleH1};
          @media ${device.xxl}{
            font-size: 180px;
          }
          @media ${device.xl}{
            font-size: 160px;
          }
          @media ${device.lg}{
            font-size: 100px;
          }
          @media ${device.md}{
            font-size: 50px;
          }
        `;
      case 'h2':
        return `
          font-weight: 500;
          font-size: 96px;
          line-height: 120%;
          color: ${props.color ? props.color : props.theme.titleH2};
          @media ${device.xxl}{
            font-size: 80px;
            line-height: 120%;
          }
          @media ${device.xl}{
            font-size: 72px;
            line-height: 120%;
          }
          @media ${device.md}{
            font-size: 30px;
            line-height: 120%;
            font-weight: normal;
          }
        `;
      case 'h3':
        return `
          font-weight: normal;
          font-size: 40px;
          line-height: 120%;
          color: ${props.color ? props.color : props.theme.titleH3};
          @media ${device.md}{
            font-size: 30px;
            line-height: 120%;
            font-weight: normal;
          }
        `;
      case 'h4':
        return `
          font-weight: normal;
          font-size: 24px;
          line-height: 33px;
          color: ${props.color ? props.color : props.theme.titleH4};
        `;
      case 'h5':
        return 'font-weight: normal;font-size: 20px;line-height: 120%;';
      case 'h6':
        return 'font-weight: normal;font-size: 16px;line-height: 120%;';
      default:
        return 'font-weight: 500;font-size: 96px;line-height: 120%;';
    }
  }};
`;
export const Text = styled.div`
  color: ${props => props.theme.logoText};
  margin-left: 7px;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
`