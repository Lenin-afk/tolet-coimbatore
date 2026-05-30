import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  
  // TODO: Create a variable "isLoggedIn" that checks if token exists in localStorage
  const isLoggedIn = !!localStorage.getItem("token");

  const handleLogout = () => {
    // TODO: Remove token from localStorage
    // TODO: Navigate to "/"
    localStorage.removeItem("token");
    navigate("/")
  };

  return (
    <nav className="bg-blue-600 p-4 flex gap-6 items-center">
      <span className="text-white font-bold text-xl">🏠 ToLet Coimbatore</span>
      <Link to="/" className="text-white hover:text-yellow-300">Home</Link>
      <Link to="/map" className="text-white hover:text-yellow-300">Map View</Link>
      {/* TODO: Show "Post Listing" link only if isLoggedIn */}
      { isLoggedIn &&(
          <Link to="/post-listing" className= "text-white hover:text-yellow-300">Post Listing</Link>
      )}
      {/* TODO: Show "Login" and "Register" links only if NOT isLoggedIn */}
      { !isLoggedIn &&(
        <>
          <Link to="/login" className="text-white hover:text-yellow-300">Login</Link>
          <Link to="/register" className= "text-white hover:text-yellow-300">Register</Link>
        </>
      )}
      {/* TODO: Show "Logout" button only if isLoggedIn */}
      { isLoggedIn &&(
          <button 
            onClick={handleLogout}
            className="ml-auto bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
          >
            Logout
          </button>
      )}
    </nav>
  );
}

export default Navbar;