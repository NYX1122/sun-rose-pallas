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
      <div className='bg-white h-fit py-3 px-14 flex flex-col items-center gap-3'>
        <div className='sm:w-96 md:w-96'>
          <Image
            alt='Owl holding a rose in talons.'
            src={orangeOwl}
            quality={100}
          ></Image>
        </div>
        <h1 className='text-2xl md:text-3xl text-peaceful-orange'>
          Sun Rose Pallas Healing
        </h1>
      </div>
      <div className='grow flex flex-col items-center justify-between mb-4'>
        <div className='w-full flex justify-evenly'>
          <Image
            className='w-8 md:w-10'
            alt='Leaf design.'
            src={leaf}
            quality={100}
          ></Image>
          <Image
            className='w-8 md:w-10'
            alt='Leaf design.'
            src={leaf}
            quality={100}
          ></Image>
          <Image
            className='w-8 md:w-10'
            alt='Leaf design.'
            src={leaf}
            quality={100}
          ></Image>
          <Image
            className='w-8 md:w-10'
            alt='Leaf design.'
            src={leaf}
            quality={100}
          ></Image>
          <Image
            className='w-8 md:w-10'
            alt='Leaf design.'
            src={leaf}
            quality={100}
          ></Image>
          <Image
            className='w-8 md:w-10'
            alt='Leaf design.'
            src={leaf}
            quality={100}
          ></Image>
          <Image
            className='hidden sm:block w-8 md:w-10'
            alt='Leaf design.'
            src={leaf}
            quality={100}
          ></Image>
          <Image
            className='hidden sm:block w-8 md:w-10'
            alt='Leaf design.'
            src={leaf}
            quality={100}
          ></Image>
          <Image
            className='hidden sm:block w-8 md:w-10'
            alt='Leaf design.'
            src={leaf}
            quality={100}
          ></Image>
          <Image
            className='hidden sm:block w-8 md:w-10'
            alt='Leaf design.'
            src={leaf}
            quality={100}
          ></Image>
        </div>
        <div className='min-h-[500px] grow flex flex-col items-center justify-evenly md:w-[85%] md:min-h-[750px]'>
          <div className='border-2 rounded-xl p-2 border-white mx-4 md:mx-20 md:border-4'>
            <p className='text-center text-white text-sm md:text-xl'>
              Come relax, recharge, and regroup at Sun Rose, where your physical
              and spiritual needs will be cared for. Allow us to help you
              connect with your universal soul, so you may find joy, peace, and
              health in everlasting wellness.
            </p>
          </div>
          <div className='h-fit relative flex items-center justify-center'>
            <div className='w-full absolute flex justify-center'>
              <Image
                className='w-[100%]'
                alt='Heart design.'
                src={heartFrame}
                quality={100}
              ></Image>
            </div>
            <div className='w-full flex justify-center'>
              <Image
                className='w-[78%]'
                alt='A massage table with an assortment of crystals laid on top.'
                src={slideShowOne}
                quality={100}
              ></Image>
            </div>
          </div>
          <div className='flex justify-center md:items-center'>
            <Image
              className='md:w-[250px]'
              alt='Sunflower design.'
              src={sunflower}
              quality={100}
            ></Image>
            <div className='flex flex-col items-center gap-1 md:flex-row md:flex-wrap md:justify-center md:gap-3 md:p-3'>
              {buttonArray.map((item, index) => (
                <Link href={item.url} key={index}>
                  <Button text={item.text} />
                </Link>
              ))}
            </div>
            <Image
              className='md:w-[250px]'
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
