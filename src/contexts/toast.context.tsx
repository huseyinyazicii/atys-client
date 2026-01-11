import { createContext, useContext, useState, type PropsWithChildren } from 'react';

type ToastType = 'success' | 'error' | 'info' | 'warning';

interface Toast {
   id: number;
   message: string;
   type: ToastType;
}

interface ToastContextValue {
   showToast: (message: string, type?: ToastType) => void;
}

const toastTypeClass: Record<ToastType, string> = {
   success: 'alert-success',
   error: 'alert-error',
   info: 'alert-info',
   warning: 'alert-warning',
};

const ToastContext = createContext<ToastContextValue | null>(null);

export const ToastProvider = (props: PropsWithChildren) => {
   const [toasts, setToasts] = useState<Toast[]>([]);

   const showToast = (message: string, type: ToastType = 'info') => {
      const id = Date.now();

      setToasts((prev) => [...prev, { id, message, type }]);

      setTimeout(() => {
         setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 3000);
   };

   return (
      <ToastContext.Provider value={{ showToast }}>
         {props.children}
         <div className='toast toast-end'>
            {toasts.map((t) => (
               <div key={t.id} className={`alert ${toastTypeClass[t.type]} max-w-sm wrap-break-word`}>
                  <span className="leading-snug">{t.message}</span>
               </div>
            ))}
         </div>
      </ToastContext.Provider>
   );
};

export const useToast = () => {
   const context = useContext(ToastContext);
   if (!context) throw new Error('useToast must be used within ToastProvider');
   return context;
};
