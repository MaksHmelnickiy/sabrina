import * as React from 'react';
import { ICONS_MAP } from '../../constants/icons';
import { Container, Close } from './styled';

interface IModal {
  isShow: boolean;
  onClose: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

const ModalWrapper = ({isShow, onClose, children}: IModal) => {

  return (
    <>
      {isShow &&
        <Container className="modal">
          <Close onClick={onClose}><ICONS_MAP.Close /></Close>
          {children}
        </Container>
      }
    </>
  );
};
export default ModalWrapper;