import Image from 'next/image';

import filledStar from '@/images/Filled_Star.svg';
import emptyStar from '@/images/Empty_Star.svg';
import henna from '@/images/Henna.svg';

export default function Page() {
  const reviewsArray = [
    {
      starCount: 5,
      review:
        "Chandler's practice is always professional, therapuetic, and above all, invaluable when it comes to my physical and emotional wellbeing. Highly recommended.",
      name: 'BoDee Angus',
    },
    {
      starCount: 5,
      review:
        'Each visit is a transformative, restorative, and fullfilling experience. Chandler is a master in his craft.',
      name: 'Matthew Foster',
    },
  ];

  const addDividers = (array, divider) => {
    const result = [];
    array.forEach((item, index) => {
      result.push(item);
      if (index < array.length - 1) {
        result.push(divider);
      }
    });
    return result;
  };

  const Divider = () => <div className='h-1 w-full bg-white rounded-lg'></div>;

  const reviewItems = reviewsArray.map((item, index) => (
    <div key={index} className='flex flex-col items-center gap-2'>
      <div className='relative w-fit'>
        <div
          className='absolute flex overflow-x-hidden'
          style={{ width: `${item.starCount * 20}%` }}
        >
          <Image src={filledStar} alt='Star design.' />
          <Image src={filledStar} alt='Star design.' />
          <Image src={filledStar} alt='Star design.' />
          <Image src={filledStar} alt='Star design.' />
          <Image src={filledStar} alt='Star design.' />
        </div>
        <div className='flex'>
          <Image src={emptyStar} alt='Star design.' />
          <Image src={emptyStar} alt='Star design.' />
          <Image src={emptyStar} alt='Star design.' />
          <Image src={emptyStar} alt='Star design.' />
          <Image src={emptyStar} alt='Star design.' />
        </div>
      </div>
      <p className='text-md text-white text-center'>{item.review}</p>
      <h3 className='text-lg text-white'>-{item.name}</h3>
    </div>
  ));

  return (
    <>
      <div className='border-4 border-white rounded-xl p-2 bg-[#E4692E99]'>
        <div className='h-[80vh] overflow-y-auto p-3'>
          <div className='flex flex-col items-center gap-4'>
            {addDividers(reviewItems, <Divider key='divider' />)}
          </div>
        </div>
      </div>
      <div className='absolute top-20 -left-28 z-[-10] w-[40vh]'>
        <Image src={henna} alt='Intricate henna background design.' />
      </div>
      <div className='absolute bottom-20 -right-28 z-[-10] w-[40vh]'>
        <Image src={henna} alt='Intricate henna background design.' />
      </div>
    </>
  );
}
