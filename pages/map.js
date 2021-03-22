import React, { useState } from 'react'
import { GoogleMap,  Marker, useLoadScript, InfoWindow } from '@react-google-maps/api';
import AutoComplete from '../Components/AutoComplete';
import scriptLoader from "react-async-script-loader";

const containerStyle = {
    margin: '30px',
    width: '85vw',
    height: '400px'
};

const location = {
  lat: 23.778119,
  lng: 90.419775
};
const libraries = ["places"];

const GOOGLE_MAP_API_KEY = ''

const divStyle = {
    background: `white`,
    border: `1px solid #ccc`,
    padding: 15
}

function Map() {

  const [mapCenter, setMapCenter] = useState(location)
  const [mapZoom, setMapZoom] = useState(12);
  
  const [allMarker, setAllMarker] = useState([]);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: GOOGLE_MAP_API_KEY ,
    libraries,
  });

  const onLoadMarker = marker => {
      console.log('marker: ', marker)
  }

  const onLoad = infoWindow => {
      console.log('infoWindow: ', infoWindow)
  }

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  return (
    <div>
      <AutoComplete zoom={[ mapZoom, setMapZoom ]} center={[ mapCenter, setMapCenter ]} />
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={mapCenter}
        zoom={mapZoom}
        onClick={(event) => {
          setAllMarker( (current) => [
            ...current,
            {
              lat: event.latLng.lat(),
              lng: event.latLng.lng(),
              time: new Date()
            }
          ])
        }}
      >
        {
          allMarker.map(({lat, lng, time}) => (
            <Marker key={time.toISOString()} onLoad={onLoadMarker} position={{lat: lat, lng: lng}} />
          ))
        }
          
          <InfoWindow
              onLoad={onLoad}
              position={mapCenter}
          >
              <div style={divStyle}>
                  <h5>InfoWindow</h5>
              </div>
          </InfoWindow>
      </GoogleMap>
    </div>
  )
}

export default scriptLoader([
  `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}&libraries=places`,
])( React.memo(Map))