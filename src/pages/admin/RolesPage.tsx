import type { ColDef } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import { PencilIcon, PlusIcon, Trash2Icon } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import SystemConstants from '../../constants/system.constants';
import { useToast } from '../../contexts/toast.context';
import RoleService from '../../services/role.service';
import useSystemStore from '../../stores/useSystemStore';
import type { RoleModel } from '../../types/role.model';
import { getGridTheme } from '../../utils/agGridUtils';
import SystemUtils from '../../utils/system.utils';
import Dialog from '../../components/ui/Dialog';

function RolesPage() {
   const theme = useSystemStore((state) => state.theme);
   const { showToast } = useToast();

   const [rowData, setRowData] = useState<RoleModel[]>([]);
   const [isRoleModalOpen, setIsRoleModalOpen] = useState(false);
   const [roleName, setRoleName] = useState('');
   const [selectedRole, setSelectedRole] = useState<RoleModel | null>(null);

   const gridTheme = useMemo(() => getGridTheme(theme), [theme]);

   const colDefs = useMemo<ColDef<RoleModel>[]>(
      () => [
         { field: 'id', headerName: 'ID', width: 300, sortable: true, filter: true },
         { field: 'name', headerName: 'Role Adı', flex: 1, sortable: true, filter: true },
         {
            headerName: '',
            width: 100,
            cellRenderer: (params: any) => {
               const role = params.data as RoleModel;

               return (
                  <div className='flex items-center justify-center h-full gap-2'>
                     <button className='btn btn-xs btn-warning' onClick={() => openRoleModal(role)}>
                        <PencilIcon size={14} />
                     </button>

                     <button
                        className='btn btn-xs btn-error'
                        onClick={() => handleDeleteRole(role.id)}
                     >
                        <Trash2Icon size={14} />
                     </button>
                  </div>
               );
            },
         },
      ],
      [theme]
   );

   useEffect(() => {
      getRoleData();
   }, []);

   const getRoleData = async () => {
      try {
         const roles = await RoleService.get();
         setRowData(roles);
      } catch (error) {
         showToast(SystemUtils.getApiErrorMessage(error), 'error');
      }
   };

   const openRoleModal = (role: RoleModel | null = null) => {
      setSelectedRole(role);
      setRoleName(role?.name || '');
      setIsRoleModalOpen(true);
   };

   const handleSaveRole = async () => {
      try {
         if (selectedRole) {
            await RoleService.update({ id: selectedRole.id, name: roleName });
            showToast('Rol güncellendi', 'success');
         } else {
            await RoleService.create({ name: roleName });
            showToast('Rol eklendi', 'success');
         }

         setIsRoleModalOpen(false);
         getRoleData();
      } catch (error) {
         showToast(SystemUtils.getApiErrorMessage(error), 'error');
      }
   };

   const handleDeleteRole = async (roleId: string) => {
      if (!confirm('Bu rolü silmek istediğinize emin misiniz?')) return;

      try {
         await RoleService.delete(roleId);
         showToast('Rol silindi', 'success');
         getRoleData();
      } catch (error) {
         showToast(SystemUtils.getApiErrorMessage(error), 'error');
      }
   };

   return (
      <>
         <div className='flex justify-end mb-2'>
            <button className='btn btn-sm btn-primary' onClick={() => openRoleModal()}>
               <PlusIcon size={16} /> Rol Ekle
            </button>
         </div>

         <div
            style={{
               minHeight: 400,
               height: `calc(100vh - ${SystemConstants.ContentHeightCalc + 40}px)`,
            }}
         >
            <AgGridReact<RoleModel> theme={gridTheme} rowData={rowData} columnDefs={colDefs} />
         </div>

         <Dialog isOpen={isRoleModalOpen} onClose={() => setIsRoleModalOpen(false)}>
            <h3 className='font-bold text-lg'>{selectedRole ? 'Rol Güncelle' : 'Rol Ekle'}</h3>

            <input
               type='text'
               className='input input-bordered w-full mt-4'
               placeholder='Rol adı'
               value={roleName}
               onChange={(e) => setRoleName(e.target.value)}
            />

            <div className='modal-action'>
               <button className='btn' onClick={() => setIsRoleModalOpen(false)}>
                  İptal
               </button>
               <button className='btn btn-primary' onClick={handleSaveRole}>
                  Kaydet
               </button>
            </div>
         </Dialog>
      </>
   );
}

export default RolesPage;
