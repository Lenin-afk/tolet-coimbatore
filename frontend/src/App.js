import ListingCard from './ListingCard';

const listings = [
  {
        title:"1BHK",
        rent:4000,
        area:"RS Puram"
  },
  {
        title:"2BHK",
        rent:8000,
        area:"Sitra"
  },
  {
        title:"4BHK",
        rent:15000,
        area:"Saibaba Colony"
  }

  // TODO: Add 3 listing objects with title, rent, area
];

function App() {
  return (
    <div>
      <h1>ToLet Coimbatore</h1>
      {/* TODO: Map through listings array and render a ListingCard for each */}
      {
      listings.map((listing,index)=>(
        <ListingCard
          key={index}
          title={listing.title}
          rent={listing.rent}
          area={listing.area}
        />
      ))}
      {/* Each ListingCard needs a unique key prop */}
    </div>
  );
}

export default App;