export const routes = {
   home: '/home',
   login: '/login',
   settings: '/settings',
   elevators: '/elevators',
   elevatorsDetail: '/elevators/:id',
   maintenances: '/maintenances',
} as const;

export const route = {
   elevatorDetail: (id: string | number) => `${routes.elevators}/${id}`,
};
