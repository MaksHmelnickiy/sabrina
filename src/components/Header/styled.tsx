import styled from 'styled-components';
import { Link } from 'react-scroll';
import { device } from '../../constants/breakpoints';

interface IHeaderProps {
  show?: boolean;
  minScroll?: boolean;
}

interface IShowMenu {
  showMenu?: boolean;
}

export const Container = styled.div<IHeaderProps>`
  padding-top: 30px;
  position: fixed;
  left:0;
  right: 0;
  z-index: 5;
  padding-bottom: 30px;
  top:0;
  transition: 0.2s;
  background: rgba(255,255,255,0);
  ${props => props.minScroll ? `
    background: ${props.theme.headerBg};
  ` : ``}
  ${props => props.show ? `top: -100px;` : `top: 0;`
}
  @media ${device.xl} {
    padding: 25px 0;
  }
  @media ${device.lg} {
    background: ${props => props.theme.headerBg};
  }
  @media ${device.md} {
    background: ${props => props.theme.headerBg};
    padding: 15px 0;
  }
`
export const MenuList = styled.ul`
  display: flex;
  @media ${device.lg} {
    display: block;
  }
`
export const OverflowMenu = styled.div<IShowMenu>`
  @media ${device.lg} {
    position: absolute;
    height: calc(100vh - 80px);
    top: 80px;
    left: -100%;
    width: 100%;
    background: ${props => props.theme.headerBg};
    padding-left: 106px;
    padding-top: 44px;
    overflow: auto;
    padding-right: 50px;
    transition: 0.4s;
    ${props => props.showMenu && `left: 0;`}
  }
  @media ${device.md} {
    padding-left: 25px;
    padding-top: 25px;
    height: calc(100vh - 50px);
    top: 50px;
    padding-top: 74px;
  }
`
export const Item = styled.li`
  padding-left: 30px;
  padding-right: 30px;
  @media ${device.lg}{
    margin-bottom: 15px;
    padding-left: 0;
  }
`
export const StyledLink = styled(Link)`
  display: flex;
  color: ${props => props.theme.headerLink};
  transition: 0.2s;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.headerLinkHover};
  }
  @media ${device.lg}{
    font-size: 72px;
    line-height: 120%;
    display: inline;
  }
  @media ${device.md} {
    font-size: 40px;
  }
`;
export const Wrapper = styled.div`
  max-width: 1550px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${device.xxl}{
    max-width: 1230px;
  };
  @media ${device.xl} {
    max-width: 1000px;
    padding: 0;
  };
  @media ${device.lg} {
    max-width: none;
    padding: 0 50px;
  };
  @media ${device.md} {
    max-width: none;
    padding: 0 25px;
  };
`
export const Gamburger = styled.button<IShowMenu>`
  display: none;
  background: none;
  border:none;
  padding: 0;
  @media ${device.lg} {
    display: block;
    color: ${props => props.theme.gamburger};
    width: 30px;
    height: 26px;
    position: relative;
    &:before{
      display: block;
      content: '';
      position: absolute;
      width: 26px;
      height: 3px;
      transform: rotate(0);
      transition: 0.2s;
      left: 2px;
      top: 9px;
    }
    &:after{
      display: block;
      content: '';
      position: absolute;
      width: 26px;
      height: 3px;
      transform: rotate(0deg);
      transition: 0.2s;
      left: 2px;
      top: 9px;
    }
    & svg {
      display: block;
      transition: 0.2s;
      transform: scale(1);
    }
    ${props => props.showMenu && `
        svg {
          opacity: 0;
          transform: scale(0);
        }
        &::before {
          background: ${props.theme.gamburger};
          transform: rotate(45deg);
        }
        &::after {
          background: ${props.theme.gamburger};
          transform: rotate(-45deg);
        }
      }
    `}

  }
`