import * as React from 'react';
import { ICONS_MAP } from '../../constants/icons';
import { Container, Close, CustomScrollbars } from './styled';

export interface IModal {
  isShow?: boolean;
  onClose: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

const ModalWrapper = ({isShow, onClose, children}: IModal) => {
  const [onScroll, setOnScroll] = React.useState(false)
  React.useEffect(() => {
    if(isShow === true){
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  },[isShow])
  return (
    <>
      {isShow &&
        <Container className="modal">
          <Close onClick={onClose}><ICONS_MAP.Close /></Close>
          <CustomScrollbars onScroll={() => setOnScroll(true)} onScrollVisible={onScroll}>
            {children}
          </CustomScrollbars>
        </Container>
      }
    </>
  );
};
export default ModalWrapper;