export default function Button({ text }) {
  return (
    <button
      type='button'
      className='px-1 py=.5 m-1 bg-white rounded-md text-peaceful-orange text-xl'
    >
      {text}
    </button>
  );
}
