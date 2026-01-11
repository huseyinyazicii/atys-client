import type { CreateRoleRequest, RoleModel, UpdateRoleRequest } from '../types/role.model';
import { del, get, post, put } from './base/api-client';

const baseUrl = '/roles';

const RoleService = {
    create: (request: CreateRoleRequest) => post<string, CreateRoleRequest>(`${baseUrl}`, request),
    get: () => get<RoleModel[]>(`${baseUrl}`),
    update: (request: UpdateRoleRequest) => put<string, UpdateRoleRequest>(`${baseUrl}`, request),
    delete: (roleId: string) => del<string>(`${baseUrl}/${roleId}`),
};

export default RoleService;