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
import henna from '@/images/Henna.svg';

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

  const linkArray = [{ title: 'Back', href: '/information/events' }];

  const designDecider = (event) => {
    if (event.name) {
      return event.name.includes('Full Moon') ? fullMoonEvent : newMoonEvent;
    } else {
      return event.event.name.includes('Universal') ? sunEvent : heartEvent;
    }
  };

  return (
    <div className='pt-3 relative overflow-hidden'>
      <div className='absolute w-48 -right-28 -top-24'>
        <Image src={henna} alt='Beautiful henna graphic' />
      </div>
      <div className='absolute w-48 -left-28 -top-24'>
        <Image src={henna} alt='Beautiful henna graphic' />
      </div>
      <div className='flex flex-col items-center gap-3 pb-3'>
        <h2 className='text-white text-sm text-center'>{formattedDate}</h2>
        <div className='border-2 p-4'>
          <Image src={designDecider(event)} alt='Astral design.' />
        </div>
        <h1 className='text-white text-xl'>
          {event.name ? event.name : event.event.name}
        </h1>
      </div>
      <div
        style={{ maxHeight: parentHeight }}
        className='p-2 overflow-y-auto outline outline-4 outline-white rounded-t-2xl rounded-b-lg bg-[#00000025] flex flex-col gap-2'
        ref={parentRef}
      >
        <div className='overflow-y-auto p-1 flex flex-col gap-2'>
          <p className='text-white text-center text-sm' ref={childRef}>
            {event.event.shortDescription}
          </p>

          {event.event.longDescriptions.map((item, index) => (
            <p key={index} className='text-white text-center text-sm'>
              {item}
            </p>
          ))}

          <p className='text-white text-center text-sm'>
            {event.event.contact}
          </p>
          <p className='text-white text-center text-sm'>{event.event.price}</p>
        </div>
      </div>
      <div className='flex justify-center pt-3 pb-2'>
        {linkArray.map((item, index) => (
          <Link href={item.href} key={index}>
            <Button text={item.title} />
          </Link>
        ))}
      </div>
    </div>
  );
}
