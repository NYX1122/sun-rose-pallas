import Image from 'next/image';

import orangeOwl from '@/images/orange_owl.jpg';

export default function Home() {
  return (
    <main>
      <div className='bg-white w-screen h-fit p-3 flex flex-col items-center gap-3'>
        <Image alt='Owl holding a rose in talons.' src={orangeOwl}></Image>
        <h1 className='text-2xl'>Sun Rose Pallas Healing</h1>
      </div>
      <div></div>
    </main>
  );
}
