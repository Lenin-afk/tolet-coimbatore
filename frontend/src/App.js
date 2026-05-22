import { BrowserRouter, Routes, Route } from 'react-router-dom';
// TODO: Import Home, Login, Register pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './components/Navbar';
// TODO: Import PostListing
import PostListing from './pages/PostListing';

function App() {
  return (
    <BrowserRouter>
      {/* TODO: Add Navbar here above Routes so it shows on all pages */}
      <Navbar />
      <Routes>
        {/* existing routes */}
        {/* TODO: Add route for "/post-listing" pointing to PostListing */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/post-listing" element={<PostListing/>} />       
      </Routes>
    </BrowserRouter>
  );
}

export default App;