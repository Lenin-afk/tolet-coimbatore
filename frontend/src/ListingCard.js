function ListingCard({ title, rent, area, contact }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition">
      {/* TODO: Show title in h2 with className="text-xl font-bold text-blue-700" */}
      {/* TODO: Show area in p with className="text-gray-500 text-sm" */}
      {/* TODO: Show rent in p with className="text-green-600 font-semibold mt-2" like "₹7000 / month" */}
      {/* TODO: Show contact in p with className="text-gray-700 mt-1" */}
      <h2 className="text-xl font-bold text-blue-700">{title}</h2>
      <p className="text-gray-500 text-sm">{area}</p>
      <p className="text-green-600 font-semibold mt-2">Rent: ₹{rent} / month</p>
      <p className="text-gray-700 mt-1">Contact: {contact}</p>
    </div>
  );
}

export default ListingCard;