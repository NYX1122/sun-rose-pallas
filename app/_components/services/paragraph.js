'use client';

import { useRef, useEffect, useState } from 'react';

export default function Paragraph({
  shortDescription,
  description,
  graphicFirst,
}) {
  const childRef = useRef(null);
  const parentRef = useRef(null);
  const [parentHeight, setParentHeight] = useState(0);

  useEffect(() => {
    const calculateHeight = () => {
      if (childRef.current && parentRef.current) {
        const childHeight = childRef.current.offsetHeight;

        const parentStyle = window.getComputedStyle(parentRef.current);
        const parentPaddingTop = parseFloat(parentStyle.paddingTop) || 0;
        const parentPaddingBottom = parseFloat(parentStyle.paddingBottom) || 0;
        const parentGap = parseFloat(parentStyle.gap) || 0;

        const totalHeight =
          childHeight + parentPaddingTop + parentPaddingBottom + parentGap;

        setParentHeight(`${totalHeight}px`);
      }
    };

    const timeoutId = setTimeout(calculateHeight, 100); // Or try a longer delay if needed

    return () => clearTimeout(timeoutId);
  }, [shortDescription]);

  useEffect(() => {
    function handleResize() {
      if (childRef.current && parentRef.current) {
        const childHeight = childRef.current.offsetHeight;

        const parentStyle = window.getComputedStyle(parentRef.current);
        const parentPaddingTop = parseFloat(parentStyle.paddingTop) || 0;
        const parentPaddingBottom = parseFloat(parentStyle.paddingBottom) || 0;
        const parentGap = parseFloat(parentStyle.gap) / 2 || 0;

        const totalHeight =
          childHeight + parentPaddingTop + parentPaddingBottom + parentGap;

        setParentHeight(`${totalHeight}px`);
      }
    }

    window.addEventListener('resize', handleResize);

    // Don't forget to remove the listener when the component unmounts
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      style={{ maxHeight: parentHeight }}
      className={
        'overflow-y-auto rounded-xl shadow-container p-2 bg-black/50 flex flex-col gap-2'
      }
      ref={parentRef}
    >
      <div className='flex flex-col gap-2 max-h-full overflow-y-auto pr-2'>
        <p
          ref={childRef}
          className={`text-xs text-white md:text-sm ${
            graphicFirst ? 'text-left' : 'text-right'
          }`}
        >
          {shortDescription}
        </p>
        <p
          className={`text-xs text-white md:text-sm ${
            graphicFirst ? 'text-left' : 'text-right'
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
