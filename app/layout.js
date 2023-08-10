import './globals.css';
import { Amita } from 'next/font/google';

const amita = Amita({ subsets: ['latin'], weight: '400' });

export const metadata = {
  title: 'Sun Rose Pallas Healing',
  description:
    'Come relax, recharge, and regroup at Sun Rose, where your physical and spiritual needs will be cared for. Allow me to help you connect with your universal soul, so you may find joy, peace, and health in everlasting wellness.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={amita.className}>{children}</body>
    </html>
  );
}
