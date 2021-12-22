import React, { useEffect, useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import './map.css';
import { useSelector } from 'react-redux';
import { googleMapsApiKey } from '../../config.json';
const containerStyle = {
  width: '100%',
  height: '100vh',
};
const defaultCenter = {
  lng: 34.8909185,
  lat: 31.7040256,
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey,
  });
  //   const [map, setMap] = React.useState(null);
  const [center, setCenter] = useState(defaultCenter);
  const products = useSelector((state) => state.productReducer.products);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lng = position.coords.longitude;
      setCenter({ lat, lng });
    });
  }, []);

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
      {products.map((p) => {
        return <Marker position={p.position} key={p.id} />;
      })}

      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default Map;
