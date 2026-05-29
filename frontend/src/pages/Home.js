import { useState, useEffect } from 'react';
import ListingCard from '../ListingCard';

function Home() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // TODO: Copy your existing fetch logic here
    fetch("https://tolet-coimbatore.up.railway.app/listings")
    .then((response)=>
    {
      return response.json()
    })
    .then((data)=>
    {
      setListings(data)
      setLoading(false)
    })
  }, []);

  const filtered = listings.filter(l =>
    l.area.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return (
    <div className="flex justify-center items-center h-screen">
      <p className="text-blue-600 text-xl font-semibold">Loading listings...</p>
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
    </div>
  );
}
export default Home;