import Image from 'next/image';
import Link from 'next/link';

import home from '@/images/Home.svg';

export default function HomeButton() {
  return (
    <Link href='/'>
      <Image alt='House graphic.' src={home}></Image>
    </Link>
  );
}
