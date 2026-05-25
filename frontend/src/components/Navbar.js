import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 flex gap-6 items-center">
      <span className="text-white font-bold text-xl">🏠 ToLet Coimbatore</span>
      {/* TODO: Style each Link with className="text-white hover:text-yellow-300" */}
      <Link to="/" className="text-white hover:text-yellow-300">Home</Link>
      <Link to="/login" className="text-white hover:text-yellow-300">Login</Link>
      <Link to="/register" className= "text-white hover:text-yellow-300">Register</Link>
      <Link to="/post-listing" className= "text-white hover:text-yellow-300">Post Listing</Link>
      <Link to="/map" className="text-white hover:text-yellow-300">Map View</Link>
    </nav>
  );
}

export default Navbar;