import { ReactNode } from 'react';
import { SModalContainer } from './styles';

interface ModalProps {
  children: ReactNode;
}

export function Modal({ children }: ModalProps) 
{
  return (
    <>
      <SModalContainer>
        <div className="modal-content">
          {children}
        </div>
      </SModalContainer>
    </>
  );
}