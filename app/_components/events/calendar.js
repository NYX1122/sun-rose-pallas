'use client';

import { useState } from 'react';

import {
  getEventForDate,
  monthArray,
  weekDayArray,
} from '@/utilities/eventData';

import Image from 'next/image';
import Link from 'next/link';

import sunflowerLeaf from '@/images/Sunflower_Leaf.svg';

export default function Calendar() {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
  const firstDay = new Date(selectedYear, selectedMonth, 1).getDay();
  const rowsNumber = Math.ceil((firstDay + daysInMonth) / 7);
  const calendarArray = Array.from({ length: rowsNumber }, (_, weekIndex) => {
    const daysOfWeek = weekDayArray.map((dayName, dayIndex) => {
      const offsetDayIndex = weekIndex * 7 + dayIndex - firstDay;
      const dayNumber = offsetDayIndex + 1;
      if (dayNumber > 0 && dayNumber <= daysInMonth) {
        const event = getEventForDate(selectedYear, selectedMonth, dayNumber);
        return { identifier: dayNumber, event: event };
      } else {
        return {};
      }
    });

    return {
      week: weekIndex + 1,
      days: daysOfWeek,
    };
  });

  const nextMonth = () => {
    if (selectedMonth === 11) {
      setSelectedYear(selectedYear + 1);
      setSelectedMonth(0);
    } else {
      setSelectedMonth(selectedMonth + 1);
    }
  };

  const prevMonth = () => {
    if (selectedMonth === 0) {
      setSelectedYear(selectedYear - 1);
      setSelectedMonth(11);
    } else {
      setSelectedMonth(selectedMonth - 1);
    }
  };

  return (
    <>
      <div className='w-full grid grid-cols-3 py-3 md:py-5'>
        <button
          onClick={prevMonth}
          className='flex justify-center items-center'
        >
          <div className='rotate-[270deg]'>
            <Image
              src={sunflowerLeaf}
              alt='Sunflower leaf design.'
              className='drop-shadow-svg w-10 md:w-16'
            />
          </div>
        </button>
        <div className='flex flex-col items-center justify-center'>
          <h3 className='text-2xl text-white drop-shadow-visibility md:text-4xl'>
            {selectedYear}
          </h3>
          <h3 className='text-2xl text-white drop-shadow-visibility md:text-4xl'>
            {monthArray[selectedMonth]}
          </h3>
        </div>
        <button
          onClick={nextMonth}
          className='flex justify-center items-center'
        >
          <div className='rotate-90'>
            <Image
              src={sunflowerLeaf}
              alt='Sunflower leaf design.'
              className='drop-shadow-svg w-10 md:w-16'
            />
          </div>
        </button>
      </div>
      <div className='bg-white flex flex-col p-2 rounded-b-xl md:pb-3 px-3'>
        <div className='grid grid-cols-7 md:pb-2'>
          {weekDayArray.map((item, index) => (
            <div key={index}>
              <h4 className='text-2xl text-peaceful-orange text-center drop-shadow-visibilityOrange md:text-4xl'>
                {item[0]}
              </h4>
            </div>
          ))}
        </div>
        <div
          className='grid'
          style={{
            gridTemplateRows: `repeat(${calendarArray.length}, minmax(0, 1fr))`,
          }}
        >
          {calendarArray.map((week, weekIndex) => (
            <div key={weekIndex} className='grid grid-cols-7'>
              {week.days.map((day, dayIndex) =>
                day.event ? (
                  <Link
                    className='m-1'
                    key={dayIndex}
                    href={`/information/events/${selectedMonth + 1}-${
                      day.identifier
                    }-${selectedYear}`}
                  >
                    <button className='w-full'>
                      {day.identifier === 1 ? (
                        <div
                          className='border-2 border-peaceful-orange bg-peaceful-orange bg-rounded-lg px-1 shadow-eventDay'
                          style={{
                            gridColumnStart: firstDay + 1,
                          }}
                        >
                          <p className='text-center text-white text-2xl whitespace-nowrap md:text-4xl'>
                            {day.identifier}
                          </p>
                        </div>
                      ) : (
                        day.identifier && (
                          <div className='border-2 border-peaceful-orange bg-peaceful-orange rounded-lg px-1 shadow-eventDay'>
                            <p className='text-center text-white text-2xl whitespace-nowrap md:text-4xl'>
                              {day.identifier}
                            </p>
                          </div>
                        )
                      )}
                    </button>
                  </Link>
                ) : day.identifier === 1 ? (
                  <div
                    key={dayIndex}
                    className='border-2 border-peaceful-orange rounded-lg m-1 px-1'
                    style={{
                      gridColumnStart: firstDay + 1,
                    }}
                  >
                    <p className='text-center text-peaceful-orange text-2xl whitespace-nowrap md:text-4xl'>
                      {day.identifier}
                    </p>
                  </div>
                ) : (
                  day.identifier && (
                    <div
                      key={dayIndex}
                      className='border-2 border-peaceful-orange rounded-lg m-1 px-1'
                    >
                      <p className='text-center text-peaceful-orange text-2xl whitespace-nowrap md:text-4xl'>
                        {day.identifier}
                      </p>
                    </div>
                  )
                )
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
