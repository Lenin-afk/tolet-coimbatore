import { BrowserRouter, Routes, Route } from 'react-router-dom';
// TODO: Import Home, Login, Register pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './components/Navbar';
// TODO: Import PostListing
import PostListing from './pages/PostListing';
import MapView from './pages/MapView';
// TODO: Import ListingDetail
import ListingDetail from './pages/ListingDetail'

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
        {/* TODO: Add route for "/map" pointing to MapView  */}
        <Route path="/map" element={<MapView/>} />
        {/* TODO: Add route for "/listings/:id" pointing to ListingDetail */}
        <Route path="/listings/:id" element={<ListingDetail/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;