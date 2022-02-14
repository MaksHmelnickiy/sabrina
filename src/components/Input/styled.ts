import styled from 'styled-components';


interface ILabelProps {
  isFocus: boolean;
}

export const Container = styled.div`
  position: relative;
  margin-bottom: 61px;
`;

export const CustomInput = styled.input`
  border: none;
  border-bottom: 1px solid rgba(84, 82, 92, 0.8);
  height: 50px;
  background: none;
  outline: none !important;
  color: #D89477;
  width: 100%;
  font-family: 'Biotif';
  font-weight: 600;
  font-size: 16px;
  &:-internal-autofill-selected{
    background: none !important;
    color: #D89477 !important;;
  }
`;

export const Label = styled.label<ILabelProps>`
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  color: #FBFAFF;
  font-family: 'Biotif';
  position: absolute;
  top:17px;
  left:0;
  pointer-events: none;
  z-index: 1;
  transition: 0.2s;
  ${props => (props.isFocus ? `
    font-weight: 600;
    font-size: 12px;
    line-height: 150%;
    color: #696E76;
    top: -12px;
  `: '')};
`;