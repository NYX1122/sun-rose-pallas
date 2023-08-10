import HomeButton from '@/components/homeButton';

export default function InformationLayout({ children }) {
  return (
    <section>
      <HomeButton />

      {children}
    </section>
  );
}
