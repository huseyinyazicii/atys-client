import { Eye } from 'lucide-react';
import { useState } from 'react';

const elevators = [
   {
      id: 1,
      code: 'ATY-001',
      building: 'Yıldız Apartmanı',
      lastMaintenance: '2025-02-12',
      status: 'active',
   },
   {
      id: 2,
      code: 'ATY-002',
      building: 'Güneş Sitesi',
      lastMaintenance: '2024-12-05',
      status: 'overdue',
   },
   {
      id: 3,
      code: 'ATY-002',
      building: 'Güneş Sitesi',
      lastMaintenance: '2024-12-05',
      status: 'overdue',
   },
   {
      id: 4,
      code: 'ATY-002',
      building: 'Güneş Sitesi',
      lastMaintenance: '2024-12-05',
      status: 'overdue',
   },
   {
      id: 5,
      code: 'ATY-002',
      building: 'Güneş Sitesi',
      lastMaintenance: '2024-12-05',
      status: 'overdue',
   },
   {
      id: 6,
      code: 'ATY-002',
      building: 'Güneş Sitesi',
      lastMaintenance: '2024-12-05',
      status: 'overdue',
   },
   {
      id: 7,
      code: 'ATY-002',
      building: 'Güneş Sitesi',
      lastMaintenance: '2024-12-05',
      status: 'overdue',
   },
   {
      id: 8,
      code: 'ATY-002',
      building: 'Güneş Sitesi',
      lastMaintenance: '2024-12-05',
      status: 'overdue',
   },
   {
      id: 9,
      code: 'ATY-002',
      building: 'Güneş Sitesi',
      lastMaintenance: '2024-12-05',
      status: 'overdue',
   },
   {
      id: 10,
      code: 'ATY-002',
      building: 'Güneş Sitesi',
      lastMaintenance: '2024-12-05',
      status: 'overdue',
   },
   {
      id: 11,
      code: 'ATY-002',
      building: 'Güneş Sitesi',
      lastMaintenance: '2024-12-05',
      status: 'overdue',
   },
   {
      id: 12,
      code: 'ATY-002',
      building: 'Güneş Sitesi',
      lastMaintenance: '2024-12-05',
      status: 'overdue',
   },
   {
      id: 13,
      code: 'ATY-002',
      building: 'Güneş Sitesi',
      lastMaintenance: '2024-12-05',
      status: 'overdue',
   },
   {
      id: 14,
      code: 'ATY-002',
      building: 'Güneş Sitesi',
      lastMaintenance: '2024-12-05',
      status: 'overdue',
   },
];

const statusMap = {
   active: {
      label: 'Bakım Yapıldı',
      class: 'badge-success',
   },
   due: {
      label: 'Bakım Yaklaşıyor',
      class: 'badge-warning',
   },
   overdue: {
      label: 'Bakım Gecikti',
      class: 'badge-error',
   },
};

function ElevatorListPage() {
   const [search, setSearch] = useState('');

   const [data, setData] = useState([]);
   const [page, setPage] = useState(1);
   const [pageSize] = useState(10);

   const filtered = elevators.filter(
      (e) =>
         e.code.toLowerCase().includes(search.toLowerCase()) ||
         e.building.toLowerCase().includes(search.toLowerCase())
   );

   return (
      <div>
         <input
            type='text'
            placeholder='Asansör ara...'
            className='input input-bordered'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
         />

         <div className='overflow-x-auto bg-base-100 border border-base-300 rounded-lg'>
            <table className='table table-zebra w-full'>
               <thead>
                  <tr>
                     <th>Kod</th>
                     <th>Bina</th>
                     <th>Son Bakım</th>
                     <th>Durum</th>
                     <th className='text-right'>Aksiyon</th>
                  </tr>
               </thead>

               <tbody>
                  {filtered.map((e) => (
                     <tr key={e.id}>
                        <td className='font-medium'>{e.code}</td>
                        <td>{e.building}</td>
                        <td>{e.lastMaintenance}</td>
                        <td>
                           <span className={`badge ${statusMap[e.status].class}`}>
                              {statusMap[e.status].label}
                           </span>
                        </td>
                        <td className='text-right'>
                           <button className='btn btn-sm btn-ghost'>
                              <Eye className='w-4 h-4' />
                           </button>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
         <div className='join'>
            <button
               className={`join-item btn ${page === 1 && 'btn-disabled'}`}
               onClick={() => setPage((prev) => prev - 1)}
            >
               «
            </button>
            <button className='join-item btn'>Page {page}</button>
            <button
               className={`join-item btn ${page === (filtered.length / pageSize) && 'btn-disabled'}`}
               onClick={() => setPage((prev) => prev + 1)}
            >
               »
            </button>
         </div>
      </div>
   );
}

export default ElevatorListPage;
