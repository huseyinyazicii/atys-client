import { Link } from 'react-router';
import ThemeToggle from '../components/ThemeToggle';
import { routes } from '../constants/routes.constants';

function HeroPage() {
   return (
      <div className='min-h-screen bg-base-100'>
         <section className='hero min-h-screen'>
            <div className='absolute top-4 right-4 z-10'>
               <ThemeToggle />
            </div>
            <div className='hero-content text-center max-w-3xl'>
               <div>
                  <h1 className='text-5xl font-bold mb-6'>Asansör Yönetimi Artık Çok Daha Kolay</h1>

                  <p className='text-base-content/70 mb-8 leading-relaxed'>
                     ATYS ile bakım, montaj, stok, personel ve taşeron süreçlerinizi tek bir
                     platformdan yönetin. İşlerinizi sadeleştirin, operasyonel verimliliğinizi
                     artırın.
                  </p>

                  <div className='flex justify-center gap-4'>
                     <Link to={routes.login} className='btn btn-primary'>
                        Giriş Yap
                     </Link>

                     <Link to='/about' className='btn btn-outline'>
                        Daha Fazla Bilgi
                     </Link>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
}
export default HeroPage;
