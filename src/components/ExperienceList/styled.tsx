import styled from 'styled-components';

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
`
export const Item = styled.div`
  background: ${props => props.theme.expBg};
  margin: 10px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  position: relative;
  &:nth-of-type(1){
    width: calc(50% - 20px);
    padding: 40px 150px 42px 64px;
    & > svg {
      right: -77px;
      top: 47%;
      transform: translateY(-50%);
    }
  }
  &:nth-of-type(2){
    width: calc(50% - 20px);
    padding: 49px 150px 35px 88px;
    & > svg {
      right: 73px;
      bottom: -74px;
    }
  }
  &:nth-of-type(3){
    width: calc(66.5% - 20px);
    padding: 43px 130px 36px 59px;
    & > svg {
      right: -55px;
      top: 58%;
      transform: translateY(-50%);
    }
    & > span {
      padding-left: 0px;
    }
  }
  &:nth-of-type(4){
    width: calc(33.5% - 20px);
    padding: 86px 42px 36px 54px;
    display: block;
    text-align: center;
    & > span {
      padding-left: 0px;
      padding-top: 12px;
    }
  }
  & > svg {
    position: absolute;
    z-index: 1;
    color: ${props => props.theme.expArrowIcon};
  }
`
export const Text = styled.span`
  color: ${props => props.theme.titleH4};
  font-weight: normal;
  font-size: 24px;
  line-height: 33px;
  padding-left: 41px; 
  display: block;
`
export const IconWrapper = styled.div`
  color: ${props => props.theme.expIcon};

`
