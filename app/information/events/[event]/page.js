'use client';

import { useRef, useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import Button from '@/components/button';

import { getEventForDate, monthArray } from '@/utilities/eventData';

import sunEvent from '@/images/Sun_Event.svg';
import heartEvent from '@/images/Heart_Event.svg';
import fullMoonEvent from '@/images/Full_Moon_Event.svg';
import newMoonEvent from '@/images/New_Moon_Event.svg';

export default function Page({ params }) {
  const childRef = useRef(null);
  const parentRef = useRef(null);
  const [parentHeight, setParentHeight] = useState(0);

  useEffect(() => {
    const calculateHeight = () => {
      if (childRef.current && parentRef.current) {
        const childHeight = childRef.current.offsetHeight;

        const parentStyle = window.getComputedStyle(parentRef.current);
        const parentPaddingTop = parseFloat(parentStyle.paddingTop) || 0;
        const parentPaddingBottom = parseFloat(parentStyle.paddingBottom) || 0;
        const parentGap = parseFloat(parentStyle.gap) || 0;

        const totalHeight =
          childHeight + parentPaddingTop + parentPaddingBottom + parentGap;

        setParentHeight(`${totalHeight}px`);
      }
    };

    const timeoutId = setTimeout(calculateHeight, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    function handleResize() {
      if (childRef.current && parentRef.current) {
        const childHeight = childRef.current.offsetHeight;

        const parentStyle = window.getComputedStyle(parentRef.current);
        const parentPaddingTop = parseFloat(parentStyle.paddingTop) || 0;
        const parentPaddingBottom = parseFloat(parentStyle.paddingBottom) || 0;
        const parentGap = parseFloat(parentStyle.gap) / 2 || 0;

        const totalHeight =
          childHeight + parentPaddingTop + parentPaddingBottom + parentGap;

        setParentHeight(`${totalHeight}px`);
      }
    }

    window.addEventListener('resize', handleResize);

    // Don't forget to remove the listener when the component unmounts
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [month, day, year] = params.event.split('-').map(Number);

  const event = getEventForDate(year, month - 1, day);

  const getOrdinalSuffix = (num) => {
    if (num >= 11 && num <= 13) {
      return 'th';
    }
    switch (num % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  };

  const formattedDate = `${monthArray[month - 1]} ${day}${getOrdinalSuffix(
    day
  )}, ${event.time}`;

  const linkArray = [
    { title: 'Back', href: '/information/events' },
    {
      title: 'Tickets',
      href: 'https://chandlera8uf.setmore.com/chandlerreddington/bookclass',
    },
  ];

  const designDecider = (event) => {
    if (event.name) {
      return event.name.includes('Full Moon') ? fullMoonEvent : newMoonEvent;
    } else {
      return event.event.name.includes('Universal') ? sunEvent : heartEvent;
    }
  };

  return (
    <div className='p-3 flex flex-col gap-3 md:p-6 md:gap-6'>
      <div className='flex flex-col items-center gap-3 md:gap-6'>
        <h2 className='text-white text-lg text-center drop-shadow-visibility md:text-2xl'>
          {formattedDate}
        </h2>
        <div className='border-2 border-white p-4 md:border-4'>
          <Image
            src={designDecider(event)}
            alt='Astral design.'
            className='drop-shadow-svg md:w-40'
          />
        </div>
        <h1 className='text-white text-xl drop-shadow-visibility md:text-4xl'>
          {event.name ? event.name : event.event.name}
        </h1>
      </div>
      <div
        style={{ maxHeight: parentHeight }}
        className='p-2 overflow-y-auto rounded-xl bg-black/50 flex flex-col shadow-container md:p-3'
        ref={parentRef}
      >
        <div className='overflow-y-auto p-1 flex flex-col gap-2'>
          <p
            className='text-white text-center text-sm md:text-lg'
            ref={childRef}
          >
            {event.event.shortDescription}
          </p>

          {event.event.longDescriptions.map((item, index) => (
            <p
              key={index}
              className='text-white text-center text-sm md:text-lg'
            >
              {item}
            </p>
          ))}

          <p className='text-white text-center text-sm md:text-lg'>
            {event.event.contact}
          </p>
          <p className='text-white text-center text-sm md:text-lg'>
            {event.event.price}
          </p>
        </div>
      </div>
      <div className='flex gap-3 justify-center'>
        {linkArray.map((item, index) => (
          <Link href={item.href} key={index}>
            <Button text={item.title} />
          </Link>
        ))}
      </div>
    </div>
  );
}
