export default function EventsLayout({ children }) {
  return (
    <div className='flex flex-col items-center gap-3'>
      <h2 className='text-white'>Select dates below to see scheduled events</h2>
      <div className='w-full border-4 border-white rounded-xl flex flex-col'>
        {children}
      </div>
    </div>
  );
}
