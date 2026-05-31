import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");

  const handleLogout = () => {
    // TODO: existing logout logic
    // TODO: Remove token from localStorage
    // TODO: Navigate to "/"
    localStorage.removeItem("token");
    navigate("/")
  };

  return (
    <nav className="bg-blue-600 p-4 flex flex-wrap justify-between items-center gap-4">
      <span className="text-white font-bold text-xl">🏠 ToLet Coimbatore</span>
      <div className="flex items-center gap-6 flex-wrap">
        <Link to="/" className="text-white hover:text-yellow-300">Home</Link>
        <Link to="/map" className="text-white hover:text-yellow-300">Map View</Link>
        {isLoggedIn && <Link to="/post-listing" className="text-white hover:text-yellow-300">Post Listing</Link>}
        {!isLoggedIn && 
          <>
            <Link to="/login" className="text-white hover:text-yellow-300">Login</Link>
            <Link to="/register" className="text-white hover:text-yellow-300">Register</Link>
          </>
        }
        {isLoggedIn && <button onClick={handleLogout} className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600">Logout</button>}
      </div>
    </nav>
  );
}

export default Navbar;


