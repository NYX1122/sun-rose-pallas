import Map from '@/components/location/map';

export default function Page() {
  return (
    <div className='w-full h-full rounded-xl p-4 bg-peaceful-orange/[.85] shadow-container md:w-[70%] md:h-[80%] md:p-6'>
      <div className='h-full flex flex-col gap-4 md:gap-6'>
        <div className='rounded-xl py-2 px-4 bg-black/50 shadow-container md:px-6 md:py-3'>
          <h1 className='text-white text-center md:text-xl'>
            3333 South 900 East Street
          </h1>
          <div className='flex justify-center items-center'>
            <div className='h-1 grow bg-white rounded-lg'></div>
            <h1 className='text-white text-center px-3 md:text-xl md:px-4'>
              Suite 160
            </h1>
            <div className='h-1 grow bg-white rounded-lg'></div>
          </div>
          <h1 className='text-white text-center md:text-xl'>Millcreek, Utah</h1>
        </div>
        <Map />
        <div className='rounded-xl py-2 px-4 bg-black/50 shadow-container md:px-6 md:py-3'>
          <h1 className='text-white text-center md:text-xl'>
            For any questions, please call
          </h1>
          <div className='flex justify-center items-center'>
            <div className='h-1 grow bg-white rounded-lg'></div>
            <h1 className='text-white text-center px-3 md:text-xl md:px-4'>
              (801) 636-4648
            </h1>
            <div className='h-1 grow bg-white rounded-lg'></div>
          </div>

          <h1 className='text-white text-center md:text-xl'>
            <span style={{ color: 'white' }}>&#9825; </span>
            Have a wonderful day!
            <span style={{ color: 'white' }}> &#9825;</span>
          </h1>
        </div>
      </div>
    </div>
  );
}
