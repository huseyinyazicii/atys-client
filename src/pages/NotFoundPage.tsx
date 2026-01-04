import { Link } from 'react-router';

const NotFoundPage = () => {
   return (
      <div className='flex min-h-screen items-center justify-center bg-base-200 px-4'>
         <div className='card w-full max-w-md bg-base-100 shadow'>
            <div className='card-body items-center text-center'>
               <h1 className='text-6xl font-bold text-primary'>404</h1>

               <p className='mt-2 text-lg font-semibold'>Sayfa bulunamadı</p>

               <p className='text-sm text-base-content/70'>
                  Aradığınız sayfa silinmiş, taşınmış veya hiç var olmamış olabilir.
               </p>

               <div className='mt-6'>
                  <Link to='/' className='btn btn-primary'>
                     Anasayfaya dön
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default NotFoundPage;
