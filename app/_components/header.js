'use client';

import { useSelectedLayoutSegment } from 'next/navigation';

export default function Header() {
  const segment = useSelectedLayoutSegment();

  return (
    <div className='w-fill text-center pt-10'>
      <h1 className='text-3xl text-white'>
        {segment === 'about'
          ? 'About Me'
          : segment === 'services'
          ? 'Services'
          : segment === 'reviews'
          ? 'Reviews'
          : segment === 'events'
          ? 'Events'
          : 'Location'}
      </h1>
    </div>
  );
}
