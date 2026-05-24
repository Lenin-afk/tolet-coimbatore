// TODO: Move your existing App.js listing display code here
// Show h1 "ToLet Coimbatore", search input, and listing cards
import { useState, useEffect } from 'react';
import ListingCard from '../ListingCard';

function Home() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  // TODO: Add a state variable called "search" with default value ""
  const [search, setSearch] = useState("");

  useEffect(() => {
    // TODO: Fetch listings from backend
    fetch("https://tolet-coimbatore-production.up.railway.app/listings")
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
  const filtered=listings.filter((listing)=>
  {
    return listing.area
    .toLowerCase()
    .includes(search.toLowerCase())
  });
  // TODO: Create a variable called "filtered" that filters listings
  // where listing.area includes the search text (case insensitive)

  if (loading) return <div>Loading listings...</div>;

  return (
    <div>
      <h1>ToLet Coimbatore</h1>
      {/* TODO: Add an input that updates search state on change */}
      {/* TODO: Map through "filtered" instead of "listings" */}
      <input 
        type="text"
        placeholder="Search by area"
        onChange={(e)=>
        {
          setSearch(e.target.value);
      }}/>
      {filtered.map((listing)=>(
        <ListingCard
          key={listing.id}
          title={listing.title}
          rent={listing.rent}
          area={listing.area} 
          />
      ))}
    </div>
  );
}

export default Home;