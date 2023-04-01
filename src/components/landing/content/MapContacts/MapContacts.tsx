//@ts-nocheck
import React, { useRef, useState } from 'react';
import {
  GoogleMap,
  MarkerF,
  useJsApiLoader,
  InfoWindowF,
} from '@react-google-maps/api';

//убрать //@ts-nocheck и описать типы

const containerStyle = {
  width: '100%',
  height: '100%',
};

interface ICenter {
  lat: number;
  lng: number;
}

interface Props {
  center: ICenter;
  marker_title: string;
}

const MapContacts: React.FC<Props> = ({ center, marker_title = '' }) => {
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAP;
  const [popupOpen, setPopupOpen] = useState(false);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyC9ofxwIKyzFAYZiDL4l7Xg9SdPqKGqRjg',
  });
  const mapRef = useRef(undefined);

  const onLoad = React.useCallback(function callback(map) {
    mapRef.current = map;
  }, []);

  const onUnmount = React.useCallback(function callback() {
    mapRef.current = undefined;
  }, []);

  return (
    <>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          <MarkerF
            onLoad={onLoad}
            onClick={() => {
              setPopupOpen(true);
            }}
            position={center}
            icon={{
              url: '/images/icon/map-marker.svg',
            }}
          >
            {popupOpen ? (
              <InfoWindowF onCloseClick={() => setPopupOpen(false)}>
                <div>{marker_title}</div>
              </InfoWindowF>
            ) : null}
          </MarkerF>
        </GoogleMap>
      ) : (
        'Loading map'
      )}
    </>
  );
};

export default MapContacts;
