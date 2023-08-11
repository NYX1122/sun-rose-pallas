import Image from 'next/image';

import Button from '@/components/button';

import chandler from '@/images/Chandler.jpg';
import whiteSunflower from '@/images/White_Sunflower.svg';
import sunflowerLeaf from '@/images/Sunflower_Leaf.svg';

export default function Page() {
  return (
    <>
      <div className='absolute top-6 left-12 rotate-[135deg]'>
        <Image src={sunflowerLeaf} alt='Sunflower leaf design.'></Image>
      </div>
      <div className='absolute top-64 left-2 rotate-[225deg]'>
        <Image src={sunflowerLeaf} alt='Sunflower leaf design.'></Image>
      </div>
      <div className='absolute top-[22rem] right-2 rotate-45'>
        <Image src={sunflowerLeaf} alt='Sunflower leaf design.'></Image>
      </div>
      <div className='absolute -top-10 -left-8'>
        <Image src={whiteSunflower} alt='Sunflower design.'></Image>
      </div>
      <div className='absolute top-44'>
        <Image src={whiteSunflower} alt='Sunflower design.'></Image>
      </div>
      <div className='absolute top-96 right-2'>
        <Image src={whiteSunflower} alt='Sunflower design.'></Image>
      </div>
      <div className='absolute top-36 -right-12'>
        <Image src={whiteSunflower} alt='Sunflower design.'></Image>
      </div>
      <div className='flex flex-col gap-5'>
        <div className='border-4 border-white rounded-3xl p-2'>
          <p className='text-white text-sm text-center'>
            Hey, thank you for checking out my website. I’m Chandler! And here
            is a little bit about me, and how Sun Rose Pallas Healing Came to
            be.
          </p>
        </div>
        <div className='mx-16'>
          <Image
            alt="Chandler Reddington's portrait."
            src={chandler}
            className='border-4 border-white rounded-3xl'
          ></Image>
        </div>
        <div className='border-4 border-white rounded-3xl p-2'>
          <p className='text-white text-center text-xs'>
            My spiritual journey started a long time ago. Ever since I was
            younger, I’ve had a strong sense of my soul, and the life force that
            is within all of us. I have always been very interested in the
            ancient religions, and philosophies of the old world. Especially
            with dealing with my trauma on my own for a while, I always held on
            to the positive outlook of pushing forward. This pushed me to learn
            more about practicing Mindfulness, and other very helpful
            techniques. Learning we are in true control over our emotions, not
            the other way around.
            <br /> <br />
            When I grew older, I actually studied at the Utah College of Massage
            Therapy in Downtown Salt Lake, completing the professional program,
            then taking it a step further to complete the Master Bodyworker
            program. I learned more than I ever thought I could. I learned about
            the incredible connection between our mind, body, and soul. We dove
            into the eastern philosophies and how even the western science can
            support old holistic practices, and why that's so important today. I
            was a massage therapist for about 6 years, until I found myself
            losing my passion for massage. I was leaning more into the energy
            side of things, the spiritual side of things, and the metaphysical
            world.
            <br /> <br />
            I then found myself on a whole spiritual journey of finding what my
            own soul connects with. I left massage therapy, and started working
            at a crystal shop. While at the crystal shop, I truly learned even
            more that my soul resonated with. I was thriving in my spiritual
            journey of strong personal growth. I learned sound therapy. I
            enhanced my skills as an energy worker and human. I refined and
            tuned my sessions, to provide the community with what feels right to
            my journey. I connected more with my soul path, and I’m loving the
            journey of connection and growth that it provides me. This energy,
            and the strong hope I have always felt, is where Sun Rose Pallas
            Healing came from. The name even in itself means so much to me. It
            is a combination of 3 energies in my life that have guided me so
            much. “Sun” comes from the Greek God Apollo, enhancing one's
            creativity, intuition, and true healing. “Rose” comes from the Greek
            Goddess Aphrodite, enhancing one's unconditional love for all
            things, our passion, and the beauty we all possess. “Pallas” comes
            from the Greek Goddess Pallas Athena, reminding us of our logical
            side, our strengths, and the perseverance it takes to stand our
            ground. Then, healing. The true healing can only start if you take
            the first steps towards being mindful of your purpose here. It is
            realizing that your purpose is not to heal, but to live. And
            sometimes you must live to truly heal.
            <br /> <br />
            I appreciate you taking the time to learn a bit about me, and my
            passion. I truly appreciate you. Always remember to trust yourself,
            and where you need to be.
            <br /> <br />I hope to be meeting you soon, and don't hesitate to
            reach out through DM, text, or even email for any questions
            regarding my sessions or anything else about me😊. Have a beautiful
            time, and may the universe be with you.
          </p>
        </div>
      </div>
    </>
  );
}
