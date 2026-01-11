import { useEffect, useRef, type ReactNode } from 'react';

interface Props {
   isOpen: boolean;
   children?: ReactNode | undefined;
   onClose?: () => void;
}

function Dialog({ isOpen, children, onClose }: Props) {
   const dialogRef = useRef<HTMLDialogElement>(null);

   useEffect(() => {
      const dialog = dialogRef.current;
      if (!dialog) return;

      if (isOpen && !dialog.open) {
         dialog.showModal();
      }

      if (!isOpen && dialog.open) {
         dialog.close();
      }
   }, [isOpen]);

   return (
      <dialog ref={dialogRef} className='modal'>
         <div className='modal-box'>{children}</div>
         <form method='dialog' className='modal-backdrop' onSubmit={onClose}>
            <button aria-label='close' />
         </form>
      </dialog>
   );
}

export default Dialog;
