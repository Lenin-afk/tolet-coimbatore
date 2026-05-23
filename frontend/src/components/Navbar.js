import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      {/* TODO: Add Link to "/" saying "Home" */}
      {/* TODO: Add Link to "/login" saying "Login" */}
      {/* TODO: Add Link to "/register" saying "Register" */}
      {/* TODO: Add Link to "/post-listing" saying "Post Listing" */}
      {/* TODO: Add Link to "/map" saying "Map View" */}
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/post-listing">Post Listing</Link>
      <Link to="/map">Map View</Link>
    </nav>
  );
}

export default Navbar;