function ListingCard({ title, rent, area }) {
  return (
    <div>
      {/* TODO: Show title in an h2 tag */}
      {/* TODO: Show area in a p tag */}
      {/* TODO: Show rent in a p tag like "Rent: ₹7000" */}
      <h2>{title}</h2>

      <p>{area}</p>
      
      <p>Rent: ₹{rent}</p>
    </div>
  );
}

export default ListingCard;