import { BrowserRouter, Route, Routes } from 'react-router';
import DashboardLayout from './components/layouts/DashboardLayout';
import { routes } from './constants/routes.constants';

import AdminLayout from './components/layouts/AdminLayout';
import ElevatorListPage from './pages/ElevatorListPage';
import HeroPage from './pages/HeroPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import MaintenanceListPage from './pages/MaintenanceListPage';
import NotFoundPage from './pages/NotFoundPage';
import SettingsPage from './pages/SettingsPage';

import AdminHomePage from './pages/admin/AdminHomePage';
import RolesPage from './pages/admin/RolesPage';

function Router() {
   return (
      <BrowserRouter>
         <Routes>
            <Route index element={<HeroPage />} />
            <Route path={routes.login} element={<LoginPage />} />

            <Route element={<DashboardLayout />}>
               <Route path={routes.home} element={<HomePage />} />
               <Route path={routes.elevators} element={<ElevatorListPage />} />
               <Route path={routes.maintenances} element={<MaintenanceListPage />} />
               <Route path={routes.settings} element={<SettingsPage />} />
            </Route>

            <Route element={<AdminLayout />}>
               <Route path={routes.adminHome} element={<AdminHomePage />} />
               <Route path={routes.adminRoles} element={<RolesPage />} />
            </Route>

            <Route path='*' element={<NotFoundPage />} />
         </Routes>
      </BrowserRouter>
   );
}

export default Router;
