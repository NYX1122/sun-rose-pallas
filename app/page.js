import Image from 'next/image';
import Link from 'next/link';

import Button from '@/components/button';

import orangeOwl from '@/images/Orange_Owl.jpg';
import leaf from '@/images/Leaf.svg';
import slideShowOne from '@/images/Slideshow-1.png';
import heartFrame from '@/images/Heart_Frame.svg';
import sunflower from '@/images/Sunflower.svg';

export default function Home() {
  const buttonArray = [
    { text: 'About Me', url: '/information/about' },
    { text: 'Services', url: '/information/services' },
    { text: 'Reviews', url: '/information/reviews' },
    { text: 'Events', url: '/information/events' },
    { text: 'Location', url: '/information/location' },
  ];

  return (
    <main className='h-screen flex flex-col'>
      <div className='bg-white w-screen h-fit py-3 px-14 flex flex-col items-center gap-3'>
        <Image
          alt='Owl holding a rose in talons.'
          src={orangeOwl}
          quality={100}
        ></Image>
        <h1 className='text-2xl text-peaceful-orange'>
          Sun Rose Pallas Healing
        </h1>
      </div>
      <div className='min-h-[500px] grow flex flex-col items-center justify-between mb-4'>
        <div className='w-screen flex justify-evenly'>
          <Image alt='Leaf design.' src={leaf} quality={100}></Image>
          <Image alt='Leaf design.' src={leaf} quality={100}></Image>
          <Image alt='Leaf design.' src={leaf} quality={100}></Image>
          <Image alt='Leaf design.' src={leaf} quality={100}></Image>
          <Image alt='Leaf design.' src={leaf} quality={100}></Image>
        </div>
        <div className='grow flex flex-col items-center justify-evenly'>
          <div className='h-fit max-w-sm relative flex items-center'>
            <div className='absolute'>
              <Image alt='Heart design.' src={heartFrame} quality={100}></Image>
            </div>
            <div className='h-fit px-8'>
              <Image
                alt='A massage table with an assortment of crystals laid on top.'
                src={slideShowOne}
                quality={100}
              ></Image>
            </div>
          </div>
          <div className='flex justify-center'>
            <Image
              alt='Sunflower design.'
              src={sunflower}
              quality={100}
            ></Image>
            <div className='flex flex-col items-center'>
              {buttonArray.map((item) => (
                <Link href={item.url}>
                  <Button text={item.text} />
                </Link>
              ))}
            </div>
            <Image
              alt='Sunflower design.'
              src={sunflower}
              quality={100}
            ></Image>
          </div>
        </div>
      </div>
    </main>
  );
}
