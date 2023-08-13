'use client';

import { useState } from 'react';

import Image from 'next/image';

import sunflowerLeaf from '@/images/Sunflower_Leaf.svg';

export default function Calendar() {
  const monthArray = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const weekDayArray = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
  const firstDay = new Date(selectedYear, selectedMonth, 1).getDay();
  const rowsNumber = Math.ceil((firstDay + daysInMonth) / 7);
  const calendarArray = Array.from({ length: rowsNumber }, (_, weekIndex) => {
    const daysOfWeek = weekDayArray.map((dayName, dayIndex) => {
      const offsetDayIndex = weekIndex * 7 + dayIndex - firstDay;
      const dayNumber = offsetDayIndex + 1;
      return dayNumber > 0 && dayNumber <= daysInMonth && dayNumber;
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
    <div className='w-full border-4 border-white rounded-xl flex flex-col'>
      <div className='w-full grid grid-cols-3 py-3'>
        <button onClick={prevMonth} className='flex justify-center'>
          <div className='rotate-[270deg] w-10'>
            <Image src={sunflowerLeaf} alt='Sunflower leaf design.' />
          </div>
        </button>
        <div className='flex flex-col items-center'>
          <h3 className='text-2xl text-white'>{selectedYear}</h3>
          <h3 className='text-2xl text-white'>{monthArray[selectedMonth]}</h3>
        </div>
        <button onClick={nextMonth} className='flex justify-center'>
          <div className='rotate-90 w-10'>
            <Image src={sunflowerLeaf} alt='Sunflower leaf design.' />
          </div>
        </button>
      </div>
      <div className='bg-white flex flex-col'>
        <div className='grid grid-cols-7 pt-2'>
          {weekDayArray.map((item, index) => (
            <div key={index}>
              <h4 className='text-2xl text-peaceful-orange text-center'>
                {item[0]}
              </h4>
            </div>
          ))}
        </div>
        <div className='grid grid-rows-5'>
          {calendarArray.map((week, weekIndex) => (
            <div key={weekIndex} className='grid grid-cols-7'>
              {week.days.map((day, dayIndex) =>
                day === 1 ? (
                  <div
                    key={dayIndex}
                    className='border-2 border-peaceful-orange rounded-lg m-1 px-1'
                    style={{ gridColumnStart: firstDay + 1 }}
                  >
                    <p className='text-center text-peaceful-orange text-2xl whitespace-nowrap'>
                      {day}
                    </p>
                  </div>
                ) : (
                  day && (
                    <div
                      key={dayIndex}
                      className='border-2 border-peaceful-orange rounded-lg m-1 px-1'
                    >
                      <p className='text-center text-peaceful-orange text-2xl whitespace-nowrap'>
                        {day}
                      </p>
                    </div>
                  )
                )
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
