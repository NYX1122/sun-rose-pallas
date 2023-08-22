export default function Button({ text }) {
  return (
    <button
      type='button'
      className='px-1 py=.5 bg-white rounded-md text-peaceful-orange text-xl md:text-3xl md:p-2 shadow-button'
    >
      {text}
    </button>
  );
}
