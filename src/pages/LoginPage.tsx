import ThemeToggle from '../components/ThemeToggle';

function LoginPage() {
   return (
      <div className='min-h-screen grid grid-cols-1 lg:grid-cols-2'>
         {/* 🔹 THEME TOGGLE */}
         <div className='absolute top-4 right-4 z-10'>
            <ThemeToggle />
         </div>

         {/* 🔹 LEFT SIDE */}
         <div className='hidden lg:flex flex-col justify-center px-16 bg-base-200'>
            <h1 className='text-4xl font-bold mb-4'>ATYS</h1>
            <p className='text-base-content/70 leading-relaxed'>
               Asansör firmalarının bakım, montaj, stok ve personel süreçlerini tek bir platformdan
               kolayca yönetmesini sağlayan modern bir takip sistemi.
            </p>
         </div>

         {/* 🔹 RIGHT SIDE */}
         <div className='flex items-center justify-center px-6'>
            <div className='w-full max-w-md'>
               <h2 className='text-2xl font-semibold mb-2'>Giriş Yap</h2>
               <p className='text-sm text-base-content/60 mb-6'>
                  Hesabınıza giriş yaparak devam edin
               </p>

               <form className='space-y-4'>
                  <div>
                     <label className='label'>
                        <span className='label-text'>E-posta</span>
                     </label>
                     <input
                        type='email'
                        placeholder='ornek@firma.com'
                        className='input input-bordered w-full'
                     />
                  </div>

                  <div>
                     <label className='label'>
                        <span className='label-text'>Şifre</span>
                     </label>
                     <input
                        type='password'
                        placeholder='••••••••'
                        className='input input-bordered w-full'
                     />
                  </div>

                  <button className='btn btn-primary w-full mt-4'>Giriş Yap</button>
               </form>

               <p className='text-xs text-base-content/60 mt-6 text-center'>
                  © {new Date().getFullYear()} ATYS. Tüm hakları saklıdır.
               </p>
            </div>
         </div>
      </div>
   );
}

export default LoginPage;
