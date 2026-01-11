import { useEffect, useRef } from 'react';
import useLoadingStore from '../stores/useLoadingStore';

function LoadingOverlay() {
   const isLoading = useLoadingStore((s) => s.isLoading);
   const dialogRef = useRef<HTMLDialogElement>(null);

   useEffect(() => {
      const dialog = dialogRef.current;
      if (!dialog) return;

      if (isLoading && !dialog.open) {
         dialog.showModal();
      }

      if (!isLoading && dialog.open) {
         dialog.close();
      }
   }, [isLoading]);

   return (
      <dialog ref={dialogRef} className='modal'>
         <div className='flex items-center justify-center'>
            <span className='loading loading-spinner loading-lg text-primary' />
         </div>
         <form method='dialog' className='modal-backdrop'>
            <button />
         </form>
      </dialog>
   );
}

export default LoadingOverlay;
