const events = {
  ninetyMinuteStandardEvent: {
    name: 'Universal Soul',
    shortDescription:
      'Join me as I hold space for you to connect with your infinite-universal soul. This energy allows you to truly recharge, heal, and let go of what no longer serves you or your life path. Realize what is within you, shed the negativity away, and allow yourself to truly re-connect as you consciously be in the moment for a change.',
    longDescriptions: [
      'During this 90 minute event, there will be: a guided energy discussion, intuitive group card reading, and guided meditation. We will end the event with drumming followed by a soul-connecting sound bath. Each week will have a different theme, and message; always depending on what the universe is guiding me to bring attention to for the collective. Join me on a journey of reflection, growth, and healing. I look forward to connecting with you.',
      'This is welcome to everyone, regardless of "level", or age. All I ask is that you come with an open heart and mind.',
      'If you are a bit newer with sound baths and the metaphysical world, I do have a shorter event available that would be a perfect fit for the curious. It is the "Recharge your Soul" event. More information on that event can be found online or on social media. Trust yourself and where you must be.',
    ],
    price: 'Self-Investment of $33 to participate.',
    contact:
      'Please reach out to snag a spot as space is very limited. Please contact Chandler at (801) 636-4648, or on Instagram/Facebook @Sun_rose_pallas_healing for ticket availability. Thank you, and I hope you have a beautiful day!',
  },
  sixtyMinuteStandardEvent: {
    name: 'Recharge your Soul',
    shortDescription:
      'Join me for recharging and healing. Allow yourself the moment to take a conscious breath, relax, and become prepared again for the week ahead! During this one-hour event, I will energetically hold the space for you to reflect and release as I intuitively play my crystal sound bowls.',
    longDescriptions: [
      ' Each bowl has a unique sound connecting with the different frequencies of our chakras; accessing your universal-self, and allowing yourself to connect on a deeper spiritual and physical level of healing and grounding. We will have a brief energy discussion before letting ourselves tap into the energy of these sound bowls, and the infinite-soul within.',
    ],
    price: 'Self-Investment of $15 to participate.',
    contact:
      'Please reach out to snag a spot as space is very limited. Please contact Chandler at (801) 636-4648, or on Instagram/Facebook @Sun_rose_pallas_healing for ticket availability. Thank you, and I hope you have a beautiful day!',
  },
};

export const monthArray = [
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

export const weekDayArray = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export const eventsArray = [
  {
    year: 2023,
    months: [
      {
        month: 'January',
        events: [
          {
            date: 4,
            time: '7:00 PM',
            duration: 90,
            event: events.ninetyMinuteStandardEvent,
          },
          {
            date: 11,
            time: '7:00 PM',
            duration: 60,
            event: events.sixtyMinuteStandardEvent,
          },
        ],
      },
      {
        month: 'February',
        events: [],
      },
      {
        month: 'March',
        events: [],
      },
      {
        month: 'April',
        events: [],
      },
      {
        month: 'May',
        events: [],
      },
      {
        month: 'June',
        events: [],
      },
      {
        month: 'July',
        events: [],
      },
      {
        month: 'August',
        events: [
          {
            date: 4,
            time: '7:00 PM',
            duration: 90,
            event: events.ninetyMinuteStandardEvent,
          },
          {
            date: 11,
            time: '7:00 PM',
            duration: 60,
            event: events.sixtyMinuteStandardEvent,
          },
          {
            name: 'New Moon in Leo',
            date: 16,
            time: '7:00 PM',
            duration: 90,
            event: events.ninetyMinuteStandardEvent,
          },
          {
            date: 25,
            time: '7:00 PM',
            duration: 60,
            event: events.sixtyMinuteStandardEvent,
          },
          {
            name: 'Full Moon in Pisces',
            date: 30,
            time: '7:00 PM',
            duration: 90,
            event: events.ninetyMinuteStandardEvent,
          },
        ],
      },
      {
        month: 'September',
        events: [
          {
            date: 8,
            time: '7:00 PM',
            duration: 60,
            event: events.sixtyMinuteStandardEvent,
          },
          {
            name: 'New Moon in Virgo',
            date: 15,
            time: '7:00 PM',
            duration: 90,
            event: events.ninetyMinuteStandardEvent,
          },
          {
            date: 22,
            time: '7:00 PM',
            duration: 60,
            event: events.sixtyMinuteStandardEvent,
          },
          {
            name: 'Full Moon in Aries',
            date: 15,
            time: '7:00 PM',
            duration: 29,
            event: events.ninetyMinuteStandardEvent,
          },
        ],
      },
      {
        month: 'October',
        events: [
          {
            date: 6,
            time: '7:00 PM',
            duration: 60,
            event: events.sixtyMinuteStandardEvent,
          },
          {
            name: 'Energized Solar Eclipse in Libra',
            date: 14,
            time: '7:00 PM',
            duration: 90,
            event: events.ninetyMinuteStandardEvent,
          },
          {
            date: 20,
            time: '7:00 PM',
            duration: 60,
            event: events.sixtyMinuteStandardEvent,
          },
          {
            name: 'Full Moon in Taurus',
            date: 28,
            time: '7:00 PM',
            duration: 90,
            event: events.ninetyMinuteStandardEvent,
          },
        ],
      },
      {
        month: 'November',
        events: [],
      },
      {
        month: 'December',
        events: [],
      },
    ],
  },
];

export const getEventForDate = (year, month, day) => {
  const monthData = eventsArray.find((e) => e.year === year)?.months?.[month];
  if (!monthData) return null;
  const event = monthData.events.find((e) => e.date === day);
  return event ? event : null;
};
