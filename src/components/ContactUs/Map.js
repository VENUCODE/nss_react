import React, { memo, useCallback, useState } from "react";

import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
const apiKey = "AIzaSyDoHTfjnTnbU_EPSxffAB7ZP18PMp0jcog";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 15.538182985498914,
  lng: 79.96810712768611,
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apiKey,
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(
    function callback(map) {
      const bounds = new window.google.maps.LatLngBounds(center);
      map.fitBounds(bounds);
      setMap(map);
    },

    []
  );

  const onUnmount = useCallback(
    function callback(map) {
      setMap(null);
    },

    []
  );

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker position={center} />
      <InfoWindow position={center}>
        <div className="card">
          <h2>RGUKT ONGOLE</h2>
        </div>
      </InfoWindow>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default memo(Map);
