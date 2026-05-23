import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const listings = [
  { id: 1, title: "1BHK", area: "RS Puram", lat: 11.0168, lng: 76.9558 },
  { id: 2, title: "2BHK", area: "Gandhipuram", lat: 11.0204, lng: 76.9689 },
  { id: 3, title: "Single Room", area: "Saibaba Colony", lat: 11.0107, lng: 76.9554 },
];

const mapContainerStyle = {
  // TODO: Set width to "100%" and height to "500px"
  width: "100%",
  height: "500px"
};

const center = {
  // TODO: Set lat and lng to center of Coimbatore
  // lat: 11.0168, lng: 76.9558
  lat: 11.0168,
  lng: 76.9558
};

function MapView() {
  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_KEY}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={13}
      >
        {/* TODO: Map through listings and render a Marker for each */}
        {/* Each marker needs position={{ lat: listing.lat, lng: listing.lng }} */}
        {listings.map((listing)=>(
            <Marker
                key={listing.id} 
                position={{
                    lat: listing.lat,
                    lng: listing.lng
                }}
            />
        ))}
      </GoogleMap>
    </LoadScript>
  );
}

export default MapView;