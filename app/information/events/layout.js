export default function EventsLayout({ children }) {
  return (
    <div className='flex flex-col items-center gap-10 md:w-[70%]'>
      <h2 className='text-white bg-peaceful-orange/[.85] shadow-container p-2 rounded-xl md:text-2xl'>
        Select dates below to see scheduled events
      </h2>
      <div className='w-full rounded-xl flex flex-col bg-peaceful-orange/[.85] shadow-container'>
        {children}
      </div>
    </div>
  );
}
