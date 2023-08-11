import HomeButton from '@/components/homeButton';
import Header from '@/components/header';

export default function InformationLayout({ children }) {
  return (
    <section className='h-screen relative overflow-x-clip'>
      <div className='absolute w-12 right-0 mt-2 mr-6'>
        <HomeButton />
      </div>
      <Header />
      <div className='p-4'>{children}</div>
    </section>
  );
}
