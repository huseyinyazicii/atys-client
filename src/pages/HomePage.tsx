import { Wrench, Building2, AlertTriangle, Wallet, TrendingUp } from 'lucide-react';

const HomePage = () => {
   const stats = [
      {
         title: 'Toplam Asansör',
         value: 128,
         icon: Building2,
         color: 'text-primary',
      },
      {
         title: 'Bu Ay Bakımı Yapılmayan',
         value: 12,
         icon: AlertTriangle,
         color: 'text-error',
      },
      {
         title: 'Bu Ay Toplanan Bakım',
         value: '₺245.000',
         icon: Wallet,
         color: 'text-success',
      },
      {
         title: 'Bu Ay Toplanacak Bakım',
         value: '₺78.000',
         icon: Wrench,
         color: 'text-warning',
      },
      {
         title: 'Bu Yıl Toplam Bakım',
         value: '₺1.420.000',
         icon: TrendingUp,
         color: 'text-info',
      },
   ];

   return (
      <div className='space-y-6'>
         {/* 🔹 PAGE TITLE */}
         <div>
            <h1 className='text-2xl font-semibold'>Genel Durum</h1>
            <p className='text-base-content/60'>Şirketinizin güncel bakım ve gelir durumu</p>
         </div>

         {/* 🔹 STAT CARDS */}
         <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4'>
            {stats.map((item) => {
               const Icon = item.icon;

               return (
                  <div
                     key={item.title}
                     className='card bg-base-100 shadow-sm border border-base-300'
                  >
                     <div className='card-body p-4'>
                        <div className='flex items-center justify-between'>
                           <div>
                              <p className='text-sm text-base-content/60'>{item.title}</p>
                              <p className='text-2xl font-bold mt-1'>{item.value}</p>
                           </div>

                           <div className={`p-3 rounded-lg bg-base-200 ${item.color}`}>
                              <Icon className='w-6 h-6' />
                           </div>
                        </div>
                     </div>
                  </div>
               );
            })}
         </div>

         {/* 🔹 SECOND ROW */}
         <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
            {/* ACTIVE / LATE */}
            <div className='card bg-base-100 border border-base-300'>
               <div className='card-body'>
                  <h2 className='card-title'>Bakım Durumu</h2>

                  <div className='space-y-4 mt-2'>
                     <div className='flex justify-between'>
                        <span>Aktif Bakım</span>
                        <span className='font-semibold text-success'>34</span>
                     </div>

                     <progress className='progress progress-success' value='34' max='50' />

                     <div className='flex justify-between'>
                        <span>Geciken Bakım</span>
                        <span className='font-semibold text-error'>5</span>
                     </div>

                     <progress className='progress progress-error' value='5' max='50' />
                  </div>
               </div>
            </div>

            {/* MONTHLY SUMMARY */}
            <div className='card bg-base-100 border border-base-300 lg:col-span-2'>
               <div className='card-body'>
                  <h2 className='card-title'>Bu Ay Özet</h2>

                  <div className='grid grid-cols-2 gap-4 mt-4'>
                     <div className='stat bg-base-200 rounded-lg'>
                        <div className='stat-title'>Yapılan Bakım</div>
                        <div className='stat-value text-primary'>86</div>
                     </div>

                     <div className='stat bg-base-200 rounded-lg'>
                        <div className='stat-title'>Planlanan Bakım</div>
                        <div className='stat-value'>98</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default HomePage;
