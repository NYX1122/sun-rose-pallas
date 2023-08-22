'use client';

import { useSelectedLayoutSegment } from 'next/navigation';
import Image from 'next/image';

import henna from '@/images/Henna.svg';
import sunflowerBackground from '@/images/Sunflower_Background.svg';

export default function Background({ children }) {
  const segment = useSelectedLayoutSegment();

  return segment === 'about' ? (
    <div className='p-4 flex justify-center grow overflow-hidden md:relative md:mt-5'>
      <div className='hidden md:block md:absolute z-[-10] w-[150vw]'>
        <Image
          className='w-full'
          src={sunflowerBackground}
          alt='Intricate sunflower background design.'
        />
      </div>
      {children}
    </div>
  ) : segment === 'services' ? (
    <div className='p-4 flex justify-center grow md:overflow-hidden md:relative md:mt-5'>
      <div className='hidden md:block md:absolute z-[-10] w-[150vw] h-full'>
        <Image
          className='w-full'
          src={sunflowerBackground}
          alt='Intricate sunflower background design.'
        />
      </div>
      {children}
    </div>
  ) : segment === 'reviews' ? (
    <div className='p-4 md:flex md:justify-center md:mt-5 relative'>
      <div className='absolute top-20 -left-28 z-[-10] w-[40vh]'>
        <Image src={henna} alt='Intricate henna background design.' />
      </div>
      <div className='absolute bottom-20 -right-28 z-[-10] w-[40vh]'>
        <Image src={henna} alt='Intricate henna background design.' />
      </div>
      {children}
    </div>
  ) : segment === 'events' ? (
    <div className='p-4 flex justify-center relative grow overflow-hidden md:mt-5'>
      <div className='absolute z-[-10] w-[150vw] h-full'>
        <Image
          className='w-full'
          src={sunflowerBackground}
          alt='Intricate sunflower background design.'
        />
      </div>
      {children}
    </div>
  ) : (
    segment === 'location' && (
      <div className='p-4 flex justify-center relative grow overflow-hidden md:mt-5'>
        <div className='absolute z-[-10] w-[150vw] h-full'>
          <Image
            className='w-full'
            src={sunflowerBackground}
            alt='Intricate sunflower background design.'
          />
        </div>
        {children}
      </div>
    )
  );
}
