import { ReactNode, useLayoutEffect, useRef } from 'react';

interface Props {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
}

const Modal = ({ children, open, onClose }: Props) => {
  const ref = useRef<HTMLDialogElement>(null);

  useLayoutEffect(() => {
    const closeListenerFnc = () => {
      onClose && onClose();
    };

    const dialogRef = ref.current;
    dialogRef?.addEventListener('close', closeListenerFnc);

    return () => {
      dialogRef?.removeEventListener('close', closeListenerFnc);
    };
  }, [onClose]);

  useLayoutEffect(() => {
    if (open && !ref.current?.open) {
      ref.current?.showModal();
    } else if (!open && ref.current?.open) {
      ref.current?.close();
    }
  }, [open]);

  return (
    <dialog
      className='absolute bottom-1/2 top-1/2 mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md'
      ref={ref}
      onClick={(e) => {
        const dialogDimensions = e.currentTarget.getBoundingClientRect();
        if (
          e.clientX < dialogDimensions.left ||
          e.clientX > dialogDimensions.right ||
          e.clientY < dialogDimensions.top ||
          e.clientY > dialogDimensions.bottom
        ) {
          e.currentTarget.close();
        }
      }}
    >
      {children}
    </dialog>
  );
};

export default Modal;
