import { useState, useEffect } from 'react';
import ListingCard from '../ListingCard';

function Home() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // TODO: Add async arrow function inside useEffect
    const fetchListings = async () => {
      // TODO: Convert existing .then fetch to await
      // TODO: Copy your existing fetch logic here
      const response = await fetch("https://tolet-coimbatore.up.railway.app/listings");
      const data = await response.json();
      setListings(data);
      setLoading(false);
    };
    fetchListings();
  }, []);

  const filtered = listings.filter(l =>
    l.area.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return (
  <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600"></div>
  </div>
  );

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">
        🏠 Rooms in Coimbatore
      </h1>
      {/* TODO: Add search input with className="w-full p-3 rounded-lg border border-gray-300 mb-6 shadow-sm" */}
      <input 
        type="text"
        placeholder="Search by area"
        className="w-full p-3 rounded-lg border border-gray-300 mb-6 shadow-sm"
        onChange={(e)=>
        {
          setSearch(e.target.value);
        }}
      />
      {filtered.length === 0 ? (
        <div className="text-center py-20">
          {/* TODO: Add a big emoji like 🏠 */}
          {/* TODO: Add h2 saying "No listings found" */}
          {/* TODO: Add p saying "Try searching a different area" */}
          <div className="text-6xl">🏠</div>
          <h2 className="text-2xl font-bold text-gray-700 mt-4">
            No listings found
          </h2>
          <p className="text-gray-500 mt-2">
            Try searching a different area
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* TODO: existing map of ListingCards */}
          {/* TODO: Map through filtered and render ListingCard for each */}
          {/* TODO: Add id={listing.id} to ListingCard */}
          {filtered.map((listing)=>(
            <ListingCard
              key={listing.id}
              id={listing.id}
              title={listing.title}
              rent={listing.rent}
              area={listing.area}
            />
          ))}
        </div>
      )}
    </div>
  );
}
export default Home;