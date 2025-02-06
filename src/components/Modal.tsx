import React, { useEffect, useRef } from 'react';
import { CloseButton } from './CloseButton';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      modalRef.current?.showModal();
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      modalRef.current?.close();
      document.body.style.overflow = '';
    }

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <dialog
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-lg w-full flex items-center justify-start bg-white sm:rounded-1.5 transition-opacity duration-300 ease-in-out open:opacity-100 open:scale-100 opacity-0 p-6"
      ref={modalRef}
    >
      <CloseButton onClick={onClose} />
      {children}
    </dialog>
  );
};




