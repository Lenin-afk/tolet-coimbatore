import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useState, useEffect } from 'react';
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import { Link } from 'react-router-dom';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

function MapView() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    // TODO: Fetch listings from backend
    // Filter only listings that have lat and lng
    const fetchListings = async()=>{
      const response = await fetch("https://tolet-coimbatore.up.railway.app/listings")
      const data = await response.json()
      const filteredListings = data.filter((listing)=>{
        return listing.lat && listing.lng
      });
      setListings(filteredListings);
    };
    fetchListings();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-blue-700 mb-4">🗺️ Listings Map</h1>
      <MapContainer 
        center={[11.0168, 76.9558]} 
        zoom={13} 
        style={{ height: "500px", width: "100%" }}
      >
        {/* TODO: TileLayer */}
        {/* TODO: Map through listings and render Marker */}
        {/* TODO: Popup should show title, rent and a link to /listings/{id} */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {listings.map((listing)=>(
          <Marker
            key={listing.id}
            position={[listing.lat,listing.lng]}
          >
            <Popup>
              {listing.title} - ₹{listing.rent}
              <br />
              <Link to={`/listings/${listing.id}`}>View Details</Link>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default MapView;