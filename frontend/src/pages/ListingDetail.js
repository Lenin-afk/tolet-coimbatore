import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ListingDetail() {
  const { id } = useParams();
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Add async arrow function inside useEffect
    const fetchListing = async () => {
      // TODO: Fetch single listing from backend using id
      // "https://your-backend-url/listings/{id}"
      // Set listing with fetched data
      // Set loading to false
      // TODO: Convert existing .then fetch to await
      // TODO: Copy your existing fetch logic here
      const response = await fetch(`https://tolet-coimbatore.up.railway.app/listings/${id}`);
      const data = await response.json();
      setListing(data);
      setLoading(false);
    };
    fetchListing();
  }, [id]);

  if (loading) return <div className="flex justify-center items-center h-screen">
    <p className="text-blue-600 text-xl">Loading...</p>
  </div>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white rounded-xl shadow-md p-6 max-w-2xl mx-auto">
        {/* TODO: If photo_url show full width image */}
        {/* TODO: Show title in h1 */}
        {/* TODO: Show area, rent, contact */}
        {/* TODO: WhatsApp button - href="https://wa.me/91{listing.contact}" */}
        {listing.photo_url &&(
            <img 
                src={listing.photo_url}
                alt={listing.title}
                className="w-full h-72 object-cover rounded-lg mb-4"
            />
        )}
        <h1 className="text-xl font-bold text-blue-700">{listing.title}</h1>
        <p className="text-gray-500 text-sm">{listing.area}</p>
        <p className="text-green-600 font-semibold mt-2">Rent: ₹{listing.rent} / month</p>
        <p className="text-gray-700 mt-1">Contact: {listing.contact}</p>
        <a 
            href={`https://wa.me/91${listing.contact}`}
            className="mt-4 block text-center bg-green-500 text-white p-3 rounded-lg hover:bg-green-600"
        >
            Contact on WhatsApp
        </a>
      </div>
    </div>
  );
}

export default ListingDetail;