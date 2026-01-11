export const routes = {
   login: '/login',

   // user routes
   home: '/home',
   settings: '/settings',
   elevators: '/elevators',
   elevatorsDetail: '/elevators/:id',
   maintenances: '/maintenances',

   // admin routes
   adminHome: '/admin/home',
   adminRoles: '/admin/roles',
} as const;

export const route = {
   elevatorDetail: (id: string | number) => `${routes.elevators}/${id}`,
};
