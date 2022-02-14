import styled from 'styled-components';

interface IButtonProps {
  selected: boolean
}

export const Container = styled.div`
  padding-top: 22px;
`
export const StyledButton = styled.button<IButtonProps>`
    margin: 0px 4px;
    background: rgba(255,255,255,0);
    color: ${({ selected }) => (selected ? `#D89477` : `#F0EEF4`)};
    box-shadow: none;
    border:none;
    outline: none;
    font-weight: 600;
    font-size: 16px;
    padding:0px 29px;
    height: 64px;
    border-radius: 43px;
    line-height: inherit;
    cursor: pointer;
    margin-right: 8px;
    transition: 0.2s;
    font-family: 'Biotif';
    border: 1px solid ${({ selected }) => (selected ? '#D89477' : '#54525C')} ;
    &:nth-last-of-type(1){
      margin-right: 0;
    }
    &:hover {
      box-shadow: none;
      color: #D89477;
    }
  
    &:active {
      box-shadow: none;
    }

  
`;
export const Label = styled.label`
  color: #F0EEF4;
  font-weight: 600;
  font-size: 18px;
  line-height: 150%;
  font-family: 'Biotif';
  display: block;
  margin-bottom: 30px;
`

