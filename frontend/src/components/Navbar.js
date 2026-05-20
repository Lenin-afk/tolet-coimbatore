import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      {/* TODO: Add Link to "/" saying "Home" */}
      {/* TODO: Add Link to "/login" saying "Login" */}
      {/* TODO: Add Link to "/register" saying "Register" */}
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </nav>
  );
}

export default Navbar;