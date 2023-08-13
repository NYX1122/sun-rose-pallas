import Calendar from '@/components/events/calendar';

export default function Page() {
  return (
    <div className='flex flex-col items-center gap-3'>
      <h2 className='text-white'>Select dates below to see scheduled events</h2>
      <Calendar />
    </div>
  );
}
