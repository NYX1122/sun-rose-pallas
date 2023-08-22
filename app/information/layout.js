import HomeButton from '@/components/homeButton';
import Header from '@/components/header';
import Background from '@/components/background';

export default function InformationLayout({ children }) {
  return (
    <section className='h-screen relative overflow-x-hidden flex flex-col'>
      <div className='absolute w-12 right-0 mt-5 mr-5 md:w-20 md:mt-8 md:mr-8'>
        <HomeButton />
      </div>
      <Header />
      <Background>{children}</Background>
    </section>
  );
}
