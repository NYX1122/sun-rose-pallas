'use client';

import { useMemo, useState } from 'react';

import Link from 'next/link';

import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';

export default function Map() {
  const [selectedMarker, setSelectedMarker] = useState(null);
  const markers = [
    { id: 1, location: { lat: 40.69941889699853, lng: -111.86498463105256 } },
  ];
  const center = useMemo(() => markers[0].location, []);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded)
    return (
      <div className='w-full h-full border-4 border-white rounded-xl overflow-hidden bg-white'></div>
    );
  return (
    <div className='w-full h-full border-4 border-white rounded-xl overflow-hidden'>
      <GoogleMap
        mapTypeId={null}
        options={{
          mapId: '9706c4844def0575',
          mapTypeControl: false,
          streetViewControl: false,
        }}
        zoom={12}
        center={center}
        mapContainerStyle={{
          width: '100%',
          height: '100%',
        }}
      >
        <Marker
          position={center}
          onClick={() => {
            setSelectedMarker(markers[0]);
          }}
        >
          {selectedMarker && (
            <InfoWindow
              position={selectedMarker.location}
              onCloseClick={() => {
                setSelectedMarker(null);
              }}
            >
              <div>
                <h1 className='text-md font-bold'>Sun Rose Pallas Healing</h1>
                <h1 className='text-md'>3333 South 900 East Street</h1>
                <h1 className='text-md'>Suite 160</h1>
                <h1 className='text-md'>Millcreek, Utah</h1>
                <Link
                  href='https://goo.gl/maps/atHwhNJngArTmjPV8'
                  target='_blank'
                >
                  <p className='text-md text-blue-600'>View on Google Maps</p>
                </Link>
              </div>
            </InfoWindow>
          )}
        </Marker>
      </GoogleMap>
    </div>
  );
}
