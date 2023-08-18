import Map from '@/components/location/map';

export default function Page() {
  return (
    <div className='relative border-[.25rem] border-white rounded-xl p-6 bg-center bg-[url("/images/Sunflower_Background.svg")] shadow-xl'>
      <div className='flex flex-col gap-4'>
        <div className='border-[.25rem] border-white rounded-xl py-2 bg-peaceful-orange shadow-xl'>
          <h1 className='text-lg text-white text-center'>
            3333 South 900 East Street
          </h1>
          <div className='flex justify-center items-center'>
            <div className='h-1 grow bg-white rounded-r-lg'></div>
            <h1 className='text-lg text-white text-center px-3'>Suite 160</h1>
            <div className='h-1 grow bg-white rounded-l-lg'></div>
          </div>
          <h1 className='text-lg text-white text-center'>Millcreek, Utah</h1>
        </div>
        <div className='h-72'>
          <Map />
        </div>
        <div className='border-[.25rem] border-white rounded-xl py-2 bg-peaceful-orange shadow-xl'>
          <h1 className='text-lg text-white text-center'>
            For any questions, please call me at
          </h1>
          <div className='flex justify-center items-center'>
            <div className='h-1 grow bg-white rounded-r-lg'></div>
            <h1 className='text-lg text-white text-center px-3'>
              (801) 636-4648
            </h1>
            <div className='h-1 grow bg-white rounded-l-lg'></div>
          </div>

          <h1 className='text-lg text-white text-center'>
            <span style={{ color: 'white' }}>&#9825; </span>
            Have a wonderful day!
            <span style={{ color: 'white' }}> &#9825;</span>
          </h1>
        </div>
      </div>
    </div>
  );
}
