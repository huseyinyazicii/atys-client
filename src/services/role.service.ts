
import type { CreateRoleRequest, RoleModel } from '../types/role.model';
import { get, post } from './base/api-client';

const baseUrl = '/roles';

const RoleService = {
    createRoleService: (request: CreateRoleRequest) => post<string, CreateRoleRequest>(`${baseUrl}`, request),
    getRolesService: () => get<RoleModel[]>(`${baseUrl}`),
};

export default RoleService;