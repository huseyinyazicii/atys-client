import { Moon, Sun } from 'lucide-react';
import useSystemStore, { Theme } from '../stores/useSystemStore';

function ThemeToggle() {
   const theme = useSystemStore((state) => state.theme);
   const toggleTheme = useSystemStore((state) => state.toggleTheme);

   return (
      <button onClick={toggleTheme} className='btn btn-ghost btn-circle' aria-label='Tema değiştir'>
         {theme === Theme.LIGHT ? <Moon className='w-5 h-5' /> : <Sun className='w-5 h-5' />}
      </button>
   );
}

export default ThemeToggle;
