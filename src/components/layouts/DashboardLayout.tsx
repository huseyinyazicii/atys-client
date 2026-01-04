import { HexagonIcon, PanelLeftOpenIcon } from 'lucide-react';
import { NavLink, Outlet, useLocation } from 'react-router';
import sidebarMenu from '../../constants/sidebarMenu';
import ThemeToggle from '../ThemeToggle';

function DashboardLayout() {
   const location = useLocation();

   const currentRoute = sidebarMenu.find((route) => route.path === location.pathname);

   return (
      <div className='drawer lg:drawer-open'>
         <input id='my-drawer-4' type='checkbox' className='drawer-toggle' />
         <div className='drawer-content'>
            <nav className='navbar w-full bg-base-300 flex items-center justify-between'>
               <div className='flex justify-center items-center'>
                  <label
                     htmlFor='my-drawer-4'
                     aria-label='open sidebar'
                     className='btn btn-square btn-ghost'
                  >
                     <PanelLeftOpenIcon className='w-5 h-5' />
                  </label>
                  <div className='px-4'>{currentRoute?.label}</div>
               </div>
               <ThemeToggle />
            </nav>
            <div className='p-4'>
               <Outlet />
            </div>
         </div>

         <div className='drawer-side is-drawer-close:overflow-visible'>
            <label
               htmlFor='my-drawer-4'
               aria-label='close sidebar'
               className='drawer-overlay'
            ></label>
            <div className='flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64'>
               <div className='navbar min-h-16 px-4 border-b flex items-center justify-center'>
                  <span className='text-lg font-bold tracking-wide is-drawer-close:hidden'>
                     ATYS
                  </span>
                  <HexagonIcon className='is-drawer-open:hidden w-5 h-5' />
               </div>
               <ul className='menu w-full grow'>
                  {sidebarMenu.map((item) => {
                     const Icon = item.icon;
                     return (
                        <li key={item.key} className='mt-1 mb-1'>
                           <NavLink
                              to={item.path}
                              className={({ isActive }) =>
                                 [
                                    'is-drawer-close:tooltip is-drawer-close:tooltip-right',
                                    isActive && 'active font-semibold menu-active',
                                 ]
                                    .filter(Boolean)
                                    .join(' ')
                              }
                              data-tip={item.tooltip}
                           >
                              <Icon className='w-5 h-5' />
                              <span className='is-drawer-close:hidden'>{item.label}</span>
                           </NavLink>
                        </li>
                     );
                  })}
               </ul>
            </div>
         </div>
      </div>
   );
}

export default DashboardLayout;
