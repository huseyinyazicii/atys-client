import type { ColDef } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import { useMemo, useState } from 'react';
import useSystemStore from '../stores/useSystemStore';
import { getGridTheme } from '../utils/agGridUtils';

interface ITest {
   make: string;
   model: string;
   price: number;
   electric: boolean;
}

function MaintenanceListPage() {
   const theme = useSystemStore((state) => state.theme);

   const [rowData, setRowData] = useState<ITest[]>([
      { make: 'Tesla', model: 'Model Y', price: 64950, electric: true },
      { make: 'Ford', model: 'F-Series', price: 33850, electric: false },
      { make: 'Toyota', model: 'Corolla', price: 29600, electric: false },
   ]);

   const [colDefs, setColDefs] = useState<ColDef[]>([
      { field: 'make' },
      { field: 'model' },
      { field: 'price' },
      { field: 'electric' },
   ]);

   const gridTheme = useMemo(() => getGridTheme(theme), [theme]);

   return (
      <div style={{ height: 500 }}>
         <AgGridReact<ITest> theme={gridTheme} rowData={rowData} columnDefs={colDefs} />
      </div>
   );
}

export default MaintenanceListPage;
