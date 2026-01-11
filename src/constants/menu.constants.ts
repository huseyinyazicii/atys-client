import { ArrowUpDownIcon, HouseIcon, SettingsIcon, WrenchIcon, type LucideProps } from 'lucide-react';
import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import { routes } from './routes.constants';

interface ISidebarMenuItem {
   key: string;
   label: string;
   icon: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>;
   tooltip: string;
   path: string;
}

export const adminSidebarMenuItems: ISidebarMenuItem[] = [
   {
      key: 'home',
      label: 'Anasayfa',
      icon: HouseIcon,
      tooltip: 'Anasayfa',
      path: routes.adminHome,
   },
   {
      key: 'roles',
      label: 'Roller',
      icon: ArrowUpDownIcon,
      tooltip: 'Roller',
      path: routes.adminRoles,
   },
];

export const userSidebarMenuItems: ISidebarMenuItem[] = [
   {
      key: 'home',
      label: 'Anasayfa',
      icon: HouseIcon,
      tooltip: 'Anasayfa',
      path: routes.home,
   },
   {
      key: 'elevators',
      label: 'Asansörler',
      icon: ArrowUpDownIcon,
      tooltip: 'Asansörler',
      path: routes.elevators,
   },
   {
      key: 'maintenances',
      label: 'Bakımlar',
      icon: WrenchIcon,
      tooltip: 'Bakımlar',
      path: routes.maintenances,
   },
   {
      key: 'settings',
      label: 'Ayarlar',
      icon: SettingsIcon,
      tooltip: 'Ayarlar',
      path: routes.settings,
   },
];