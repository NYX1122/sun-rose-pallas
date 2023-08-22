import Image from 'next/image';

import Paragraph from '@/components/services/paragraph';

import rose from '@/images/Rose.svg';
import crystal from '@/images/Crystal.svg';
import card from '@/images/Card.svg';
import bowl from '@/images/Bowl.svg';

export default function Page() {
  const serviceArray = [
    {
      title: 'Chakra Balancing & Cleansing',
      graphic: rose,
      graphicAlt: 'Graphic of a rose.',
      shortDescription:
        'In order for you to connect with your highest self, special attention will be given for balancing, cleansing, and raising each of your chakras to their highest vibration. Your energy, emotionality, and spirituality will be enriched, inspiring peace of mind, and health of body.',
      description:
        'We will focus around balancing, cleansing, and raising each of your chakras back to their highest vibration. I will intuitively go through each of your chakras- feeling the energy and determining what kind of influence the flow needs so you can connect with your highest self. I will hold space for you to connect intuitively, whether that is: energetically, emotionally, physically, or spiritually. I will intuitively work with your energy to enhance anything you want to manifest or release.',
      graphicFirst: true,
    },
    {
      title: 'Crystal Infused Healing',
      graphic: crystal,
      graphicAlt: 'Graphic of a crystal.',
      shortDescription:
        'The sacred energy within gemstones enhances chakral influence. My assortment of healing crystals permit a bond to the collective universe. An enduring  connection between your internal mind and your eternal soul will grant a lasting sense of self actualization.',
      description:
        'We will focus around balancing, cleansing, and raising each of your chakras back to their highest vibration, aided with the energy of crystals. I will intuitively go through each of your chakras- feeling the energy and determining what kind of influence the flow needs so you can connect with your highest self. I will provide crystals, (or you may bring your own), and I will incorporate their energy/influence/magic within your chakras for a complete connection within yourself and the universe.',
      graphicFirst: false,
    },
    {
      title: 'Card Readings',
      graphic: card,
      graphicAlt: 'Graphic of a tarot card.',
      shortDescription:
        'Card Readings provide guidance through connecting to your highest self, and the universal energy around you. Allowing the reading to illuminate, educate,  and conceptualize the lessons of the past, the challenges of the present, and the prospects of the future.',
      description:
        'I will energetically hold space for you to connect with yourself, your highest-self, as well as the infinite universe around you for any guidance you might be seeking; whether that is knowingly, or not. I will intuitively work with the cards to assist you in receiving any guidance and hopefully providing a clearer sense of direction in life and with self. I will provide the card decks for the session, but you are always more than welcome to provide your own deck if you are feeling drawn to it.',
      graphicFirst: true,
    },
    {
      title: 'Sound Therapy',
      graphic: bowl,
      graphicAlt: 'Graphic of a singing bowl.',
      shortDescription:
        'The purity of vibration has a very powerful healing presence, this therapeutic practice increases spiritual awareness while also providing a deep connection to your infinite soul. Guided meditation is also incorporated, allowing the cognizance of universal messages.',
      description:
        'I will energetically hold space for you to relax and connect once again with your infinite soul; allowing the strongest sense of healing and awareness to happen. As I intuitively play my singing bowls, each bowl will connect with your different energetic portals (chakras) and allow the opportunity to bring them back to a strong positive flow. Guided meditation is incorporated as well, connecting with your highest self and allowing any universal messages to bring themselves forward. I will also have a drum there to help with breaking away the old, and making space for the new.',
      graphicFirst: false,
    },
  ];

  return (
    <div className='h-fit flex flex-col gap-6 md:w-[600px] md:justify-evenly md:gap-0 md:h-full'>
      {serviceArray.map((item) => (
        <div className='flex flex-col items-center gap-2 md:rounded-xl md:p-4 md:bg-peaceful-orange/[.85] md:shadow-container'>
          <h2 className='text-lg text-white md:text-xl drop-shadow-visibility'>
            {item.title}
          </h2>
          <div className='flex justify-center gap-2 md:gap-4'>
            {item.graphicFirst ? (
              <>
                <Image
                  src={item.graphic}
                  alt={item.graphicAlt}
                  className='drop-shadow-svg'
                />
                <Paragraph
                  shortDescription={item.shortDescription}
                  description={item.description}
                  graphicFirst={item.graphicFirst}
                />
              </>
            ) : (
              <>
                <Paragraph
                  shortDescription={item.shortDescription}
                  description={item.description}
                  graphicFirst={item.graphicFirst}
                />
                <Image
                  src={item.graphic}
                  alt={item.graphicAlt}
                  className='drop-shadow-svg'
                />
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
