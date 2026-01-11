import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import { useEffect } from 'react';
import LoadingOverlay from './components/LoadingOverlay';
import LocalStorageKeys from './constants/localStorageKeys';
import { ToastProvider } from './contexts/toast.context';
import Router from './Router';
import useSystemStore, { type ETheme } from './stores/useSystemStore';

ModuleRegistry.registerModules([AllCommunityModule]);

function App() {
   const setTheme = useSystemStore((state) => state.setTheme);

   useEffect(() => {
      const savedTheme = localStorage.getItem(LocalStorageKeys.THEME) as ETheme | null;
      if (savedTheme) {
         setTheme(savedTheme);
         document.documentElement.setAttribute('data-theme', savedTheme);
      }
   }, []);

   return (
      <>
         <ToastProvider>
            <Router />
         </ToastProvider>
         <LoadingOverlay />
      </>
   );
}

export default App;
