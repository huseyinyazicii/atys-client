export interface RoleModel {
   id: string;
   name: string;
}

// Request Types
export interface CreateRoleRequest {
   name: string;
}

export interface UpdateRoleRequest {
   id: string;
   name: string;
}