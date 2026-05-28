function ListingCard({ title, rent, area, contact, photo_url }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition">
      {/* TODO: If photo_url exists, show an img tag with src=photo_url 
      className="w-full h-48 object-cover rounded-lg mb-3" */}
      {/* TODO: Show title in h2 with className="text-xl font-bold text-blue-700" */}
      {/* TODO: Show area in p with className="text-gray-500 text-sm" */}
      {/* TODO: Show rent in p with className="text-green-600 font-semibold mt-2" like "₹7000 / month" */}
      {/* TODO: Show contact in p with className="text-gray-700 mt-1" */}
      {photo_url &&(
        <img 
          src={photo_url}
          alt={title}
          className="w-full h-48 object-cover rounded-lg mb-3"
        />
      )}
      <h2 className="text-xl font-bold text-blue-700">{title}</h2>
      <p className="text-gray-500 text-sm">{area}</p>
      <p className="text-green-600 font-semibold mt-2">Rent: ₹{rent} / month</p>
      <p className="text-gray-700 mt-1">Contact: {contact}</p>
      <p>{photo_url}</p>
    </div>
  );
}

export default ListingCard;