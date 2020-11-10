import React from 'react';
import GoogleMapReact from 'google-map-react';
import LocationPin from './LocationPin';

const Map = () => {
  // lopcation settinig
  const location = {
    address: 'Boston, MA, USA',
    lat: 42.3601,
    lng: 71.0589,
  };
  return (
    <>
      <div style={{ width: '100%', height: '400px' }}>
        {/* Google mao Labariry */}
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAnzspCEJURX6ietNKj5oi0nSNfP_L0dtk' }}
          defaultCenter={location}
          defaultZoom={17}
        >
          {/* Location Pin  */}
          <LocationPin
            text={location.address}
            lat={location.lat}
            lng={location.lng}
          />
        </GoogleMapReact>
      </div>
    </>
  );
};

export default Map;
